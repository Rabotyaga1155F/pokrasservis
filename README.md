# Pokrasservis

Сайт PS-POLYMER на Next.js, React и TypeScript: https://pspolymer96.ru.

## Подтверждённая конфигурация сервера

Данные проверены при деплое 14.10.2026.

| Параметр | Значение |
| --- | --- |
| Папка проекта | `/var/www/pokrasservis` |
| Пользователь приложения и владелец файлов | `pokrasservis` |
| Репозиторий | `https://github.com/Rabotyaga1155F/pokrasservis.git` |
| Ветка деплоя | `master` |
| Node.js | `v24.21.0`, `/usr/bin/node` |
| Пакетный менеджер | pnpm, `/usr/bin/pnpm`; установленный `node_modules/.pnpm` |
| Lock-файл для pnpm | `pnpm-lock.yaml` |
| Служба systemd | `pokrasservis.service` |
| Файл службы | `/etc/systemd/system/pokrasservis.service` |
| Рабочая папка службы | `/var/www/pokrasservis` |
| Адрес приложения | `127.0.0.1:3000` |
| Конфигурация сайта Nginx | `/etc/nginx/sites-enabled/pokrasservis` |
| Прокси Nginx | `http://127.0.0.1:3000` |
| Переменные окружения | `/var/www/pokrasservis/.env.local` |

Служба запускает приложение командой:

```bash
/usr/bin/node /var/www/pokrasservis/node_modules/next/dist/bin/next start --hostname 127.0.0.1 --port 3000
```

Для подключения используй существующий SSH-доступ. Не публикуй IP-адрес сервера, учётные данные и ключи доступа в репозитории.

## Обычный деплой

Этот порядок подходит для изменений кода и фотографий без изменения зависимостей. Сборка выполняется в папке работающего приложения, поэтому на время сборки службу останавливаем. В этот период сайт недоступен.

### 1. Локально

Закоммить нужные изменения в `master`, затем отправь их в GitHub:

```bash
git push origin master
```

### 2. На сервере: проверить Git и получить изменения

Все серверные команды ниже выполняются в административной SSH-сессии. Операции с проектом выполняются от пользователя `pokrasservis`, чтобы сохранять владельца файлов.

```bash
sudo -u pokrasservis sh -c 'cd /var/www/pokrasservis && git status --short --branch && git log -1 --oneline'
```

В выводе не должно быть изменённых или неотслеживаемых файлов. Если они есть, сначала выясни их назначение и сохрани нужные изменения; не сбрасывай их.

```bash
sudo -u pokrasservis git -C /var/www/pokrasservis pull --ff-only
```

Если `pull` завершился ошибкой, не переходи к сборке. `--ff-only` предотвращает автоматическое создание merge-коммита на сервере.

### 3. Собрать и запустить

Если зависимости не изменились:

```bash
systemctl stop pokrasservis && sudo -u pokrasservis sh -c 'cd /var/www/pokrasservis && /usr/bin/node node_modules/next/dist/bin/next build' && systemctl start pokrasservis
```

Это та же сборка, что в скрипте `build` из `package.json`. Служба запустится только после успешной сборки. Nginx при обычном деплое перезапускать не требуется.

Если изменились зависимости в `package.json` или `pnpm-lock.yaml`, вместо команды выше выполни установку и сборку:

```bash
systemctl stop pokrasservis && sudo -u pokrasservis sh -c 'cd /var/www/pokrasservis && /usr/bin/pnpm install --frozen-lockfile && /usr/bin/node node_modules/next/dist/bin/next build' && systemctl start pokrasservis
```

На сервере используется pnpm. В репозитории также есть `yarn.lock`, но текущая установка выполнена pnpm. Не переключай пакетный менеджер и не перегенерируй lock-файлы во время деплоя.

### 4. Проверить результат

```bash
systemctl show pokrasservis --no-pager -p ActiveState -p SubState
curl -fsS -o /dev/null -w 'Галерея: HTTP %{http_code}\n' https://pspolymer96.ru/gallery
curl -fsS -o /dev/null -w 'Фото дымохода: HTTP %{http_code}\n' https://pspolymer96.ru/jobs/3_img.webp
```

Ожидается `ActiveState=active`, `SubState=running` и `HTTP 200` для обоих запросов. Последний URL проверяет конкретное фото; если его удалят или переименуют, используй путь актуального изображения.

В браузере проверь галерею, новые фотографии, открытие и переключение изображений на компьютере и телефоне. После изменений формы заявки проверь отправку и получение письма.

Изменение только `README.md` не требует сборки или перезапуска сайта. Чтобы перенести документацию на сервер, достаточно `git pull --ff-only`; сразу после каждого изменения документации делать это необязательно.

## Если деплой завершился ошибкой

При ошибке установки зависимостей или сборки служба останется остановленной. Сначала исправь причину из вывода команды, затем повтори соответствующую команду установки/сборки и запуска из шага 3. Не запускай Next.js с незавершённой сборкой.

Если сборка успешна, но служба не запускается или сайт возвращает ошибку:

```bash
systemctl status pokrasservis --no-pager -l
journalctl -u pokrasservis -n 80 --no-pager
curl -fsS -o /dev/null -w 'Next.js: HTTP %{http_code}\n' http://127.0.0.1:3000/gallery
```

Если локальный Next.js отвечает `200`, а публичный адрес не работает, проверь Nginx:

```bash
nginx -t
systemctl status nginx --no-pager -l
```

При изменении файла службы сначала выполни `systemctl daemon-reload`, затем `systemctl restart pokrasservis`. При изменении конфигурации Nginx используй `nginx -t && systemctl reload nginx`. Эти команды не нужны при обычном обновлении сайта.

## Фотографии и переменные окружения

- Фотографии лежат в `public/jobs/`, их порядок задан в `src/data/jobs/jobs.ts`.
- В массиве используются URL вида `/jobs/3_img.webp`, без префикса `public`.
- Фото дымохода — `public/jobs/3_img.webp`.
- Главная страница показывает первые шесть элементов массива, `/gallery` — весь массив.
- Для отправки заявок нужны `EMAIL_HOST`, `EMAIL_USER`, `EMAIL_PASS`, `RECIPIENT`; описание есть в `.env.example`.
- Настроенные значения хранятся в `.env.local` на сервере. Не перезаписывай его при деплое и не добавляй секреты в Git или документацию.

## Мессенджеры

Ссылки в шапке настроены в `src/components/ui/header/Header.tsx`. Порядок на телефоне и компьютере: MAX, Telegram, WhatsApp. Ссылка MAX задана в `maxProfileUrl`; сейчас она ведёт в веб-версию. При изменении ссылки проверь открытие нужного профиля с другого аккаунта и на телефоне.

Иконка `public/max-icon.png` взята из [официального брендбука MAX](https://go.max.ru/brandbook).

## Последний проверенный деплой

14.10.2026 на сервер установлен коммит `c3a9e30` (`Add new job images and update jobs list`). Зависимости не менялись. Сборка, проверка типов и генерация страниц прошли успешно. Служба работает; `/gallery` и `/jobs/3_img.webp` ответили `HTTP 200`.

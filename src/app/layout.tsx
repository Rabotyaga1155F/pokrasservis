import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui/header/Header";
import Footer from "@/components/ui/footer/Footer";
import { Montserrat } from "next/font/google";

export const metadata: Metadata = {
  title: "Pokrasservis-Polymer",
  description:
    "Профессиональное порошковое окрашивание металлических конструкций, авто- и мотодеталей, а также качественная пескоструйная обработка. Надежная защита от коррозии, долговечное покрытие и безупречный внешний вид. Работаем с любыми металлоизделиями – от мелких деталей до крупных конструкций",
};

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <header>
          <Header />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}

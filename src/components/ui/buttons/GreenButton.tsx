import cn from "clsx";

interface IGreenButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function GreenButton({ className, children }: IGreenButton) {
  return (
    <button
      className={cn(
        "font-semibold bg-green-800 py-1 px-4 rounded-2xl text-white hover:bg-[#F4F4F4] hover:text-black transition-all hover:cursor-pointer",
        className,
      )}
    >
      {children}
    </button>
  );
}

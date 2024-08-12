import { ButtonHTMLAttributes } from "react";

interface ButtonColorOutProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function ButtonColorOut({ children, ...props }: ButtonColorOutProps) {
  return (
    <button
      {...props}
      className={`group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium active:text-black
     text-white`}
    >
      <span className={`absolute h-0 w-0 rounded-full bg-blue-500 group-active:bg-white transition-all duration-300 group-hover:h-56 group-hover:w-32`}></span>
      <div className="relative">{children}</div>
    </button>
  );
}

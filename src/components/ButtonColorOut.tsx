import { ButtonHTMLAttributes } from "react";

interface ButtonColorOutProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function ButtonColorOut({ children, ...props }: ButtonColorOutProps) {
  return (
    <button
      {...props}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-md bg-neutral-950 p-6 font-medium text-white active:text-black`}
    >
      <span className={`absolute inset-0 grid place-items-center`}>
        <span
          className={`bg-blue-500 group-active:bg-white transition-all duration-700 ease-in-out 
      h-0 w-0 rounded-full group-hover:h-[200%] group-hover:w-[200%]`}
        ></span>
      </span>
      <div className="relative">{children}</div>
    </button>
  );
}

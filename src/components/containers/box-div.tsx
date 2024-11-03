import { DetailedHTMLProps, HTMLAttributes } from "react";

type BoxDivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const BoxDiv = ({ children, className, ...rest }: BoxDivProps) => {
  return (
    <div className={`w-full backdrop-blur-md px-4 py-16 ${className}`} {...rest}>
      {children}
    </div>
  );
};

import { ReactNode } from "react";

export const CardDiv = ({ children }: { children: ReactNode }) => {
  return <div className="w-full max-w-[1400px] bg-white/90 backdrop-blur-md p-4 rounded-md">{children}</div>;
};

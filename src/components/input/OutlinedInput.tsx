"use client";

import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  name: string;
  label?: string;
  error?: string;
}

export const OutlinedInput = ({ name, label, error, ...rest }: Props) => {
  return (
    <div className="w-full">
      <div className="relative">
        <input
          {...rest}
          name={name}
          aria-label={label ?? name}
          id={name}
          className="block pb-1.5 pt-3 px-2.5 bg-white w-full text-sm text-black bg-transparent -0 border-2 border-gray-300 outline-none focus:ring-0 focus:border-[var(--theme-color-main)] peer rounded-md"
          placeholder=""
        />
        <label
          htmlFor={name}
          aria-label={label ?? name}
          className="absolute pointer-events-none text-sm text-gray-800 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white px-2 ml-1 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1"
        >
          {label ?? name}
        </label>
      </div>
      {error && (
        <p aria-label={label ?? name} className="pl-3 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
};

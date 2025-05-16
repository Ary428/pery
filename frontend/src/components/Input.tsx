import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
}

export function Input({ label, placeholder, ...props }: InputProps) {
  return (
    <div className="space-y-2">
      {label && <label className="text-sm font-medium text-gray-700 block">{label}</label>}
      <input
        className="border border-gray-300 rounded px-3 py-2 w-full md:w-70"
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}

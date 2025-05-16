import { type ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

interface PeryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export function PeryButton({ children, className, ...props }: PeryButtonProps) {
    return (
        <>
            <button
                {...props}
                className={clsx("bg-[#7D6DF6] text-white py-2 px-8 rounded-lg shadow-md hover:bg-indigo-600 transition-colors duration-300 flex items-center justify-center text-xl font-normal w-full md:w-auto", className)}>
            {children}
                
            </button>
        </>
    );
}

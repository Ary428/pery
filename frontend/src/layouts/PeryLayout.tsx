import { type ReactNode } from 'react';
import helpAvatar from '../assets/help-avatar.png';

interface PeryLayoutProps {
    children: ReactNode;
    leftTitle: ReactNode;
}

export function PeryLayout({ children, leftTitle }: PeryLayoutProps) {
    return (
        <div className="flex min-h-screen">
            <div className="w-2/5 bg-gradient-to-b from-indigo-500 to-blue-400 flex items-center justify-center">
                <h1 className="font-['Impact'] text-white text-7xl max-w-xs text-left leading-tight">
                    {leftTitle}
                </h1>
            </div>

            <div className="w-3/5 bg-white flex items-center justify-start relative p-8 pl-16">
                <div className="w-full max-w-lg">
                    {children}
                </div>

                <a
                    href="https://www.mypery.com/#faqs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-6 right-6 flex items-center gap-2 px-3 py-1.5 rounded-full border shadow-sm text-sm bg-white hover:bg-gray-50 transition-colors"
                    style={{ borderColor: '#b0b1bc' }}
                >
                    <img
                        src={helpAvatar}
                        alt="Help"
                        className="w-6 h-6 rounded-full"
                    />
                    <span>FAQs & help</span>
                </a>
            </div>
        </div>
    );
}
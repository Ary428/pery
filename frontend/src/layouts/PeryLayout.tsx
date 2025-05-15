import { type ReactNode } from 'react';
import helpAvatar from '../assets/help-avatar.png';

interface PeryLayoutProps {
    children: ReactNode;
    leftTitle: ReactNode;
}

export function PeryLayout({ children, leftTitle }: PeryLayoutProps) {
    return (
        <div className="flex min-h-screen">
            <div className="w-1/2 bg-gradient-to-b from-[#7D4FFF] to-[#4D98EC] flex items-center justify-center">
                <h1 className="font-[Impact] text-white text-4xl max-w-sm text-left leading-tight">
                    {leftTitle}
                </h1>
            </div>

            <div className="w-1/2 bg-white flex items-center justify-center relative p-6">
                <div className="w-full max-w-md">{children}</div>

                <a
                    href="https://www.mypery.com/#faqs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full border shadow text-sm bg-white hover:bg-gray-50"
                    style={{ borderColor: '#b0b1bc' }}

                >
                    <img
                        src={helpAvatar}
                        alt="User"
                        className="w-6 h-6 rounded-full"
                    />
                    FAQs & help
                </a>
            </div>
        </div>
    );
}

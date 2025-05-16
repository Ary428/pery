import { type ReactNode } from "react";
import helpAvatar from "../assets/help-avatar.png";

interface LayoutProps {
  children: ReactNode;
  leftTitle: ReactNode;
}

export function Layout({ children, leftTitle }: LayoutProps) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* צד שמאל / למעלה */}
      <div className="w-full md:w-2/5 bg-gradient-to-b from-indigo-500 to-blue-400 flex items-center justify-center p-8 md:p-16">
        <h1 className="font-['Impact'] text-white text-4xl sm:text-5xl md:text-7xl max-w-xs text-left leading-tight">
          {leftTitle}
        </h1>
      </div>

      {/* צד ימין / מתחת */}
      <div className="w-full md:w-3/5 bg-white flex items-center justify-start relative p-6 md:p-12">
        <div className="w-full max-w-lg">{children}</div>

        <div className="fixed md:absolute bottom-4 right-4 md:bottom-6 md:right-6 z-10">
          <a
            href="https://www.mypery.com/#faqs"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border shadow-sm text-sm bg-white hover:bg-gray-50 transition-colors"
            style={{ borderColor: "#b0b1bc" }}
          >
            <img src={helpAvatar} alt="Help" className="w-6 h-6 rounded-full" />
            <span>FAQs & help</span>
          </a>
        </div>
      </div>
    </div>
  );
}

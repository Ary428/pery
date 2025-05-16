import { type ReactNode } from "react";
import helpAvatar from "../assets/help-avatar.png";

interface LayoutProps {
  children: ReactNode;
  pageTitle: ReactNode;
  displayHelp?: boolean;
}

export function Layout({ children, pageTitle, displayHelp = true }: LayoutProps) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div
        className="w-full md:w-2/5 bg-gradient-to-b from-indigo-500 to-blue-400 
                    flex items-center justify-center p-8 md:p-16
                    md:fixed md:h-screen md:left-0 md:top-0"
      >
        <h1 className="font-['Impact'] text-white text-4xl sm:text-5xl md:text-7xl max-w-xs text-left leading-tight">
          {pageTitle}
        </h1>
      </div>
      <div className="hidden md:block md:w-2/5"></div>

      <div className="w-full md:w-3/5 bg-white flex items-center justify-start relative p-6 md:p-12">
        <div className="w-full">{children}</div>

        {displayHelp && (
          <div className="fixed md:absolute bottom-4 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:bottom-8 md:right-8 z-10">
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
        )}
      </div>
    </div>
  );
}

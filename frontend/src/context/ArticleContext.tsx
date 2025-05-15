import { createContext, useContext, useState, type ReactNode } from "react";

interface ArticleData {
  scrapeDate: number;
  articleName: string;
  language: string;
  introduction: string;
}

interface ArticleContextType {
  article: ArticleData | null;
  setArticle: (article: ArticleData) => void;
}

const ArticleContext = createContext<ArticleContextType | undefined>(undefined);

export const ArticleProvider = ({ children }: { children: ReactNode }) => {
  const [article, setArticle] = useState<ArticleData | null>(null);

  return (
    <ArticleContext.Provider value={{ article, setArticle }}>
      {children}
    </ArticleContext.Provider>
  );
};

export const useArticle = () => {
  const context = useContext(ArticleContext);
  if (!context) throw new Error("useArticle must be used within an ArticleProvider");
  return context;
};

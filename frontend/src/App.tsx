import { Route, Routes } from "react-router-dom";
import { EmailPage } from "./pages/EmailPage";
import { LanguagePage } from "./pages/LanguagePage";
import { TopicPage } from "./pages/TopicPage";
import { ArticlePage } from "./pages/ArticlePage";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<EmailPage />} />
      <Route path="/language" element={<LanguagePage />} />
      <Route path="/topic" element={<TopicPage />} />
      <Route path="/article" element={<ArticlePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;

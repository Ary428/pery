import { Route, Routes } from "react-router-dom";
import { EmailPage } from "./pages/EmailPage";
import { LanguagePage } from "./pages/LanguagePage";
import { TopicPage } from "./pages/TopicPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<EmailPage />} />
      <Route path="/language" element={<LanguagePage />} />
      <Route path="/topic" element={<TopicPage />} />
    </Routes>
  );
}

export default App;

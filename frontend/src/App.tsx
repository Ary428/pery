import { Route, Routes } from "react-router-dom";
import { EmailPage } from "./pages/EmailPage";
import { LanguagePage } from "./pages/LanguagePage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<EmailPage />} />
      <Route path="/language" element={<LanguagePage />} />
    </Routes>
  );
}

export default App;

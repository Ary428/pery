import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { PeryLayout } from "../layouts/PeryLayout";
import { PeryButton } from "../components/PeryButton";

export function LanguagePage() {
  const navigate = useNavigate();
  const { state } = useLocation() as { state: { email: string } };
  const email = state?.email;

  const [language, setLanguage] = useState("en");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3000/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userName: email, language }),
      });

      const data = await res.json();
      localStorage.setItem("pery_token", data.token);
      navigate("/topic"); // או לעמוד הבא
    } catch (err) {
      alert("Failed to register");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PeryLayout
      leftTitle={
        <>
          <div className="text-5xl font-bold">Welcome</div>
          <div className="text-5xl font-bold">to Pery!</div>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Nice to meet you!</h2>
          <p className="text-gray-600 text-sm">Which language do you prefer to read?</p>
        </div>

        <div className="space-y-2">
          {["en", "fr", "es"].map((lang) => (
            <label key={lang} className="flex items-center gap-2">
              <input
                type="radio"
                name="language"
                value={lang}
                checked={language === lang}
                onChange={(e) => setLanguage(e.target.value)}
              />
              <span className="capitalize">{lang === "en" ? "English" : lang === "fr" ? "Français" : "Español"}</span>
            </label>
          ))}
        </div>

        <PeryButton type="submit" disabled={loading}>
          {loading ? "Loading..." : <>Continue <span className="ml-1">›</span></>}
        </PeryButton>
      </form>
    </PeryLayout>
  );
}

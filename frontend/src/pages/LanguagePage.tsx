import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Layout } from "../layouts/Layout";
import { Button } from "../components/Button";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import PageTitle from "../components/PageTitle";
import { auth } from "../utils/auth";

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
      const res = await fetch("https://pery-backend.onrender.com/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userName: email, language }),
      });

      const data = await res.json();
      auth.setToken(data.token);
      navigate("/topic");
    } catch (err) {
      alert("Failed to register");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout
      pageTitle={
        <>
          <PageTitle firstLine="Welcome" secondLine="to Pery!" />
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="mb-8">
          <Header header="Nice to meet you!" />
          <SubHeader subHeader="Which language do you prefer to read?" />
        </div>

        <div className="space-y-4">
          {[
            { value: "en", label: "English" },
            { value: "es", label: "Spanish" },
            { value: "nl", label: "Dutch" },
          ].map((lang) => (
            <label key={lang.value} className="flex items-center gap-3">
              <div className="relative flex items-center justify-center">
                {language === lang.value ? (
                  <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                ) : (
                  <div className="w-6 h-6 rounded-full border-2 border-gray-300"></div>
                )}
                <input
                  type="radio"
                  name="language"
                  value={lang.value}
                  checked={language === lang.value}
                  onChange={() => setLanguage(lang.value)}
                  className="sr-only" // Hide the actual radio button
                />
              </div>
              <span className="text-xl text-gray-700">{lang.label}</span>
            </label>
          ))}
        </div>

        <Button type="submit" disabled={loading}>
          {loading ? (
            "Loading..."
          ) : (
            <>
              Continue <span className="ml-1">›</span>
            </>
          )}
        </Button>
      </form>
    </Layout>
  );
}

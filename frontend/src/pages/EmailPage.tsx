import { useState } from "react";
import { PeryLayout } from "../layouts/PeryLayout";
import { PeryButton } from "../components/PeryButton";
import termsLockImg from "../assets/terms-lock.png";

export function EmailPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleContinue = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3000/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userName: email, language: "en" }),
      });

      const data = await res.json();
      console.log("Token:", data.token);

      // TODO: move to next step
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
      <form onSubmit={handleContinue} className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Love learning new stuff?</h2>
          <p className="text-gray-600 text-sm">get an article on any subject you like!</p>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 block">Type your email address</label>
          <input
            type="email"
            placeholder="me@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
        </div>

        <PeryButton type="submit" disabled={loading}>
          {loading ? (
            "Loading..."
          ) : (
            <>
              Continue <span className="ml-1">›</span>
            </>
          )}
        </PeryButton>
        <div className="bg-[#e3f0eb] p-4 rounded-lg flex items-center">
          <span className="text-[#484848] flex items-center">
            <img className="w-8 h-8 mr-2" src={termsLockImg} alt="Pery's terms" />
            By clicking "continue" I agree to Pery's terms
          </span>
        </div>
      </form>
    </PeryLayout>
  );
}

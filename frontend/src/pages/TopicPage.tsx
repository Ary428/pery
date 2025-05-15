import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import { PeryLayout } from "../layouts/PeryLayout";
import { PeryButton } from "../components/PeryButton";

export function TopicPage() {
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleContinue = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token = localStorage.getItem("pery_token");
    if (!token) {
      alert("No token found");
      return navigate("/");
    }

    setLoading(true);
    try {
      const res = await fetch(`http://localhost:3000/introduction/${topic}`, {
        headers: {
          "x-authentication": token,
        },
      });

      if (!res.ok) {
        if (res.status === 400) {
          const errData = await res.json();
          alert(errData.message || "Invalid topic. Please enter a valid subject.");
        } else {
          alert("Server error. Please try again later.");
        }
        return;
      }

      const data = await res.json();
      navigate("/article", { state: data });
    } catch (err) {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PeryLayout leftTitle={<PageTitle firstLine="Welcome" secondLine="to Pery!" />}>
      <form onSubmit={handleContinue} className="space-y-6">
        <div>
          <Header header="What would you like to read about?" />
          <SubHeader subHeader="Dogs? Molecular culinary? everything goes..." />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 block">Article subject</label>
          <input
            type="text"
            placeholder="subject"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            required
            className="border border-gray-300 rounded px-3 py-2 w-70 max-w-sm"
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
      </form>
    </PeryLayout>
  );
}

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import { Layout } from "../layouts/Layout";
import { Button } from "../components/Button";
import { useArticle } from "../context/ArticleContext";
import { auth } from "../utils/auth";
import { Input } from "../components/Input";
import Loader from "../components/Loader";
import { API_BASE } from "../utils/apiBase";

export function TopicPage() {
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setArticle } = useArticle();

  const handleContinue = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = auth.getToken();
    if (!token) {
      alert("No token found");
      return navigate("/");
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/introduction/${topic}`, {
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
      setArticle(data);
      navigate("/article");
    } catch {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout pageTitle={<PageTitle firstLine="Welcome" secondLine="to Pery!" />}>
      <Loader show={loading} />

      <form onSubmit={handleContinue} className="space-y-6">
        <div>
          <Header header="What would you like to read about?" />
          <SubHeader subHeader="Dogs? Molecular culinary? everything goes..." />
        </div>

        <div className="w-full md:w-80 space-y-4">
          <div className="space-y-2">
            <Input
              label="Article subject"
              placeholder="subject"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              required
            />
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
        </div>
      </form>
    </Layout>
  );
}

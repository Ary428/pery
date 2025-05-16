import { useNavigate } from "react-router-dom";
import { Layout } from "../layouts/Layout";
import PageTitle from "../components/PageTitle";
import { Button } from "../components/Button";
import articleImg from "../assets/article.png";
import { useArticle } from "../context/ArticleContext";
import { auth } from "../utils/auth";
import { useEffect } from "react";
export function ArticlePage() {
  const navigate = useNavigate();
  const { article } = useArticle();
  useEffect(() => {
    if (!article) {
      auth.clear();
      navigate("/");
    }
  }, [article, navigate]);

  if (!article) return null;

  const { introduction } = article;

  return (
    <Layout pageTitle={<PageTitle firstLine="All set! read" secondLine="your article" />}>
      <div className="space-y-6 pb-15">
        <img src={articleImg} alt="Celebration" className="w-full md:w-50 mb-2" />

        <h2 className="text-lg font-semibold text-gray-800">All set. Here’s your article:</h2>

        <p className="whitespace-pre-line text-gray-500">{introduction}</p>

        <Button onClick={() => navigate("/")}>Start over</Button>
      </div>
    </Layout>
  );
}

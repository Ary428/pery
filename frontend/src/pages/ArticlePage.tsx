import { useLocation, useNavigate } from "react-router-dom";
import { PeryLayout } from "../layouts/PeryLayout";
import PageTitle from "../components/PageTitle";
import { PeryButton } from "../components/PeryButton";
import articleImg from "../assets/article.png";
export function ArticlePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;

  if (!data) {
    navigate("/");
    return null;
  }

  const { introduction } = data;

  return (
    <PeryLayout leftTitle={<PageTitle firstLine="All set! read" secondLine="your article" />}>
      <div className="space-y-6">
        <img src={articleImg} alt="Celebration" className="w-50 mb-2" />

        <h2 className="text-lg font-semibold text-gray-800">All set. Here’s your article:</h2>

        <p className="whitespace-pre-line text-gray-500">{introduction}</p>

        <PeryButton onClick={() => navigate("/")}>Start over</PeryButton>
      </div>
    </PeryLayout>
  );
}

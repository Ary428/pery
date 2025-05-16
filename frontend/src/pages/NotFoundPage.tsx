import { useNavigate } from "react-router-dom";
import { Layout } from "../layouts/Layout";
import { Button } from "../components/Button";
import PageTitle from "../components/PageTitle";
import notFoundImg from "../assets/not-found.png";

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Layout pageTitle={<PageTitle firstLine="Oops!" secondLine="Page not found" />}>
      <div className="md:space-y-6">
        <div className="md:space-y-4">
          <Button onClick={() => navigate("/")} className="w-full">
            Go to homepage
          </Button>
        </div>
        <img src={notFoundImg} alt="Page not found" className="w-full md:w-60 mx-auto md:mb-4" />

        <div className="hidden md:block">
          <h2 className="text-lg font-semibold text-gray-800">Even Pery can't find this page...</h2>

          <p className="text-gray-500">
            We've looked everywhere, but the page you requested seems to be lost. Maybe it's hiding
            in some remote corner of the internet, or it simply doesn't exist.
          </p>
        </div>
      </div>
    </Layout>
  );
}

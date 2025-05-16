import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../layouts/Layout"
import { Button } from "../components/Button";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import { Input } from "../components/Input";
import { TermsAgreement } from "../components/TermsAgreement";

export function EmailPage() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/language", { state: { email } });
  };

  return (
    <Layout
      leftTitle={
          <PageTitle firstLine="Welcome" secondLine="to Pery!" />
      }
    >
      <form onSubmit={handleContinue} className="space-y-6">
        <div>
          <Header header="Love learning new stuff?" />
          <Header header="get an article on any subject you like!" />
        </div>

        <div className="w-full md:w-80 space-y-4">
          <div className="space-y-2">
            <Input
              label="Type your email address"
              placeholder="me@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
            />
          </div>
          <Button type="submit">
            Continue <span className="ml-1">›</span>
          </Button>
          <TermsAgreement />
        </div>
      </form>
    </Layout>
  );
}
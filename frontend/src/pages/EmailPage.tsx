import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PeryLayout } from "../layouts/PeryLayout";
import { Button } from "../components/Button";
import termsLockImg from "../assets/terms-lock.png";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import { Input } from "../components/Input";

export function EmailPage() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/language", { state: { email } });
  };

  return (
    <PeryLayout
      leftTitle={
        <>
          <PageTitle firstLine="Welcome" secondLine="to Pery!" />
        </>
      }
    >
      <form onSubmit={handleContinue} className="space-y-6">
        <div>
          <Header header="Love learning new stuff?" />
          <Header header="get an article on any subject you like!" />
        </div>

        <div className="space-y-2">
          <Input label="Type your email address" placeholder="me@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required type="email" />
        </div>

        <Button type="submit">Continue <span className="ml-1">›</span></Button>

        <div className="bg-[#e3f0eb] p-4 rounded-lg flex items-center w-full md:w-70">
          <span className="text-[#484848] flex items-center">
            <img className="w-8 h-8 mr-2" src={termsLockImg} alt="Pery's terms" />
            By clicking "continue" I agree to Pery's terms
          </span>
        </div>
      </form>
    </PeryLayout>
  );
}
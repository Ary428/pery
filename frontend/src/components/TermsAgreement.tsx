import termsLockImg from "../assets/terms-lock.png";

export function TermsAgreement() {
  return (
    <div className="bg-[#e3f0eb] py-4 px-2 rounded-lg flex items-center">
      <span className="text-[#484848] text-xs flex items-center">
        <img className="w-6 mr-1" src={termsLockImg} alt="Pery's terms" />
        By clicking "continue" I agree to Pery's terms
      </span>
    </div>
  );
}

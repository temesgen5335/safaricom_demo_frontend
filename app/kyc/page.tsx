import Sidebar from "../components/sidebar";
import KYC from "../components/kyc_component/kyc";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <div className="w-1/5">
        <Sidebar />
      </div>
      <div className="w-4/5">
        <KYC />
      </div>
    </div>
  );
}
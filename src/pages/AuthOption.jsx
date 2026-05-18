import { useNavigate } from "react-router-dom";

export default function AuthOption() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-black text-white">
      {/* LEFT CARD */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="bg-[#0b0b0b] p-6 rounded-2xl w-[400px] shadow-lg">
          <img src="/auth.png" alt="auth" className="rounded-xl mb-6" />

          <h1 className="text-2xl font-semibold leading-snug">
            Empowering trust <br />
            through{" "}
            <span className="text-blue-500">intelligent authentication.</span>
          </h1>

          <p className="text-gray-400 text-sm mt-3">
            AuthStack provides secure, seamless, and scalable authentication for
            modern applications.
          </p>

          <button
            onClick={() => navigate("/login")}
            className="bg-blue-600 w-full mt-6 p-3 rounded-lg hover:bg-blue-700 transition"
          >
            Continue with Email
          </button>

          <p className="text-center text-gray-500 text-xs mt-6">
            Secure. Simple. Scalable
          </p>
        </div>
      </div>
    </div>
  );
}

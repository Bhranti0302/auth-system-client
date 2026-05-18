import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-black text-white items-center justify-center">
      <div className="flex bg-[#0b0b0b] rounded-2xl overflow-hidden shadow-lg">
        {/* LEFT IMAGE */}
        <div className="w-[300px]">
          <img src="/auth.png" className="h-full object-cover" />
        </div>

        {/* RIGHT FORM */}
        <div className="p-10 w-[350px]">
          <h2 className="mb-6 text-lg font-medium">Register</h2>

          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 mb-4 rounded-lg bg-[#111] border border-gray-700 outline-none focus:border-blue-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 mb-4 rounded-lg bg-[#111] border border-gray-700 outline-none focus:border-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 rounded-lg bg-[#111] border border-gray-700 outline-none focus:border-blue-500"
          />

          <button className="bg-blue-600 w-full p-3 rounded-lg hover:bg-blue-700">
            Sign up
          </button>

          <p className="text-center text-sm text-gray-400 mt-4">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-blue-500 cursor-pointer"
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

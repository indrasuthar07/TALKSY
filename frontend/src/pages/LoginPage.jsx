import { useState } from "react";
import { MessagesSquareIcon } from "lucide-react";
import { Link } from "react-router";
import useLogin from "../hooks/useLogin";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const { isPending, error, loginMutation } = useLogin();

  const handleLogin = (e) => {
    e.preventDefault();
    loginMutation(loginData);
  };

  return (
    <div
      className="h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 bg-gradient-to-br from-[#0f172a] via-[#0b1120] to-[#0f172a] text-white"
      data-theme="dark"
    >
      <div className="border border-teal-500/20 flex flex-col lg:flex-row w-full max-w-5xl mx-auto bg-[#111827] rounded-2xl shadow-2xl overflow-hidden">
        
        {/* LOGIN FORM SECTION */}
        <div className="w-full lg:w-1/2 p-6 sm:p-10 flex flex-col justify-center">
          {/* LOGO */}
          <div className="mb-6 flex items-center gap-3">
            <MessagesSquareIcon className="size-10 text-teal-400 drop-shadow-lg" />
            <span className="text-3xl font-extrabold font-mono bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-300">
              Talksy
            </span>
          </div>

          {/* ERROR MESSAGE */}
          {error && (
            <div className="alert alert-error shadow mb-4">
              <span>{error.response?.data?.message || "Something went wrong"}</span>
            </div>
          )}

          <div>
            <h2 className="text-2xl font-bold">Welcome Back</h2>
            <p className="text-sm text-gray-400 mt-1">
              Sign in to your account to continue your language journey.
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleLogin} className="mt-6 space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                placeholder="hello@example.com"
                className="mt-1 input input-bordered w-full rounded-xl bg-[#1e293b] border-gray-700 text-white focus:border-teal-400 focus:ring focus:ring-teal-500/20"
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-300">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="mt-1 input input-bordered w-full rounded-xl bg-[#1e293b] border-gray-700 text-white focus:border-teal-400 focus:ring focus:ring-teal-500/20"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn bg-teal-500 hover:bg-teal-400 text-black font-semibold w-full rounded-xl shadow-lg shadow-teal-500/20 border-none transition-all hover:scale-[1.01]"
              disabled={isPending}
            >
              {isPending ? (
                <>
                  <span className="loading loading-spinner loading-xs"></span>
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </button>

            {/* Sign up link */}
            <p className="text-center text-sm text-gray-400">
              Don't have an account?{" "}
              <Link to="/signup" className="text-teal-400 hover:underline">
                Create one
              </Link>
            </p>
          </form>
        </div>

        {/* IMAGE SECTION */}
        <div className="hidden lg:flex w-full lg:w-1/2 bg-[#0f172a] items-center justify-center p-10">
          <div className="max-w-sm w-full">
            <img
              src="/k.png"
              alt="Language connection illustration"
              className="w-full h-auto rounded-2xl shadow-lg hover:scale-[1.02] transition-transform"
            />
            <h3 className="text-lg font-semibold text-white text-center mt-5">
              Connect with language partners worldwide
            </h3>
            <p className="text-gray-400 text-center mt-2 text-sm">
              Practice conversations, make friends, and improve your language skills together.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;

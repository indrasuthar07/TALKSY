import { useState } from "react";
import { MessagesSquareIcon } from "lucide-react";
import { Link } from "react-router";
import useSignUp from "../hooks/useSignUp";

const SignUpPage = () => {
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { isPending, error, signupMutation } = useSignUp();

  const handleSignup = (e) => {
    e.preventDefault();
    signupMutation(signupData);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#0b1120] to-[#0f172a] text-white p-4 sm:p-6 md:p-8"
      data-theme="dark"
    >
      <div className="flex flex-col lg:flex-row w-full max-w-5xl rounded-2xl shadow-2xl bg-[#111827] overflow-hidden border border-teal-500/20">
        
        {/* LEFT FORM */}
        <div className="w-full lg:w-1/2 p-6 sm:p-10 flex flex-col justify-center">
          {/* Logo */}
          <div className="mb-6 flex items-center gap-3">
            <MessagesSquareIcon className="size-10 text-teal-400 drop-shadow-lg" />
            <span className="text-3xl font-extrabold font-mono bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-300">
              Talksy
            </span>
          </div>

          {/* Error */}
          {error && (
            <div className="alert alert-error shadow mb-4">
              <span>{error.response?.data?.message || "Something went wrong"}</span>
            </div>
          )}

          {/* Heading */}
          <h2 className="text-2xl font-bold text-white">Create an Account</h2>
          <p className="text-sm text-gray-400 mt-1">
            Join Talksy and start your language learning adventure!
          </p>

          {/* Form */}
          <form onSubmit={handleSignup} className="mt-6 space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-300">Full Name</label>
              <input
                type="text"
                placeholder="Tony Stark"
                className="mt-1 input input-bordered w-full rounded-xl bg-[#1e293b] border-gray-700 text-white focus:border-teal-400 focus:ring focus:ring-teal-500/20"
                value={signupData.fullName}
                onChange={(e) => setSignupData({ ...signupData, fullName: e.target.value })}
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                placeholder="stark@gmail.com"
                className="mt-1 input input-bordered w-full rounded-xl bg-[#1e293b] border-gray-700 text-white focus:border-teal-400 focus:ring focus:ring-teal-500/20"
                value={signupData.email}
                onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-300">Password</label>
              <input
                type="password"
                placeholder="********"
                className="mt-1 input input-bordered w-full rounded-xl bg-[#1e293b] border-gray-700 text-white focus:border-teal-400 focus:ring focus:ring-teal-500/20"
                value={signupData.password}
                onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                required
              />
              <p className="text-xs text-gray-500 mt-1">Must be at least 6 characters</p>
            </div>

            {/* Terms */}
            <label className="flex items-start gap-2 text-xs text-gray-400">
              <input type="checkbox" className="checkbox checkbox-sm checkbox-accent mt-0.5" required />
              <span>
                I agree to the{" "}
                <span className="text-teal-400 hover:underline">Terms of Service</span> and{" "}
                <span className="text-teal-400 hover:underline">Privacy Policy</span>.
              </span>
            </label>

            {/* Submit */}
            <button
              className="btn bg-teal-500 hover:bg-teal-400 text-black font-semibold w-full rounded-xl shadow-lg shadow-teal-500/20 border-none transition-all hover:scale-[1.01]"
              type="submit"
              disabled={isPending}
            >
              {isPending ? (
                <>
                  <span className="loading loading-spinner loading-xs"></span>
                  Creating...
                </>
              ) : (
                "Create Account"
              )}
            </button>

            {/* Sign in link */}
            <p className="text-center text-sm text-gray-400">
              Already have an account?{" "}
              <Link to="/login" className="text-teal-400 hover:underline">
                Sign in
              </Link>
            </p>
          </form>
        </div>

        {/* RIGHT IMAGE */}
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

export default SignUpPage;

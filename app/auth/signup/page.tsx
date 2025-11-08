"use client";

import { useState, useEffect } from "react";
import {
  Mail,
  Lock,
  Phone,
  Eye,
  EyeOff,
  Send,
  Timer,
  RefreshCcw
} from "lucide-react";
import Link from "next/link";

export default function SignupPage() {
  const [activeTab, setActiveTab] = useState<"email" | "phone">("email");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    otp: "",
    agreement: false,
  });

  const [otpSent, setOtpSent] = useState(false);
  const [timer, setTimer] = useState(0);

  // mock resend timer
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Login submitted:", formData);
    // API call will go here
  };

  const handleSocialSignup = (provider: string) => {
    console.log(`Login with ${provider}`);
    // Social auth will go here
  };

  return (
    <>
      <div className="min-h-screen flex">

        {/* Left Side - Image : For desktop user*/}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-green-700 to-green-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-green-400 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 flex flex-col justify-center items-center w-full p-12 text-white">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold mb-6">🌾 Manas Krushi</h1>
              <p className="text-xl mb-4">
                Your Digital Agricultural Marketplace
              </p>
              <p className="text-green-100">
                Connect with farmers, access quality products, and support
                sustainable agriculture.
              </p>
              <div className="mt-12 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    ✓
                  </div>
                  <span>Direct from farmers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    ✓
                  </div>
                  <span>Fresh & organic products</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    ✓
                  </div>
                  <span>Support local communities</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-amber-50">
          <div className="w-full max-w-md">

            {/* Mobile Logo : For smartphone user*/}
            <div className="lg:hidden text-center mb-8">
              <h1 className="text-4xl font-bold text-green-800 mb-2">
                🌾Manas Krushi
              </h1>
              <p className="text-green-700">Agricultural Marketplace</p>
            </div>

            {/* Sign Up Form Wrapper */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-green-100">
              
              {/* Form Heading */}
              <h2 className="text-3xl font-bold text-green-900 mb-2">
                Create Account
              </h2>
              <p className="text-gray-600 mb-6">
                Join Manas Krushi to start your organic journey
              </p>

              {/* Toggle Tabs */}
              <div className="flex gap-2 mb-6 bg-green-50 p-1 rounded-lg">
                <button
                  onClick={() => setActiveTab("email")}
                  className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
                    activeTab === "email"
                      ? "bg-green-600 text-white shadow-md"
                      : "text-green-700 hover:bg-green-100"
                  }`}
                >
                  <Mail className="inline w-4 h-4 mr-2" />
                  Email
                </button>
                <button
                  onClick={() => setActiveTab("phone")}
                  className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
                    activeTab === "phone"
                      ? "bg-green-600 text-white shadow-md"
                      : "text-green-700 hover:bg-green-100"
                  }`}
                >
                  <Phone className="inline w-4 h-4 mr-2" />
                  Phone
                </button>
              </div>

              {/* Form */}
              <form className="space-y-4">

                {/* Email/Phone Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {activeTab === "email" ? "Email Address" : "Phone Number"}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      {activeTab === "email" ? (
                        <Mail className="h-5 w-5 text-gray-400" />
                      ) : (
                        <Phone className="h-5 w-5 text-gray-400" />
                      )}
                    </div>
                    <input
                      type={activeTab === "email" ? "email" : "tel"}
                      placeholder={
                        activeTab === "email"
                          ? "yogendra@gmail.com"
                          : "+91 98765 43210"
                      }
                      value={
                        activeTab === "email" ? formData.email : formData.phone
                      }
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [activeTab === "email" ? "email" : "phone"]:
                            e.target.value,
                        })
                      }
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                {/* OTP Field */}
                <div className="space-y-2">
                  <label className="text-sm text-gray-600 mb-1 block">
                    One-Time Password (OTP)
                  </label>
                  <div className="flex gap-0">
                    <input
                      type="text"
                      placeholder={
                        otpSent ? "Enter OTP" : "Click on Send OTP to receive code"
                      }
                      disabled={!otpSent}
                      value={formData.otp}
                      onChange={(e) =>
                        setFormData({ ...formData, otp: e.target.value })
                      }
                      className={`flex-1 w-1 px-3 py-3 border-2 border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent focus:outline-none ${
                        !otpSent
                          ? "bg-gray-100 cursor-not-allowed text-gray-400"
                          : "bg-white"
                      }`}
                    />
                    <div className="w-28 flex items-center justify-end">
                      {!otpSent ? (
                        <button
                          type="button"
                          onClick={() => {
                            setOtpSent(true);
                            setTimer(20); // 3 minutes = 180 seconds
                          }}
                          className="px-3 py-3 text-green-700 text-base rounded-lg font-medium flex items-center gap-1 hover:bg-green-50"
                        >
                          <Send size={16}/>Get OTP
                        </button>
                      ) : timer > 0 ? (
                        <button
                          type="button"
                          disabled
                          className="px-3 py-3 bg-green-50 text-green-700 text-base rounded-lg flex items-center gap-1"
                        >
                          <Timer className="h-4 w-4" /> <span className="min-w-[25px]">{timer}s</span>
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setTimer(20)}
                          className="px-3 py-3 text-green-700 text-base rounded-lg flex items-center gap-1 hover:bg-green-50"
                        >
                          <RefreshCcw className="h-4 w-4" /> Resend
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Original Password Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                      autoComplete="off"  
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all [&::-ms-reveal]:hidden [&::-ms-clear]:hidden"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* [&::-ms-reveal]:hidden [&::-ms-clear]:hidden  -- to diable the default button for password field of edge browser*/}

                {/* Confirm Password Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={formData.confirmPassword}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          confirmPassword: e.target.value,
                        })
                      }
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all [&::-ms-reveal]:hidden [&::-ms-clear]:hidden" 
                      required
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Agreement Checkbox */}
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    className="mt-1"
                    checked={formData.agreement}
                    onChange={(e) => {
                      const newValue = e.target.checked;
                      setFormData({ ...formData, agreement: newValue });
                      console.log(newValue); // ✅ Direct new value print karo , due to asynchronous nature current value print nahi ho rhi thi
                    }}
                  />
                  <p className="text-sm text-gray-600">
                    I agree to the{" "}
                    <Link href="/terms" className="text-green-600 underline">
                      Terms & Conditions
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-green-600 underline">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 focus:ring-4 focus:ring-green-300 transition-all shadow-md hover:shadow-lg"
                >
                  Sign In
                </button>

              </form>

              {/* Divider */}
              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>

              {/* Social Login */}
              <button
                onClick={() => handleSocialSignup("google")}
                className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-200 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 hover:border-gray-300 transition-all"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </button>

              {/* Existing User */}
              <p className="text-center text-sm text-gray-600 mt-5">
                Already have an account?{" "}
                <Link
                  href="signin"
                  className="text-green-700 hover:text-green-800 font-semibold"
                >
                  Sign-In
                </Link>
              </p>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

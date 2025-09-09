import React, { useContext, useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { AuthContext } from "../provider/AuthContext";

const Login = () => {
  const { loginUser, googleLogin } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const emailRef = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Login";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password).then(() => {
      navigate(`${location.state ? location.state : "/"}`);
    });
  };

  const handleGoogleLogin = () => {
    googleLogin().then((result) => {
      toast.success("Google Login successfull!");
      navigate(`${location.state ? location.state : "/"}`);
      console.log(result);
    });
  };

  return (
      <div className="flex items-center justify-center pt-8 pb-12 sm:pt-12 sm:pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24">
        <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-secondary mb-2">
            Login to your account
          </h2>
          <p className="text-sm sm:text-base md:text-[17px] text-center text-gray-600 mb-6">
            Don’t have an account?{" "}
            <NavLink
              to="/register"
              className="text-secondary hover:underline font-medium"
            >
              Register here
            </NavLink>
          </p>

          <div className="space-y-4 mb-6">
            <button
              onClick={handleGoogleLogin}
              type="button"
              className="flex items-center justify-center w-full gap-3 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition text-sm sm:text-base"
            >
              <FcGoogle size={23} />
              <span>Login with Google</span>
            </button>
          </div>

          <div className="flex items-center w-full my-4">
            <hr className="w-full border-gray-300" />
            <span className="px-3 text-gray-500 text-sm sm:text-base">OR</span>
            <hr className="w-full border-gray-300" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm sm:text-base font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                name="email"
                id="email"
                ref={emailRef}
                required
                placeholder="Your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm sm:text-base"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label
                  htmlFor="password"
                  className="block text-sm sm:text-base font-medium text-gray-700"
                >
                  Password
                </label>
                <button
                  type="button"
                  className="text-xs sm:text-sm text-secondary hover:underline"
                >
                  Forgot password?
                </button>
              </div>
              <div className="flex items-center relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  required
                  placeholder="******"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm sm:text-base"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="btn btn-xs absolute right-4"
                >
                  {showPassword ? <FaEye size={16} /> : <FaEyeSlash size={16} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 btn btn-secondary h-12 text-white font-semibold rounded-lg text-sm sm:text-base"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  };

export default Login;

import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate, Link } from "react-router";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from '../assets/imgi_469_cleaning-service-logo-icon-design-illustration_586739-5824-depositphotos-bgremover.png';

const Login = () => {
  const { googleSignIn, loginUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

const handleGoogleLogin = () => {
  googleSignIn()
    .then(() => {
      toast.success("Logged in successfully!", {
        position: "top-center",
        autoClose: 2000,
      });
      setTimeout(() => {
        navigate("/");
      }, 1500);
    })
    .catch((error) => {
      console.error(error);
      toast.error("Failed to login with Google", {
        position: "top-center",
        autoClose: 3000,
      });
    });
};

const handleEmailLogin = (e) => {
  e.preventDefault();
  loginUser(email, password)
    .then(() => {
      toast.success("Logged in successfully!", {
        position: "top-center",
        autoClose: 2000,
      });
      setTimeout(() => {
        navigate("/");
      }, 1500);
    })
    .catch((error) => {
      console.error(error);
      toast.error("Invalid email or password", {
        position: "top-center",
        autoClose: 3000,
      });
    });
};

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      
      <div className="max-w-md mx-auto my-16 bg-white shadow-lg rounded-xl p-8 border border-gray-200">

        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 flex items-center justify-center mb-4">
            <img src={logo} alt="Cleanliness Logo" className="w-full h-full object-contain" />
          </div>
          <h1 className="text-3xl font-bold text-[#00a63e]">Cleanliness</h1>
          <p className="text-gray-600 mt-3">Login to your account</p>
        </div>

        <h2 className="text-xl font-semibold mb-8 text-center text-gray-800">Welcome Back</h2>
        
        <form onSubmit={handleEmailLogin} className="space-y-6">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full focus:border-[#016630] focus:ring-1 focus:ring-[#016630] py-3"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="input input-bordered w-full focus:border-[#016630] focus:ring-1 focus:ring-[#016630] py-3 pr-12"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none z-10"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <FaEyeSlash className="w-5 h-5" />
              ) : (
                <FaEye className="w-5 h-5" />
              )}
            </button>
          </div>
          
          <button className="btn w-full bg-[#016630] hover:bg-[#015627] text-white border-none py-3 h-auto text-lg">
            Login
          </button>
        </form>

        <div className="divider my-8">OR</div>
        
        <button 
          onClick={handleGoogleLogin} 
          className="btn btn-outline w-full border-gray-300 hover:bg-gray-50 hover:border-gray-400 py-3 h-auto flex items-center justify-center"
        >
          <FcGoogle className="w-5 h-5 mr-3" />
          Continue with Google
        </button>

        <p className="mt-8 text-center text-gray-600">
          New user?{" "}
          <Link to="/register" className="text-[#016630] font-semibold hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
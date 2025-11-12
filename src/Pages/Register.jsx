import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate, Link } from "react-router";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from '../assets/imgi_469_cleaning-service-logo-icon-design-illustration_586739-5824-depositphotos-bgremover.png';

const Register = () => {
  const { createUser, googleSignIn } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErrors, setPasswordErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const errors = [];
    if (password.length < 6) {
      errors.push("Length must be at least 6 characters");
    }
    if (!/(?=.*[a-z])/.test(password)) {
      errors.push("Must have a Lowercase letter");
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      errors.push("Must have an Uppercase letter");
    }
    return errors;
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordErrors(validatePassword(newPassword));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const errors = validatePassword(password);
    
    if (errors.length > 0) {
      setPasswordErrors(errors);
      toast.error("Please fix password requirements!", {
        position: "top-center",
        autoClose: 3000,
        onClose: () => navigate("/")
      });
      return;
    }

    setIsLoading(true);

    try {
      await createUser(email, password, name, photoURL);
      toast.success("Account created successfully!", {
        position: "top-center",
        autoClose: 2000,
        onClose: () => navigate("/")
      });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error(error);
      let errorMessage = "Failed to create account. Please try again.";
      
      if (error.code === 'auth/email-already-in-use') {
        errorMessage = "This email is already registered. Please login instead.";
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = "Please enter a valid email address.";
      } else if (error.code === 'auth/weak-password') {
        errorMessage = "Password is too weak. Please use a stronger password.";
      }
      
      toast.error(errorMessage, {
        position: "top-center",
        autoClose: 4000,
        onClose: () => navigate("/")
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      await googleSignIn();
      toast.success("Signed in with Google successfully!", {
        position: "top-center",
        autoClose: 2000,
        onClose: () => navigate("/")
      });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error(error);
      toast.error("Failed to sign in with Google. Please try again.", {
        position: "top-center",
        autoClose: 3000,
        onClose: () => navigate("/")
      });
    } finally {
      setIsLoading(false);
    }
  };

  const isPasswordValid = passwordErrors.length === 0 && password.length > 0;

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
      
      <div className="max-w-md mx-auto my-16 dark:bg-[#17202f] bg-white shadow-lg rounded-xl p-8 border border-gray-200">

        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 flex items-center justify-center mb-4">
            <img src={logo} alt="Cleanliness Logo" className="w-full h-full object-contain" />
          </div>
          <h1 className="text-3xl font-bold text-[#00a63e]">Cleanliness</h1>
          <p className="text-gray-600 mt-3 dark:text-gray-400">Create your account</p>
        </div>

        <h2 className="text-xl font-semibold mb-8 text-center dark:text-gray-400 text-gray-800">Join Us Today</h2>
        
        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full focus:border-[#016630] focus:ring-1 focus:ring-[#016630] py-3"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email Address"
              className="input input-bordered w-full focus:border-[#016630] focus:ring-1 focus:ring-[#016630] py-3"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="url"
              placeholder="Photo URL"
              className="input input-bordered w-full focus:border-[#016630] focus:ring-1 focus:ring-[#016630] py-3"
              onChange={(e) => setPhotoURL(e.target.value)}
            />
          </div>
          
          <div className="relative">
                <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="input input-bordered w-full focus:border-[#016630] focus:ring-1 focus:ring-[#016630] py-3 pr-12"
            onChange={handlePasswordChange}
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
          
          <button 
            className={`btn w-full text-white border-none py-3 h-auto text-lg ${
              isPasswordValid
                ? 'bg-[#016630] hover:bg-[#015627]' 
                : 'bg-gray-400 cursor-not-allowed'
            }`}
            disabled={!isPasswordValid}
          >
            Create Account
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

        <p className="mt-8 text-center text-gray-600 dark:text-white">
          Already have an account?{" "}
          <Link to="/login" className="text-[#016630] font-semibold hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </>
  );
};

export default Register;
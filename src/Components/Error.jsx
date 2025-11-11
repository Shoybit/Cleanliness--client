import React from 'react';
import { useNavigate } from 'react-router';
import Lottie from 'lottie-react';
import clannes404Animation from '../assets/Error 404.json';

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center  text-green-900 text-center px-4">
       <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px]"></div>
      <div className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-88 lg:h-88 ">
        <Lottie animationData={clannes404Animation} loop={true} />
      </div>

      
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2">
        Oops! Page Not Found
      </h2>
      <p className="mb-6 text-green-800 max-w-xs sm:max-w-md">
        The page you’re looking for doesn’t exist or was moved. Let’s get back to growing!
      </p>

      <button
        onClick={() => navigate("/")}
        className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded transition duration-200"
      >
        Back to Home
      </button>
    </div>
  );
};

export default Error;
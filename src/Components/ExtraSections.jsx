import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { FaUsers, FaCheckCircle, FaClock, FaHandsHelping } from "react-icons/fa";
import { RiUserCommunityFill } from "react-icons/ri";

const ExtraSections = ({ stats }) => {
  const navigate = useNavigate();
  const { users = 125, resolved = 52, pending = 12 } = stats || {};

  const [countUsers, setCountUsers] = useState(0);
  const [countResolved, setCountResolved] = useState(0);
  const [countPending, setCountPending] = useState(0);

  useEffect(() => {
    let use = 0, res = 0, pen = 0;
    const interval = setInterval(() => {
      if (use < users) setCountUsers(use += 1);
      if (res < resolved) setCountResolved(res += 1);
      if (pen < pending) setCountPending(pen += 1);

      if (use >= users && res >= resolved && pen >= pending) clearInterval(interval);
    }, 40); 
  }, [users, resolved, pending]);

  return (
    <div className="max-w-10/12 mx-auto px-4 py-12 space-y-16">

      <div className="bg-white rounded-2xl shadow-lg p-8 text-center dark:bg-gray-800">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <div className="bg-green-100 p-4 rounded-full inline-flex items-center justify-center">
            <RiUserCommunityFill className="text-4xl text-green-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold ">Community Stats</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 " >
          <div className="bg-green-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300 ">
            <div className="flex justify-center mb-4">
              <div className="bg-green-100 p-3 rounded-full">
                <FaUsers className="text-3xl text-green-600" />
              </div>
            </div>
            <p className="text-4xl font-bold text-green-600">{countUsers}+</p>
            <p className="mt-2 text-gray-600">Registered Users</p>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <FaCheckCircle className="text-3xl text-blue-600" />
              </div>
            </div>
            <p className="text-4xl font-bold text-blue-600">{countResolved}+</p>
            <p className="mt-2 text-gray-600">Issues Resolved</p>
          </div>

          <div className="bg-yellow-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <div className="bg-yellow-100 p-3 rounded-full">
                <FaClock className="text-3xl text-yellow-600" />
              </div>
            </div>
            <p className="text-4xl font-bold text-yellow-600">{countPending}+</p>
            <p className="mt-2 text-gray-600">Pending Issues</p>
          </div>
        </div>
      </div>

      <div className="bg-green-600 text-white rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="flex flex-wrap justify-center items-center h-full">
            <FaHandsHelping className="text-6xl md:text-8xl mx-2 md:mx-4" />
            <FaCheckCircle className="text-6xl md:text-8xl mx-2 md:mx-4" />
            <FaUsers className="text-6xl md:text-8xl mx-2 md:mx-4" />
          </div>
        </div>
        
        <div className="relative z-10">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-4 rounded-full">
              <FaHandsHelping className="text-3xl md:text-4xl" />
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Clean Drive!</h2>
          <p className="mb-6 text-base md:text-lg max-w-2xl mx-auto">
            Be a part of the change. Volunteer with us and make your community cleaner and greener.
          </p>
          <button 
            onClick={() => navigate("/register")}
            className="bg-white text-green-600 font-semibold py-3 px-6 md:px-8 rounded-xl hover:bg-gray-100 transition flex items-center justify-center gap-2 mx-auto"
          >
            <FaUsers className="text-lg" />
            Join Clean Drive Section
          </button>
        </div>
      </div>

    </div>
  );
};

export default ExtraSections;
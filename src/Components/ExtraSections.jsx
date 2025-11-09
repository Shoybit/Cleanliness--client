import React, { useEffect, useState } from "react";
import { FaUsers, FaCheckCircle, FaClock, FaHandsHelping } from "react-icons/fa";
import { RiUserCommunityFill } from "react-icons/ri";

const ExtraSections = ({ stats }) => {
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
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">

<div className="bg-white rounded-2xl shadow-lg p-8 text-center">
  <div className="flex justify-center mb-4">
    <div className="bg-green-100 p-4 rounded-full inline-flex items-center justify-center">
      <RiUserCommunityFill className="text-4xl text-green-600" />
    </div>
  </div>
  <h2 className="text-4xl font-bold mb-8">Community Stats</h2>
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-green-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
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


    </div>
  );
};

export default ExtraSections;
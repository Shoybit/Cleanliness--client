import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaRecycle } from "react-icons/fa";
import Loader from "../Components/Loader";


const AddIssue = () => {
const { user } = useContext(AuthContext);
const [formData, setFormData] = useState({
title: "",
category: "",
location: "",
description: "",
image: "",
amount: "",
});
const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

const handleChange = (e) => {
const { name, value } = e.target;
setFormData({ ...formData, [name]: value });
};

const handleSubmit = async (e) => {
e.preventDefault();
setIsSubmitting(true);

const issueData = {
title: formData.title,
category: formData.category,
location: formData.location,
description: formData.description,
image: formData.image,
amount: formData.amount,
status: "ongoing",
date: new Date(),
email: user?.email,
};

try {
const res = await fetch("http://localhost:3000/addissue", {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify(issueData),
});

if (res.ok) {
toast.success("Issue reported successfully!");
setFormData({
title: "",
category: "",
location: "",
description: "",
image: "",
amount: "",
});
} else {
toast.error("Failed to submit issue. Please try again.");
}
} catch (err) {
console.error(err);
toast.error("Network error. Please check your connection.");
} finally {
setIsSubmitting(false);
}
};
    useEffect(() => {
    document.title = "AddIssue | Cleanliness ";
  }, []);
 
  if (loading) {
    return <Loader></Loader>; 
  }
return (
<div   className="max-w-2xl mx-auto p-6 
  bg-gradient-to-br from-white to-green-50 
  dark:from-gray-900 dark:to-gray-800
  shadow-2xl rounded-3xl mt-8 mb-8 
  border border-green-100 dark:border-gray-700
  transition-all duration-300">
<div className="text-center mb-8">
<div className="inline-flex items-center justify-center w-16 h-16 bg-green-100  rounded-full mb-4">
<FaRecycle className="text-3xl text-green-600" />
</div>
<h2 className="text-3xl font-bold bg-linear-to-r from-green-600 dark:text-white to-emerald-600 bg-clip-text text-transparent">
Report Cleanliness Issue
</h2>
<p className="text-gray-600 mt-2 dark:text-gray-400">Help keep our community clean and beautiful</p>
</div>

<form onSubmit={handleSubmit} className="space-y-6">

<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
</div>
<input
type="email"
value={user?.email || ""}
readOnly
className="w-full pl-10 pr-4 py-3 dark:bg-[#17202f] dark:text-white border border-gray-300 rounded-xl bg-gray-50 text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
/>
</div>


<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
</div>
<input
type="text"
name="title"
placeholder="Issue Title"
value={formData.title}
onChange={handleChange}
className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
required
/>
</div>

<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
</div>
<select
name="category"
value={formData.category}
onChange={handleChange}
className="w-full pl-10 pr-4 py-3  dark:bg-[#17202f] dark:text-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 appearance-none bg-white"
required
>
<option value="">Select Category</option>
<option value="Garbage" className="flex items-center">
Garbage Accumulation
</option>
<option value="Illegal Construction">Illegal Construction</option>
<option value="Broken Public Property">Broken Public Property</option>
<option value="Road Damage">Road Damage</option>
</select>
</div>

<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
</div>
<input
type="text"
name="location"
placeholder="Location "
value={formData.location}
onChange={handleChange}
className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
required
/>
</div>

<div className="relative">
<div className="absolute top-3 left-3 pointer-events-none">
</div>
<textarea
name="description"
placeholder="Please provide detailed description of the issue..."
value={formData.description}
onChange={handleChange}
rows="4"
className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 resize-none"
required
/>
</div>

<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
</div>
<input
type="text"
name="image"
placeholder="Image URL"
value={formData.image}
onChange={handleChange}
className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
/>
</div>

<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
</div>
<input
type="number"
name="amount"
placeholder="Suggested Fix Budget"
value={formData.amount}
onChange={handleChange}
className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
min="0"
step="0.01"
/>
</div>

<button
type="submit"
disabled={isSubmitting}
className="w-full bg-linear-to-r from-green-600 to-emerald-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-green-700 hover:to-emerald-700 focus:outline-none focus:ring-4 focus:ring-green-200 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-3"
>
{isSubmitting ? (
<>
<div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
<span>Submitting...</span>
</>
) : (
<>
<span>Report Issue</span>
</>
)}
</button>
</form>


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
</div>

);
};

export default AddIssue;
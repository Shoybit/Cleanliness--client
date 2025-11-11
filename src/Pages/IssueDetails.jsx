import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const IssueDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [issue, setIssue] = useState(null);
  const [contributors, setContributors] = useState([]);
  const [formData, setFormData] = useState({
    name: user?.displayName || "",
    email: user?.email || "",
    phone: "",
    address: "",
    amount: "",
    additionalInfo: "",
  });
    useEffect(() => {
    document.title = "IssueDetails | Cleanliness ";
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3000/letest-cleans/${id}`)
      .then(res => res.json())
      .then(data => setIssue(data))
      .catch(err => console.error(err));
  }, [id]);

  const fetchContributors = () => {
    fetch(`http://localhost:3000/contributions/${id}`)
      .then(res => res.json())
      .then(data => setContributors(data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchContributors();
  }, [id]);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!formData.amount || !formData.name || !formData.phone || !formData.address) {
      toast.error("Please fill all required fields!");
      return;
    }

const contributionData = {
  issueId: id,
  ...formData,
  photoURL: user?.photoURL, 
  date: new Date(),
};


    try {
      const res = await fetch("http://localhost:3000/contributions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contributionData),
      });
      const result = await res.json();
      if (result.success) {
        toast.success("Contribution saved successfully!");

        document.getElementById('contribute-modal').checked = false;
        fetchContributors();
        setFormData({
          name: user?.displayName || "",
          email: user?.email || "",
          phone: "",
          address: "",
          amount: "",
          additionalInfo: "",
        });
      } else {
        toast.error("Failed to save contribution.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!");
    }
  };

  const totalCollected = contributors.reduce((sum, c) => sum + parseFloat(c.amount || 0), 0);

  if (!issue) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="max-w-10/12 mx-auto px-4 py-12">
      <ToastContainer />


      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <div className="md:flex gap-6">
          <div className="md:w-1/2">
            {issue.image ? (
              <img src={issue.image} alt={issue.title} className="rounded-xl w-full object-cover h-80" />
            ) : (
              <div className="w-full h-80 bg-gray-200 flex items-center justify-center rounded-xl">
                No Image
              </div>
            )}
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0">
            <h2 className="text-3xl font-bold text-gray-900">{issue.title}</h2>
            <p className="text-gray-600 mt-2"><span className="font-semibold">Category:</span> {issue.category}</p>
            <p className="text-gray-600 mt-1"><span className="font-semibold">Location:</span> {issue.location}</p>
            <p className="text-gray-600 mt-1"><span className="font-semibold">Date:</span> {new Date(issue.date).toLocaleDateString()}</p>
            <p className="text-gray-600 mt-1"><span className="font-semibold">Suggested Budget:</span> ${issue.amount}</p>
            <p className="text-gray-700 mt-4">{issue.description}</p>

            <label
              htmlFor="contribute-modal"
              className="mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition cursor-pointer inline-block"
            >
              Pay Clean-Up Contribution
            </label>
          </div>
        </div>
      </div>

      <input type="checkbox" id="contribute-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative max-w-lg">
          <label htmlFor="contribute-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-2xl font-bold mb-4">Contribute to this Issue</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input 
              type="text" 
              name="title" 
              value={issue.title} 
              readOnly 
              className="input input-bordered w-full bg-gray-100" 
            />
            <input 
              type="number" 
              name="amount" 
              value={formData.amount} 
              onChange={handleInputChange} 
              placeholder="Amount *" 
              className="input input-bordered w-full" 
            />
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleInputChange} 
              placeholder="Your Name *" 
              className="input input-bordered w-full" 
            />
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              readOnly 
              className="input input-bordered w-full bg-gray-100" 
            />
            <input 
              type="text" 
              name="phone" 
              value={formData.phone} 
              onChange={handleInputChange} 
              placeholder="Phone Number *" 
              className="input input-bordered w-full" 
            />
            <input 
              type="text" 
              name="address" 
              value={formData.address} 
              onChange={handleInputChange} 
              placeholder="Address *" 
              className="input input-bordered w-full" 
            />
            <textarea 
              name="additionalInfo" 
              value={formData.additionalInfo} 
              onChange={handleInputChange} 
              placeholder="Additional Info (Optional)" 
              className="textarea textarea-bordered w-full"
            ></textarea>
            <button type="submit" className="btn btn-success w-full mt-2">
              Submit Contribution
            </button>
          </form>
        </div>
      </div>


      <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">
        <h3 className="text-xl font-bold mb-4">Contributors</h3>
        {contributors.length === 0 ? (
          <p className="text-gray-600">No contributions yet.</p>
        ) : (
          <>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-2 px-4">Contributor</th>
                  <th className="py-2 px-4">Amount</th>
                </tr>
              </thead>
              <tbody>
                {contributors.map((contri, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-2 px-4 flex items-center gap-2">
                      {contri.photoURL ? (
                        <img src={contri.photoURL} alt={contri.name} className="w-8 h-8 rounded-full object-cover" />
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white text-sm font-semibold">
                          {contri.name.charAt(0).toUpperCase()}
                        </div>
                      )}
                      {contri.name}
                    </td>
                    <td className="py-2 px-4">${contri.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-4 font-semibold">Total Collected: ${totalCollected}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default IssueDetails;
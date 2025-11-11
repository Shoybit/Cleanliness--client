import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import Loader from "../Components/Loader";

const MyIssues = () => {
  const { user } = useContext(AuthContext);
  const [issues, setIssues] = useState([]);
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    location: "",
    amount: "",
    description: "",
    status: "ongoing",
  });

  const [loading, setLoading] = useState(true);


    useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const fetchIssues = async () => {
    if (!user?.email) return;
    try {
      const res = await fetch(`http://localhost:3000/my-issues?userEmail=${user.email}`);
      const data = await res.json();
      setIssues(Array.isArray(data) ? data : []);
    } catch {
      toast.error("Failed to load your issues");
    }
  };
      useEffect(() => {
    document.title = "MyIssues | Cleanliness ";
  }, []);


  useEffect(() => {
    fetchIssues();
  }, [user]);

  const openUpdateModal = (issue) => {
    setSelectedIssue(issue);
    setFormData({
      title: issue.title,
      category: issue.category,
      location: issue.location,
      amount: issue.amount,
      description: issue.description,
      status: issue.status,
    });
    document.getElementById("update_modal").showModal();
  };

  const handleUpdate = async () => {
    if (!selectedIssue) return;
    try {
      await fetch(`http://localhost:3000/issues/${selectedIssue._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, userEmail: user.email }),
      });
      toast.success("Issue updated successfully!");
      document.getElementById("update_modal").close();
      fetchIssues();
    } catch {
      toast.error("Update failed");
    }
  };

  const handleDelete = async (issue) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this deletion!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#16a34a",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await fetch(`http://localhost:3000/issues/${issue._id}`, { method: "DELETE" });
          setIssues(issues.filter((i) => i._id !== issue._id));
          Swal.fire("Deleted!", "Your issue has been deleted.", "success");
        } catch {
          toast.error("Delete failed");
        }
      }
    });
  };

    if (loading) {
    return <Loader></Loader> 
  }

  return (
    <div className="p-6 max-w-10/12 mx-auto px-4">
      <ToastContainer />
      <h1 className="text-3xl font-bold text-center mb-6 text-green-700">
        My Issues
      </h1>

      <div className="overflow-x-auto shadow-lg rounded-2xl border border-gray-200 bg-white">
        <table className="w-full border-collapse">
          <thead className="bg-green-100 text-green-800">
            <tr>
              <th className="px-4 py-3 text-left">Title</th>
              <th className="px-4 py-3 text-left">Category</th>
              <th className="px-4 py-3 text-left">Location</th>
              <th className="px-4 py-3 text-left">Amount</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {issues.length > 0 ? (
              issues.map((issue) => (
                <tr
                  key={issue._id}
                  className={`border-b hover:bg-green-50 transition`}
                >
                  <td className="px-4 py-3 font-semibold">{issue.title}</td>
                  <td className="px-4 py-3">{issue.category}</td>
                  <td className="px-4 py-3">{issue.location}</td>
                  <td className="px-4 py-3 text-green-700 font-medium">
                    ${issue.amount || 0}
                  </td>
                  <td
                    className={`px-4 py-3 font-semibold ${
                      issue.status === "ongoing"
                        ? "text-yellow-600"
                        : "text-green-600"
                    }`}
                  >
                    {issue.status}
                  </td>
                  <td className="px-4 py-3 text-center space-x-3">
                    <button
                      onClick={() => openUpdateModal(issue)}
                      className="text-blue-600 hover:text-blue-800 transition"
                      title="Edit Issue"
                    >
                      <FaEdit size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(issue)}
                      className="text-red-600 hover:text-red-800 transition"
                      title="Delete Issue"
                    >
                      <FaTrashAlt size={18} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-500">
                  No issues found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <dialog id="update_modal" className="modal">
        <div className="modal-box">
          <h2 className="text-2xl font-semibold mb-4 text-green-700">Update Issue</h2>
          <div className="space-y-3">
            {["title", "category", "location", "amount", "description"].map((field) => (
              <input
                key={field}
                className="input input-bordered w-full"
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={formData[field]}
                onChange={(e) =>
                  setFormData({ ...formData, [field]: e.target.value })
                }
              />
            ))}
            <select
              className="select select-bordered w-full"
              value={formData.status}
              onChange={(e) =>
                setFormData({ ...formData, status: e.target.value })
              }
            >
              <option value="ongoing">Ongoing</option>
              <option value="ended">Ended</option>
            </select>
          </div>
          <div className="modal-action">
            <form method="dialog" className="space-x-2">
              <button className="btn bg-gray-300 hover:bg-gray-400">Cancel</button>
              <button
                type="button"
                className="btn bg-green-600 hover:bg-green-700 text-white"
                onClick={handleUpdate}
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default MyIssues;
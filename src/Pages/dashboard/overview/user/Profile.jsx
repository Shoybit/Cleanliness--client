import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../../Context/AuthContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../../../../Firebase/Firebase.config";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const { user } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setPhoto(user.photoURL || "");
    }
  }, [user]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });

      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={2000} />

      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-6">My Profile</h2>

        <form onSubmit={handleUpdate} className="space-y-4">
          <div className="flex justify-center">
            <img
              src={photo || "https://i.ibb.co/2kRZQ0Z/user.png"}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border px-3 py-2 rounded dark:bg-gray-700"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              value={user?.email || ""}
              readOnly
              className="w-full border px-3 py-2 rounded bg-gray-100 dark:bg-gray-700"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Photo URL</label>
            <input
              type="text"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              className="w-full border px-3 py-2 rounded dark:bg-gray-700"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 disabled:opacity-60"
          >
            {loading ? "Updating..." : "Update Profile"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Profile;

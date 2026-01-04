import { useContext, useState } from "react";
import { AuthContext } from "../../../../Context/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);

  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  const handleUpdate = (e) => {
    e.preventDefault();
    alert("Profile updated (demo)");
  };

  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-6">My Profile</h2>

      <form onSubmit={handleUpdate} className="space-y-4">
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src={photo || "https://i.ibb.co/2kRZQ0Z/user.png"}
            alt="Profile"
            className="w-24 h-24 rounded-full"
          />
        </div>

        {/* Name */}
        <div>
          <label className="block mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border px-3 py-2 rounded dark:bg-gray-700"
          />
        </div>

        {/* Email (Read only) */}
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            value={user?.email || ""}
            readOnly
            className="w-full border px-3 py-2 rounded bg-gray-100 dark:bg-gray-700"
          />
        </div>

        {/* Photo URL */}
        <div>
          <label className="block mb-1">Photo URL</label>
          <input
            type="text"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            className="w-full border px-3 py-2 rounded dark:bg-gray-700"
          />
        </div>

        <button
          type="submit"
          className="bg-primary text-white px-6 py-2 rounded"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;

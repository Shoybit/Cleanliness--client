import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../../Context/AuthContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../../../../Firebase/Firebase.config";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserIcon, CameraIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

const Profile = () => {
  const { user } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [loading, setLoading] = useState(false);
  const [photoPreview, setPhotoPreview] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setPhoto(user.photoURL || "");
      setPhotoPreview(user.photoURL || "https://i.ibb.co/2kRZQ0Z/user.png");
    }
  }, [user]);

  useEffect(() => {
    // Update preview when photo URL changes
    setPhotoPreview(photo || "https://i.ibb.co/2kRZQ0Z/user.png");
  }, [photo]);

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
      <ToastContainer 
        position="top-center" 
        autoClose={2000}
        theme="colored"
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              My Profile
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Update your personal information
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            {/* Profile Header */}
            <div className="bg-linear-to-r from-blue-500 to-purple-600 px-6 py-8">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/80 shadow-xl">
                    <img
                      src={photoPreview}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full">
                    <CameraIcon className="w-5 h-5" />
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <h2 className="text-2xl font-bold text-white">
                    {name || "Your Name"}
                  </h2>
                  <p className="text-blue-100 mt-1 flex items-center justify-center sm:justify-start gap-2">
                    <EnvelopeIcon className="w-4 h-4" />
                    {user?.email}
                  </p>
                  <div className="mt-3 inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-white text-sm">
                    <UserIcon className="w-4 h-4 mr-1" />
                    {user?.role || "User"}
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleUpdate} className="p-6 md:p-8">
              <div className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <UserIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      value={user?.email || ""}
                      readOnly
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                    />
                  </div>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Email cannot be changed
                  </p>
                </div>

                {/* Photo URL Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Profile Picture URL
                  </label>
                  <div className="space-y-4">
                    <input
                      type="text"
                      value={photo}
                      onChange={(e) => setPhoto(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter image URL (e.g., https://example.com/photo.jpg)"
                    />
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <CameraIcon className="w-4 h-4" />
                      <span>Enter a valid image URL for your profile picture</span>
                    </div>
                  </div>
                </div>

                {/* Account Info */}
                <div className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Account Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">User ID</p>
                      <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                        {user?.uid || "N/A"}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Account Created</p>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {user?.metadata?.creationTime 
                          ? new Date(user.metadata.creationTime).toLocaleDateString()
                          : "N/A"
                        }
                      </p>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full md:w-auto min-w-[200px] inline-flex justify-center items-center px-6 py-3.5 text-base font-medium text-white bg-linear-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-md"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Updating...
                      </>
                    ) : (
                      "Update Profile"
                    )}
                  </button>
                  <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 text-center md:text-left">
                    Click update to save your profile changes
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
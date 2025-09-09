
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthContext";
import CountUp from "react-countup";
import { FiList, FiPlusCircle } from "react-icons/fi";




// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const DashboardWelcome = () => {
  const { user } = useContext(AuthContext);
  const [stats, setStats] = useState({ totalListings: 0, newThisMonth: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardStats = async () => {
      try {
        const now = new Date();
        const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

        // 1) Get ALL posts
        const snapAll = await getDocs(collection(db, "roommatePosts"));
        const totalListings = snapAll.size;

        // 2) Filter for posts created this month
        const newThisMonth = snapAll.docs.filter((doc) => {
          const data = doc.data();
          if (!data.createdAt) return false;

          let dt;
          if (typeof data.createdAt.toDate === "function") {
            dt = data.createdAt.toDate(); // Firestore Timestamp
          } else {
            dt = new Date(data.createdAt); // string or number fallback
          }

          return dt && dt >= firstDayOfMonth;
        }).length;

        setStats({ totalListings, newThisMonth });
      } catch (error) {
        console.error("Failed to load dashboard stats:", error);
        setStats({ totalListings: 0, newThisMonth: 0 });
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardStats();
  }, []);

  return (
    <div className="text-center py-10 px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Welcome to your Dashboard
      </h2>
      <p className="text-gray-600 mb-10">
        Hello <span className="font-semibold">{user?.displayName || "User"}</span>, 
        here’s a quick overview.
      </p>

     

      {/* Quick Actions */}
      <div className="mt-8 bg-base-100 shadow-lg rounded-xl border p-6 max-w-2xl mx-auto">
        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            className="btn btn-primary btn-outline"
            onClick={() => (window.location.href = "/dashboard/add-lists")}
          >
            <FiPlusCircle className="mr-2" />
            Add New Listing
          </button>
          <button
            className="btn btn-secondary btn-outline"
            onClick={() => (window.location.href = "/dashboard/my-lists")}
          >
            <FiList className="mr-2" />
            View My Listings
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardWelcome;

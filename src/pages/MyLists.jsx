

import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthContext";
import { Link } from "react-router";
import { MdDelete, MdUpdate } from "react-icons/md";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

// Firebase imports
import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, getDocs, doc, deleteDoc } from "firebase/firestore";

// // Firebase config (inline)
const firebaseConfig = {
  apiKey: "AIzaSyDG5WFfAfuD_EjHMxxVprtJ6Dz6dvqYMyw",
  authDomain: "house-48b55.firebaseapp.com",
  projectId: "house-48b55",
  storageBucket: "house-48b55.firebasestorage.app",
  messagingSenderId: "118580147922",
  appId: "1:118580147922:web:67e1c94fb1522d8529df0b",
  measurementId: "G-N4RTS3JG64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const MyLists = () => {
  const { user } = useContext(AuthContext);
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "My Lists";

    const fetchUserLists = async () => {
      if (!user?.email) {
        setLoading(false);
        return;
      }

      try {
        // Fetch all posts by this user
        const postsRef = collection(db, "roommatePosts");
        const q = query(postsRef, where("ownerEmail", "==", user.email));
        const querySnapshot = await getDocs(q);

        // Map documents and safely handle createdAt
        const userLists = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            _id: doc.id,
            ...data,
            createdAt: data.createdAt?.toDate?.() || new Date(data.createdAt || 0),
          };
        });

        // Sort locally by createdAt descending
        userLists.sort((a, b) => b.createdAt - a.createdAt);

        setLists(userLists);
      } catch (error) {
        console.error("Failed to fetch user lists:", error);
        toast.error("Failed to load your listings");
      } finally {
        setLoading(false);
      }
    };

    fetchUserLists();
  }, [user?.email]);

  const handleDelete = async (_id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await deleteDoc(doc(db, "roommatePosts", _id));
        setLists((prev) => prev.filter((list) => list._id !== _id));
        Swal.fire("Deleted!", "Your post has been removed.", "success");
      } catch (error) {
        console.error("Failed to delete listing:", error);
        toast.error("Failed to delete the listing");
        Swal.fire("Error!", "Failed to delete the post. Please try again.", "error");
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center py-10">
        <span className="loading loading-bars loading-lg text-primary"></span>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="text-center py-10 text-gray-500">
        <p>Please login to view your listings.</p>
      </div>
    );
  }

  if (lists.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">
        <div className="max-w-md mx-auto">
          <h3 className="text-xl font-semibold mb-4">No Listings Yet</h3>
          <p className="mb-6">You haven't added any roommate listings yet. Start by creating your first post!</p>
          <Link to="/dashboard/add-lists" className="btn btn-primary">
            Add Your First Listing
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold">My Listings</h2>
        <div className="text-sm text-gray-500">
          Total: {lists.length} listing{lists.length !== 1 ? "s" : ""}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead className="bg-base-200 text-base font-semibold">
            <tr>
              <th>Title</th>
              <th>Location</th>
              <th>Rent</th>
              <th>Room Type</th>
              <th>Availability</th>
              <th>Likes</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {lists.map((list) => (
              <tr key={list._id}>
                <td className="font-medium">
                  <Link to={`/card-details/${list._id}`} className="link link-primary hover:link-secondary">
                    {list.title}
                  </Link>
                </td>
                <td className="text-gray-600">{list.location}</td>
                <td className="font-semibold text-green-600">FCFA{list.rent}</td>
                <td>
                  <span className={`badge badge-outline ${list.roomType === "Single" ? "badge-primary" : "badge-accent"}`}>
                    {list.roomType}
                  </span>
                </td>
                <td>
                  <span className={`badge ${list.availability === "Available" ? "badge-success" : "badge-error"}`}>
                    {list.availability}
                  </span>
                </td>
                <td>
                  <span className="text-red-500 font-semibold">{list.likeCount || 0} ❤️</span>
                </td>
                <td>
                  <Link to={`/dashboard/update/${list._id}`} className="text-blue-500 hover:text-blue-700 transition-colors" title="Update this listing">
                    <MdUpdate className="cursor-pointer" size={20} />
                  </Link>
                </td>
                <td>
                  <button onClick={() => handleDelete(list._id)} className="text-red-500 hover:text-red-700 transition-colors" title="Delete this listing">
                    <MdDelete size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Quick Stats */}
      <div className="mt-6 stats shadow">
        <div className="stat">
          <div className="stat-title">Total Posts</div>
          <div className="stat-value">{lists.length}</div>
        </div>

        <div className="stat">
          <div className="stat-title">Available</div>
          <div className="stat-value text-success">{lists.filter((list) => list.availability === "Available").length}</div>
        </div>

        <div className="stat">
          <div className="stat-title">Total Likes</div>
          <div className="stat-value text-error">{lists.reduce((sum, list) => sum + (list.likeCount || 0), 0)}</div>
        </div>
      </div>
    </div>
  );
};

export default MyLists;

// import React, { useContext, useEffect } from "react";
// import { AuthContext } from "../provider/AuthContext";
// import { useLoaderData } from "react-router";
// import Swal from "sweetalert2";
// import toast from "react-hot-toast";

// const UpdateList = () => {
//   const list = useLoaderData();
//   useEffect(() => {
//     document.title = "Update Post";
//   }, []);

//   const { _id } = list;
//   const { user } = useContext(AuthContext);

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const formData = new FormData(form);
//     const newLists = Object.fromEntries(formData.entries());

//     fetch(`https://data-gamma-two.vercel.app/${_id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newLists),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.modifiedCount) {
//           Swal.fire({
//             title: "Update Post Successfully.",
//             icon: "success",
//             draggable: true,
//           });
//           form.reset();
//         }
//       })
//       .catch(() => {
//         toast.error("Update Post Failed.");
//       });
//   };

//   return (
//     <div className="w-full min-h-screen p-4 md:p-8 flex justify-center items-start bg-base-100 text-base-content">
//       <div className="w-full max-w-4xl bg-base-200 rounded-xl shadow-xl p-8">
//         <h2 className="text-2xl text-center font-bold mb-5 text-secondary">
//           Update Post Details
//         </h2>

//         <form onSubmit={handleUpdate} className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input
//             className="input input-bordered w-full"
//             name="title"
//             type="text"
//             placeholder="Title"
//             required
//             defaultValue={list?.title}
//           />
//           <input
//             className="input input-bordered w-full"
//             name="location"
//             type="text"
//             placeholder="Location"
//             required
//             defaultValue={list?.location}
//           />
//           <input
//             className="input input-bordered w-full"
//             name="rent"
//             type="number"
//             placeholder="Rent Amount"
//             required
//             defaultValue={list?.rent}
//           />
//           <select
//             className="select select-bordered w-full"
//             name="roomType"
//             required
//             defaultValue={list?.roomType}
//           >
//             <option disabled>Select Room Type</option>
//             <option>Single</option>
//             <option>Shared</option>
//           </select>
//           <input
//             className="input input-bordered w-full"
//             name="lifestyle"
//             type="text"
//             placeholder="Lifestyle Preferences"
//             required
//             defaultValue={list?.lifestyle}
//           />
//           <input
//             className="input input-bordered w-full"
//             name="contact"
//             type="text"
//             placeholder="Contact Info"
//             required
//             defaultValue={list?.contact}
//           />
//           <select
//             className="select select-bordered w-full"
//             name="availability"
//             required
//             defaultValue={list?.availability}
//           >
//             <option disabled>Select Availability</option>
//             <option value="Available">Available</option>
//             <option value="Not Available">Not Available</option>
//           </select>

//           <textarea
//             className="textarea textarea-bordered w-full col-span-full"
//             name="description"
//             placeholder="Bio"
//             required
//             defaultValue={list?.description}
//           ></textarea>

//           <input
//             className="input input-bordered w-full"
//             type="text"
//             defaultValue={user.displayName}
//             disabled
//           />
//           <input
//             className="input input-bordered w-full"
//             type="text"
//             defaultValue={user.email}
//             disabled
//           />

//           <button
//             type="submit"
//             className="btn btn-secondary w-full col-span-full"
//           >
//             Update Post
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UpdateList;
// import React, { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../provider/AuthContext";
// import { useLoaderData } from "react-router";
// import Swal from "sweetalert2";
// import toast from "react-hot-toast";

// // Mock data for the list to be updated
// const mockList = {
//   _id: "507f1f77bcf86cd799439011",
//   title: "Spacious Room Near Hotel",
//   location: "Bounamoussadi, Douala",
//   rent: 400,
//   roomType: "Shared",
//   lifestyle: "Non-smoker, prefers early riser, vegetarian-friendly",
//   contact: "+237 634567890",
//   availability: "Available",
//   description: "Looking for a clean and friendly female roommate to share a 2-bedroom apartment near Dhanmondi Lake. Fully furnished, Wi-Fi, and 24/7 security.",
//   ownerName: "user",
//   ownerEmail: "user@example.com"
// };

// // Mock user data
// const mockUser = {
//   displayName: "user",
//   email: "user@example.com"
// };

// const UpdateList = () => {
//   // Use mock data instead of useLoaderData()
//   const [list, setList] = useState(mockList);
  
//   // Mock AuthContext - you can replace this with actual context if available
//   const [user] = useState(mockUser);

//   useEffect(() => {
//     document.title = "Update Post";
//   }, []);

//   const { _id } = list;

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const formData = new FormData(form);
//     const newLists = Object.fromEntries(formData.entries());

//     // Mock API call - replace with actual implementation
//     try {
//       console.log("Updating list with ID:", _id);
//       console.log("New data:", newLists);
      
//       // Simulate API delay
//       await new Promise(resolve => setTimeout(resolve, 1000));
      
//       // Update local state with new data
//       setList(prevList => ({
//         ...prevList,
//         ...newLists
//       }));

//       // Mock successful response
//       Swal.fire({
//         title: "Update Post Successfully.",
//         icon: "success",
//         draggable: true,
//       });
      
//       // Don't reset form to keep updated values visible
//       // form.reset();
      
//     } catch (error) {
//       console.error("Update failed:", error);
//       toast.error("Update Post Failed.");
//     }
//   };

//   return (
//     <div className="w-full min-h-screen p-4 md:p-8 flex justify-center items-start bg-base-100 text-base-content">
//       <div className="w-full max-w-4xl bg-base-200 rounded-xl shadow-xl p-8">
//         <h2 className="text-2xl text-center font-bold mb-5 text-secondary">
//           Update Post Details
//         </h2>

//         <form onSubmit={handleUpdate} className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input
//             className="input input-bordered w-full"
//             name="title"
//             type="text"
//             placeholder="Title"
//             required
//             defaultValue={list?.title}
//           />
//           <input
//             className="input input-bordered w-full"
//             name="location"
//             type="text"
//             placeholder="Location"
//             required
//             defaultValue={list?.location}
//           />
//           <input
//             className="input input-bordered w-full"
//             name="rent"
//             type="number"
//             placeholder="Rent Amount"
//             required
//             defaultValue={list?.rent}
//           />
//           <select
//             className="select select-bordered w-full"
//             name="roomType"
//             required
//             defaultValue={list?.roomType}
//           >
//             <option disabled>Select Room Type</option>
//             <option>Single</option>
//             <option>Shared</option>
//           </select>
//           <input
//             className="input input-bordered w-full"
//             name="lifestyle"
//             type="text"
//             placeholder="Lifestyle Preferences"
//             required
//             defaultValue={list?.lifestyle}
//           />
//           <input
//             className="input input-bordered w-full"
//             name="contact"
//             type="text"
//             placeholder="Contact Info"
//             required
//             defaultValue={list?.contact}
//           />
//           <select
//             className="select select-bordered w-full"
//             name="availability"
//             required
//             defaultValue={list?.availability}
//           >
//             <option disabled>Select Availability</option>
//             <option value="Available">Available</option>
//             <option value="Not Available">Not Available</option>
//           </select>

//           <textarea
//             className="textarea textarea-bordered w-full col-span-full"
//             name="description"
//             placeholder="Bio"
//             required
//             defaultValue={list?.description}
//           ></textarea>

//           <input
//             className="input input-bordered w-full"
//             type="text"
//             defaultValue={user?.displayName}
//             disabled
//           />
//           <input
//             className="input input-bordered w-full"
//             type="text"
//             defaultValue={user?.email}
//             disabled
//           />

//           <button
//             type="submit"
//             className="btn btn-secondary w-full col-span-full"
//           >
//             Update Post
//           </button>
//         </form>

//         {/* Debug section - remove in production */}
//         <div className="mt-8 p-4 bg-base-300 rounded-lg">
//           <h3 className="font-bold mb-2">Current Data (for debugging):</h3>
//           <pre className="text-sm overflow-auto">
//             {JSON.stringify(list, null, 2)}
//           </pre>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UpdateList;


import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

// Firebase imports
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  updateDoc,
  serverTimestamp
} from "firebase/firestore";

// Firebase config (directly used here)
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

const UpdateList = () => {
  const { id } = useParams(); // Listing ID from URL
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    rent: "",
    roomType: "Single",
    lifestyle: "",
    contact: "",
    availability: "Available",
    image: "",
    description: "",
  });

  useEffect(() => {
    document.title = "Update Listing";

    const fetchListing = async () => {
      try {
        const docRef = doc(db, "roommatePosts", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setFormData(docSnap.data());
        } else {
          toast.error("Listing not found");
          navigate("/dashboard/my-lists");
        }
      } catch (error) {
        console.error("Error fetching listing:", error);
        toast.error("Failed to load listing");
      } finally {
        setLoading(false);
      }
    };

    fetchListing();
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const docRef = doc(db, "roommatePosts", id);
      await updateDoc(docRef, {
        ...formData,
        updatedAt: serverTimestamp(),
      });

      Swal.fire("Updated!", "Your listing has been updated.", "success");
      navigate("/dashboard/my-lists");
    } catch (error) {
      console.error("Error updating listing:", error);
      toast.error("Failed to update listing");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center py-10">
        <span className="loading loading-bars loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-start">
      <div className="w-full max-w-4xl bg-base-100 rounded-xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Update Listing</h2>

        <form onSubmit={handleUpdate} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            className="input input-bordered w-full"
            name="title"
            type="text"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <input
            className="input input-bordered w-full"
            name="location"
            type="text"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            required
          />
          <input
            className="input input-bordered w-full"
            name="rent"
            type="number"
            placeholder="Rent Amount"
            value={formData.rent}
            onChange={handleChange}
            required
          />
          <select
            className="select select-bordered w-full"
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
            required
          >
            <option>Single</option>
            <option>Shared</option>
          </select>
          <input
            className="input input-bordered w-full"
            name="lifestyle"
            type="text"
            placeholder="Lifestyle Preferences"
            value={formData.lifestyle}
            onChange={handleChange}
          />
          <input
            className="input input-bordered w-full"
            name="contact"
            type="text"
            placeholder="Contact Info"
            value={formData.contact}
            onChange={handleChange}
            required
          />
          <select
            className="select select-bordered w-full"
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            required
          >
            <option value="Available">Available</option>
            <option value="Not Available">Not Available</option>
          </select>
          <input
            className="input input-bordered w-full"
            name="image"
            type="text"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
          />
          <textarea
            className="textarea textarea-bordered w-full col-span-full"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>

          <button
            type="submit"
            className="btn btn-secondary w-full col-span-full"
          >
            Update Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateList;

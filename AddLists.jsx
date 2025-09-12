// import React, { useContext, useEffect } from "react";
// import { AuthContext } from "../provider/AuthContext";
// import Swal from "sweetalert2";
// import toast from "react-hot-toast";

// const AddLists = () => {
//   const { user } = useContext(AuthContext);

//   useEffect(() => {
//     document.title = "Add Roommate";
//   }, []);

//   const handleAddList = async (e) => {
//     e.preventDefault();
//     const form = e.target;

//     const formData = new FormData(form);
//     const newLists = Object.fromEntries(formData.entries());
//     newLists.email = user.email;
//     newLists.createdAt = new Date(); // Add createdAt timestamp

//     fetch("https://roommate-finder-server-xi.vercel.app/lists", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newLists),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.insertedId) {
//           Swal.fire({
//             title: "Add Post Successful.",
//             icon: "success",
//             draggable: true,
//           });
//           form.reset();
//         }
//       })
//       .catch(() => {
//         toast.error("Add Post Failed.");
//       });
//   };

//   return (
//     <div className="w-full min-h-screen md:mt-10 xl:mt-20 flex justify-center items-start">
//       <div className="w-full max-w-4xl bg-base-100 rounded-xl shadow-xl p-8">
//         <h2 className="text-2xl text-center text-secondary font-bold mb-5">
//           Add to Find Roommate
//         </h2>

//         <form onSubmit={handleAddList} className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input
//             className="input input-bordered w-full"
//             name="title"
//             type="text"
//             placeholder="Title"
//             required
//           />
//           <input
//             className="input input-bordered w-full"
//             name="location"
//             type="text"
//             placeholder="Location"
//             required
//           />
//           <input
//             className="input input-bordered w-full"
//             name="rent"
//             type="number"
//             placeholder="Rent Amount"
//             required
//           />
//           <select
//             defaultValue="Select Room Type"
//             className="select select-bordered w-full"
//             name="roomType"
//             required
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
//           />
//           <input
//             className="input input-bordered w-full"
//             name="contact"
//             type="text"
//             placeholder="Contact Info"
//             required
//           />
//           <select
//             defaultValue="Select Availabililty"
//             className="select select-bordered w-full"
//             name="availability"
//             required
//           >
//             <option disabled>Select Availabililty</option>
//             <option value="Available">Available</option>
//             <option value="Not Available">Not Available</option>
//           </select>

//           {/* ✅ New input for image URL */}
//           <input
//             className="input input-bordered w-full"
//             name="image"
//             type="text"
//             placeholder="Image URL (optional)"
//           />

//           <textarea
//             className="textarea textarea-bordered w-full col-span-full"
//             name="description"
//             placeholder="Bio"
//             required
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
//             Add Post
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddLists;




// import React, { useContext, useEffect } from "react";
// import { AuthContext } from "../provider/AuthContext";
// import Swal from "sweetalert2";
// import toast from "react-hot-toast";

// // Firebase imports
// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

// // --- Firebase config directly in this file ---
// const firebaseConfig = {
//   apiKey: "AIzaSyDG5WFfAfuD_EjHMxxVprtJ6Dz6dvqYMyw",
//   authDomain: "house-48b55.firebaseapp.com",
//   projectId: "house-48b55",
//   storageBucket: "house-48b55.firebasestorage.app",
//   messagingSenderId: "118580147922",
//   appId: "1:118580147922:web:67e1c94fb1522d8529df0b",
//   measurementId: "G-N4RTS3JG64"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// const AddLists = () => {
//   const { user } = useContext(AuthContext);

//   useEffect(() => {
//     document.title = "Add Roommate";
//   }, []);

//   const handleAddList = async (e) => {
//     e.preventDefault();
//     const form = e.target;

//     const formData = new FormData(form);
//     const newList = Object.fromEntries(formData.entries());
//     newList.email = user.email;
//     newList.name = user.displayName;
//     newList.createdAt = serverTimestamp(); // Firestore timestamp

//     try {
//       await addDoc(collection(db, "roommatePosts"), newList); // Save to Firestore collection
//       Swal.fire({
//         title: "Post Added Successfully!",
//         icon: "success",
//         draggable: true,
//       });
//       form.reset();
//     } catch (error) {
//       console.error("Error adding post:", error);
//       toast.error("Failed to add post. Please try again.");
//     }
//   };

//   return (
//     <div className="w-full min-h-screen md:mt-10 xl:mt-20 flex justify-center items-start">
//       <div className="w-full max-w-4xl bg-base-100 rounded-xl shadow-xl p-8">
//         <h2 className="text-2xl text-center text-secondary font-bold mb-5">
//           Add to Find Roommate
//         </h2>

//         <form onSubmit={handleAddList} className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input
//             className="input input-bordered w-full"
//             name="title"
//             type="text"
//             placeholder="Title"
//             required
//           />
//           <input
//             className="input input-bordered w-full"
//             name="location"
//             type="text"
//             placeholder="Location"
//             required
//           />
//           <input
//             className="input input-bordered w-full"
//             name="rent"
//             type="number"
//             placeholder="Rent Amount"
//             required
//           />
//           <select
//             defaultValue="Select Room Type"
//             className="select select-bordered w-full"
//             name="roomType"
//             required
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
//           />
//           <input
//             className="input input-bordered w-full"
//             name="contact"
//             type="text"
//             placeholder="Contact Info"
//             required
//           />
//           <select
//             defaultValue="Select Availabililty"
//             className="select select-bordered w-full"
//             name="availability"
//             required
//           >
//             <option disabled>Select Availabililty</option>
//             <option value="Available">Available</option>
//             <option value="Not Available">Not Available</option>
//           </select>

//           {/* Optional image URL */}
//           <input
//             className="input input-bordered w-full"
//             name="image"
//             type="text"
//             placeholder="Image URL (optional)"
//           />

//           <textarea
//             className="textarea textarea-bordered w-full col-span-full"
//             name="description"
//             placeholder="Bio"
//             required
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
//             Add Post
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddLists;







import React, { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

// Firebase imports
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

// --- Firebase config directly in this file ---
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

const AddLists = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Add Roommate";
  }, []);

  const handleAddList = async (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);
    const newList = Object.fromEntries(formData.entries());
    
    // Add user information and timestamp
    newList.email = user.email;
    newList.name = user.displayName;
    newList.ownerName = user.displayName; // Add ownerName for consistency
    newList.ownerEmail = user.email; // Add ownerEmail for consistency
    newList.createdAt = serverTimestamp(); // Firestore timestamp
    newList.likeCount = 0; // Initialize like count
    newList.featured = false; // Initialize as not featured

    // Convert rent to number
    newList.rent = parseInt(newList.rent);

    try {
      const docRef = await addDoc(collection(db, "roommatePosts"), newList);
      
      Swal.fire({
        title: "Post Added Successfully!",
        text: "Your roommate listing has been published.",
        icon: "success",
        draggable: true,
        showCancelButton: true,
        confirmButtonText: "View All Listings",
        cancelButtonText: "Add Another Post",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#6c757d"
      }).then((result) => {
        if (result.isConfirmed) {
          // Navigate to browse listings page
          navigate("/browse-lists");
        } else {
          // Reset form for another post
          form.reset();
        }
      });
      
      console.log("Document written with ID: ", docRef.id);
      
    } catch (error) {
      console.error("Error adding post:", error);
      toast.error("Failed to add post. Please try again.");
      
      Swal.fire({
        title: "Error!",
        text: "Failed to add post. Please try again.",
        icon: "error",
        draggable: true,
      });
    }
  };

  return (
    <div className="w-full min-h-screen md:mt-10 xl:mt-20 flex justify-center items-start">
      <div className="w-full max-w-4xl bg-base-100 rounded-xl shadow-xl p-8">
        <h2 className="text-2xl text-center text-secondary font-bold mb-5">
          Add to Find Roommate
        </h2>

        <form onSubmit={handleAddList} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            className="input input-bordered w-full"
            name="title"
            type="text"
            placeholder="Title"
            required
          />
          <input
            className="input input-bordered w-full"
            name="location"
            type="text"
            placeholder="Location"
            required
          />
          <input
            className="input input-bordered w-full"
            name="rent"
            type="number"
            placeholder="Rent Amount"
            required
          />
          <select
            defaultValue="Select Room Type"
            className="select select-bordered w-full"
            name="roomType"
            required
          >
            <option disabled>Select Room Type</option>
            <option>Single</option>
            <option>Shared</option>
          </select>
          <input
            className="input input-bordered w-full"
            name="lifestyle"
            type="text"
            placeholder="Lifestyle Preferences"
            required
          />
          <input
            className="input input-bordered w-full"
            name="contact"
            type="text"
            placeholder="Contact Info"
            required
          />
          <select
            defaultValue="Select Availability"
            className="select select-bordered w-full"
            name="availability"
            required
          >
            <option disabled>Select Availability</option>
            <option value="Available">Available</option>
            <option value="Not Available">Not Available</option>
          </select>

          {/* Optional image URL */}
          <input
            className="input input-bordered w-full"
            name="image"
            type="url"
            placeholder="Image URL (optional)"
          />

          <textarea
            className="textarea textarea-bordered w-full col-span-full"

// import React, { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../provider/AuthContext";
// import { Link } from "react-router";
// import { MdDelete, MdUpdate } from "react-icons/md";
// import Swal from "sweetalert2";

// const MyLists = () => {
//   const { user } = useContext(AuthContext);
//   const [lists, setLists] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     document.title = "My Lists";

//     if (!user?.email) return;

//     fetch(`https://roommate-finder-server-xi.vercel.app/lists/email/${user.email}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setLists(data);
//         setLoading(false);
//       })
//       .catch(() => {
//         setLoading(false);
//       });
//   }, [user?.email]);

//   const handleDelete = (_id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "This action cannot be undone!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(`https://roommate-finder-server-xi.vercel.app/lists/${_id}`, {
//           method: "DELETE",
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             if (data.deletedCount) {
//               setLists((prev) => prev.filter((list) => list._id !== _id));
//               Swal.fire("Deleted!", "Your post has been removed.", "success");
//             }
//           });
//       }
//     });
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center py-10">
//         <span className="loading loading-bars loading-lg text-primary"></span>
//       </div>
//     );
//   }

//   if (lists.length === 0) {
//     return (
//       <div className="text-center py-10 text-gray-500">
//         <p>You haven’t added any listings yet.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="overflow-x-auto">
//       <table className="table table-zebra">
//         <thead className="bg-base-200 text-base font-semibold">
//           <tr>
//             <th>Title</th>
//             <th>Rent</th>
//             <th>Room Type</th>
//             <th>Update</th>
//             <th>Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {lists.map((list) => (
//             <tr key={list._id}>
//               <td>{list.title}</td>
//               <td>${list.rent}</td>
//               <td>
//                 <span className="badge badge-accent badge-outline">{list.roomType}</span>
//               </td>
//               <td>
//                 <Link to={`/dashboard/update/${list._id}`} className="text-blue-500 hover:text-blue-700">
//                   <MdUpdate className="cursor-pointer" size={20} />
//                 </Link>
//               </td>
//               <td>
//                 <MdDelete
//                   onClick={() => handleDelete(list._id)}
//                   className="cursor-pointer text-red-500 hover:text-red-700"
//                   size={20}
//                 />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default MyLists;





// import React, { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../provider/AuthContext";
// import { Link } from "react-router";
// import { MdDelete, MdUpdate } from "react-icons/md";
// import Swal from "sweetalert2";

// // Mock data for user listings
// const mockListsData = [
//   {
//       _id: "507f1f77bcf86cd799439011",
//     title: "Spacious Room Near public Station",
//     location: "Yaounde, Bastos",
//     rent: 400,
//     roomType: "Shared",
//     lifestyle: "Non-smoker, prefers early riser, vegetarian-friendly",
//     contact: "+237 634567890",
//     availability: "Available",
//     description: "Looking for a clean and friendly female roommate to share a 2-bedroom apartment near Dhanmondi Lake. Fully furnished, Wi-Fi, and 24/7 security.",
//     ownerName: "user",
//     ownerEmail: "user@example.com",
//     image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
//     likeCount: 14,
//     featured: true,
//     createdAt: "2024-01-15T10:30:00Z"
//   },
//   {
//     _id: "507f1f77bcf86cd799439012",
//     title: "Conforter place for Work",
//     location: "Douala, Bounamoussadi",
//     rent: 200,
//     roomType: "Single",
//     lifestyle: "Quiet, no parties, working professional preferred",
//     contact: "+237 623456781",
//     availability: "Available",
//     description: "Single room for bachelor in a quiet building. Close to metro station and shopping centers. Perfect for working professionals.",
//     ownerName: "Precious nbah",
//     ownerEmail: "mbah@example.com",
//     image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
//     likeCount: 8,
//     featured: false,
//     createdAt: "2024-01-20T14:15:00Z"
//   },
//   {
//     _id: "507f1f77bcf86cd799439013",
//     title: "Quiet Room City place to be",
//     location: "Baffoussam, Lycee Classique",
//     rent: 600,
//     roomType: "Single",
//     lifestyle: "Student-friendly, study-focused environment",
//     contact: "+237 6234567892",
//     availability: "Not Available",
//     description: "Perfect for university students. Quiet neighborhood with good internet connectivity and study facilities.",
//     ownerName: "Fatima Khan",
//     ownerEmail: "fatima@example.com",
//     image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
//     likeCount: 12,
//     featured: true,
//     createdAt: "2024-01-10T09:45:00Z"
//   },
//   {
//    _id: "507f1f77bcf86cd799439014",
//     title: "Room in Shared Flat for Working Women",
//     location: "Baffoussam, Dchang",
//     rent: 500,
//     roomType: "Single",
//     lifestyle: "Working women only, clean and organized",
//     contact: "+237 6234567893",
//     availability: "Available",
//     description: "Safe and secure apartment for professional women. All amenities included with 24/7 security.",
//     ownerName: "Rashida Begum",
//     ownerEmail: "rashida@example.com",
//     image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
//     likeCount: 6,
//     featured: false,
//     createdAt: "2024-01-25T16:20:00Z"
//   }
// ];

// // Mock user data
// const mockUser = {
//   displayName: "user",
//   email: "user@example.com"
// };

// const MyLists = () => {
//   // Mock AuthContext - you can replace this with actual context if available
//   const [user] = useState(mockUser);
  
//   const [lists, setLists] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     document.title = "My Lists";

//     // Simulate API call with mock data
//     const fetchLists = async () => {
//       try {
//         // Simulate loading delay
//         await new Promise(resolve => setTimeout(resolve, 1000));
        
//         // Filter lists by user email (simulate server-side filtering)
//         const userLists = mockListsData.filter(list => list.ownerEmail === user?.email);
        
//         setLists(userLists);
//         setLoading(false);
//       } catch (error) {
//         console.error("Failed to fetch lists:", error);
//         setLoading(false);
//       }
//     };

//     if (user?.email) {
//       fetchLists();
//     } else {
//       setLoading(false);
//     }
//   }, [user?.email]);

//   const handleDelete = (_id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "This action cannot be undone!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         // Mock delete operation
//         console.log("Deleting list with ID:", _id);
        
//         // Remove from local state
//         setLists((prev) => prev.filter((list) => list._id !== _id));
        
//         Swal.fire("Deleted!", "Your post has been removed.", "success");
//       }
//     });
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center py-10">
//         <span className="loading loading-bars loading-lg text-primary"></span>
//       </div>
//     );
//   }

//   if (lists.length === 0) {
//     return (
//       <div className="text-center py-10 text-gray-500">
//         <p>You haven't added any listings yet.</p>
//         <button 
//           className="btn btn-primary mt-4"
//           onClick={() => {
//             // Add a sample listing for testing
//             const newListing = {
//               _id: `new_${Date.now()}`,
//               title: "New Sample Listing",
//               location: "Sample Location",
//               rent: 300,
//               roomType: "Single",
//               lifestyle: "Sample lifestyle",
//               contact: "+237 634567899",
//               availability: "Available",
//               description: "This is a sample listing for testing purposes.",
//               ownerEmail: user?.email
//             };
//             setLists([newListing]);
//           }}
//         >
//           Add Sample Listing (for testing)
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="p-4">
//       <div className="mb-4 flex justify-between items-center">
//         <h2 className="text-2xl font-bold">My Listings</h2>
//         <div className="text-sm text-gray-500">
//           Total: {lists.length} listing{lists.length !== 1 ? 's' : ''}
//         </div>
//       </div>
      
//       <div className="overflow-x-auto">
//         <table className="table table-zebra">
//           <thead className="bg-base-200 text-base font-semibold">
//             <tr>
//               <th>Title</th>
//               <th>Location</th>
//               <th>Rent</th>
//               <th>Room Type</th>
//               <th>Availability</th>
//               <th>Update</th>
//               <th>Delete</th>
//             </tr>
//           </thead>
//           <tbody>
//             {lists.map((list) => (
//               <tr key={list._id}>
//                 <td className="font-medium">{list.title}</td>
//                 <td className="text-gray-600">{list.location}</td>
//                 <td className="font-semibold text-green-600">${list.rent}</td>
//                 <td>
//                   <span className={`badge badge-outline ${
//                     list.roomType === 'Single' ? 'badge-primary' : 'badge-accent'
//                   }`}>
//                     {list.roomType}
//                   </span>
//                 </td>
//                 <td>
//                   <span className={`badge ${
//                     list.availability === 'Available' 
//                       ? 'badge-success' 
//                       : 'badge-error'
//                   }`}>
//                     {list.availability}
//                   </span>
//                 </td>
//                 <td>
//                   <Link 
//                     to={`/dashboard/update/${list._id}`} 
//                     className="text-blue-500 hover:text-blue-700 transition-colors"
//                   >
//                     <MdUpdate className="cursor-pointer" size={20} />
//                   </Link>
//                 </td>
//                 <td>
//                   <MdDelete
//                     onClick={() => handleDelete(list._id)}
//                     className="cursor-pointer text-red-500 hover:text-red-700 transition-colors"
//                     size={20}
//                   />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Debug section - remove in production */}
//       {/* <div className="mt-8 p-4 bg-base-300 rounded-lg">
//         <h3 className="font-bold mb-2">Mock Data (for debugging):</h3>
//         <details>
//           <summary className="cursor-pointer font-medium">Click to view all mock data</summary>
//           <pre className="text-sm overflow-auto mt-2 p-2 bg-base-100 rounded">
//             {JSON.stringify(mockListsData, null, 2)}
//           </pre>
//         </details>
//       </div> */}
//     </div>
//   );
// };

// export default MyLists;


// import React, { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../provider/AuthContext";
// import { Link } from "react-router";
// import { MdDelete, MdUpdate } from "react-icons/md";
// import Swal from "sweetalert2";
// import toast from "react-hot-toast";

// // Firebase imports
// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, query, where, getDocs, doc, deleteDoc, orderBy } from "firebase/firestore";

// // Firebase config
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

// const MyLists = () => {
//   const { user } = useContext(AuthContext);
//   const [lists, setLists] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     document.title = "My Lists";

//     const fetchUserLists = async () => {
//       if (!user?.email) {
//         setLoading(false);
//         return;
//       }

//       try {
//         console.log("Fetching lists for user:", user.email);

//         // Query for user's listings
//         const q = query(
//           collection(db, "roommatePosts"),
//           where("ownerEmail", "==", user.email),
//           orderBy("createdAt", "desc")
//         );
        
//         const querySnapshot = await getDocs(q);
//         const userLists = [];
        
//         querySnapshot.forEach((doc) => {
//           const data = doc.data();
//           userLists.push({
//             _id: doc.id,
//             ...data,
//             createdAt: data.createdAt?.toDate?.()?.toISOString() || data.createdAt
//           });
//         });

//         console.log("Found", userLists.length, "listings for user");
//         setLists(userLists);
//         setLoading(false);
        
//       } catch (error) {
//         console.error("Failed to fetch user lists:", error);
//         toast.error("Failed to load your listings");
//         setLoading(false);
//       }
//     };

//     fetchUserLists();
//   }, [user?.email]);

//   const handleDelete = async (_id) => {
//     const result = await Swal.fire({
//       title: "Are you sure?",
//       text: "This action cannot be undone!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     });

//     if (result.isConfirmed) {
//       try {
//         console.log("Deleting listing with ID:", _id);
        
//         // Delete from Firebase
//         await deleteDoc(doc(db, "roommatePosts", _id));
        
//         // Remove from local state
//         setLists((prev) => prev.filter((list) => list._id !== _id));
        
//         Swal.fire("Deleted!", "Your post has been removed.", "success");
        
//       } catch (error) {
//         console.error("Failed to delete listing:", error);
//         toast.error("Failed to delete the listing");
        
//         Swal.fire("Error!", "Failed to delete the post. Please try again.", "error");
//       }
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center py-10">
//         <span className="loading loading-bars loading-lg text-primary"></span>
//       </div>
//     );
//   }

//   if (!user) {
//     return (
//       <div className="text-center py-10 text-gray-500">
//         <p>Please login to view your listings.</p>
//       </div>
//     );
//   }

//   if (lists.length === 0) {
//     return (
//       <div className="text-center py-10 text-gray-500">
//         <div className="max-w-md mx-auto">
//           <h3 className="text-xl font-semibold mb-4">No Listings Yet</h3>
//           <p className="mb-6">You haven't added any roommate listings yet. Start by creating your first post!</p>
//           <Link to="/dashboard/add-lists" className="btn btn-primary">
//             Add Your First Listing
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="p-4">
//       <div className="mb-4 flex justify-between items-center">
//         <h2 className="text-2xl font-bold">My Listings</h2>
//         <div className="text-sm text-gray-500">
//           Total: {lists.length} listing{lists.length !== 1 ? 's' : ''}
//         </div>
//       </div>
      
//       <div className="overflow-x-auto">
//         <table className="table table-zebra">
//           <thead className="bg-base-200 text-base font-semibold">
//             <tr>
//               <th>Title</th>
//               <th>Location</th>
//               <th>Rent</th>
//               <th>Room Type</th>
//               <th>Availability</th>
//               <th>Likes</th>
//               <th>Update</th>
//               <th>Delete</th>
//             </tr>
//           </thead>
//           <tbody>
//             {lists.map((list) => (
//               <tr key={list._id}>
//                 <td className="font-medium">
//                   <Link 
//                     to={`/card-details/${list._id}`} 
//                     className="link link-primary hover:link-secondary"
//                   >
//                     {list.title}
//                   </Link>
//                 </td>
//                 <td className="text-gray-600">{list.location}</td>
//                 <td className="font-semibold text-green-600">FCFA{list.rent}</td>
//                 <td>
//                   <span className={`badge badge-outline ${
//                     list.roomType === 'Single' ? 'badge-primary' : 'badge-accent'
//                   }`}>
//                     {list.roomType}
//                   </span>
//                 </td>
//                 <td>
//                   <span className={`badge ${
//                     list.availability === 'Available' 
//                       ? 'badge-success' 
//                       : 'badge-error'
//                   }`}>
//                     {list.availability}
//                   </span>
//                 </td>
//                 <td>
//                   <span className="text-red-500 font-semibold">
//                     {list.likeCount || 0} ❤️
//                   </span>
//                 </td>
//                 <td>
//                   <Link 
//                     to={`/dashboard/update/${list._id}`} 
//                     className="text-blue-500 hover:text-blue-700 transition-colors"
//                     title="Update this listing"
//                   >
//                     <MdUpdate className="cursor-pointer" size={20} />
//                   </Link>
//                 </td>
//                 <td>
//                   <button
//                     onClick={() => handleDelete(list._id)}
//                     className="text-red-500 hover:text-red-700 transition-colors"
//                     title="Delete this listing"
//                   >
//                     <MdDelete size={20} />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Quick Stats */}
//       <div className="mt-6 stats shadow">
//         <div className="stat">
//           <div className="stat-title">Total Posts</div>
//           <div className="stat-value">{lists.length}</div>
//         </div>
        
//         <div className="stat">
//           <div className="stat-title">Available</div>
//           <div className="stat-value text-success">
//             {lists.filter(list => list.availability === 'Available').length}
//           </div>
//         </div>
        
//         <div className="stat">
//           <div className="stat-title">Total Likes</div>
//           <div className="stat-value text-error">
//             {lists.reduce((sum, list) => sum + (list.likeCount || 0), 0)}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyLists;

import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthContext";
import { Link } from "react-router";
import { MdDelete, MdUpdate } from "react-icons/md";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

// Firebase imports
import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, getDocs, doc, deleteDoc } from "firebase/firestore";

// Firebase config (inline)
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

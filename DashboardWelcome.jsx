// import React, { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../provider/AuthContext";
// import CountUp from "react-countup";
// import { FiList, FiPlusCircle, FiUser } from "react-icons/fi";

// const DashboardWelcome = () => {
//   const { user } = useContext(AuthContext);
//   const [stats, setStats] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//   fetch(`https://roommate-finder-server-xi.vercel.app/dashboard-stats?email=${user?.email}`)
//     .then((res) => res.json())
//     .then((data) => {
//       setStats(data);
//       setLoading(false);
//     })
//     .catch((err) => {
//       console.error("Failed to load dashboard stats:", err);
//       setLoading(false);
//     });
// }, [user?.email]);


//   return (
//     <div className="text-center py-10 px-4">
//       <h2 className="text-2xl md:text-3xl font-bold mb-4">Welcome to your Dashboard</h2>
//       <p className="text-gray-600 mb-10">
//         Hello <span className="font-semibold">{user?.displayName || "User"}</span>, here’s a quick overview.
//       </p>

//       {/* Loading State */}
//       {loading ? (
//         <p className="text-center text-gray-500">Loading stats...</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
//           <div className="bg-base-100 shadow rounded-xl border p-6 text-left">
//             <div className="flex items-center gap-4 mb-2">
//               <FiList className="text-2xl text-accent" />
//               <h3 className="text-lg font-semibold">Total Listings</h3>
//             </div>
//             <p className="text-3xl font-bold text-accent">
//               <CountUp end={stats?.totalListings || 0} duration={2} />+
//             </p>
//           </div>

//           <div className="bg-base-100 shadow rounded-xl border p-6 text-left">
//             <div className="flex items-center gap-4 mb-2">
//               <FiPlusCircle className="text-2xl text-success" />
//               <h3 className="text-lg font-semibold">New This Month</h3>
//             </div>
//             <p className="text-3xl font-bold text-success">
//               <CountUp end={stats?.newThisMonth || 0} duration={2} />+
//             </p>
//           </div>

//           <div className="bg-base-100 shadow rounded-xl border p-6 text-left">
//             <div className="flex items-center gap-4 mb-2">
//               <FiUser className="text-2xl text-primary" />
//               <h3 className="text-lg font-semibold">Profile Completeness</h3>
//             </div>
//             <p className="text-3xl font-bold text-primary">
//               <CountUp end={stats?.profileCompletion || 0} duration={2} />%
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
// export default DashboardWelcome;







// // import React, { useContext, useEffect, useState } from "react";
// // import { AuthContext } from "../provider/AuthContext";
// // import CountUp from "react-countup";
// // import { FiList, FiPlusCircle, FiUser, FiEye, FiHeart, FiMessageSquare } from "react-icons/fi";

// // // Mock user data
// // const mockUser = {
// //   displayName: "user",
// //   email: "user@example.com"
// // };

// // // Mock dashboard stats
// // const mockDashboardStats = {
// //   totalListings: 12,
// //   newThisMonth: 3,
// //   profileCompletion: 85,
// //   totalViews: 145,
// //   totalLikes: 28,
// //   totalMessages: 7
// // };

// // const DashboardWelcome = () => {
// //   // Mock AuthContext - you can replace this with actual context if available
// //   const [user] = useState(mockUser);
  
// //   const [stats, setStats] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     // Simulate API call with mock data
// //     const fetchDashboardStats = async () => {
// //       try {
// //         console.log("Fetching dashboard stats for:", user?.email);
        
// //         // Simulate loading delay
// //         await new Promise(resolve => setTimeout(resolve, 1500));
        
// //         // Set mock stats
// //         setStats(mockDashboardStats);
// //         setLoading(false);
        
// //       } catch (err) {
// //         console.error("Failed to load dashboard stats:", err);
// //         setLoading(false);
// //       }
// //     };

// //     if (user?.email) {
// //       fetchDashboardStats();
// //     } else {
// //       setLoading(false);
// //     }
// //   }, [user?.email]);

// //   const updateStat = (statKey, newValue) => {
// //     setStats(prevStats => ({
// //       ...prevStats,
// //       [statKey]: newValue
// //     }));
// //   };

// //   return (
// //     <div className="text-center py-10 px-4">
// //       <div className="mb-8">
// //         <h2 className="text-2xl md:text-3xl font-bold mb-4">
// //           Welcome to your Dashboard 👋
// //         </h2>
// //         <p className="text-gray-600 mb-2">
// //           Hello <span className="font-semibold text-primary">{user?.displayName || "User"}</span>, here's a quick overview of your activity.
// //         </p>
// //         <div className="text-sm text-gray-500">
// //           Last updated: {new Date().toLocaleString()}
// //         </div>
// //       </div>

// //       {/* Loading State */}
// //       {loading ? (
// //         <div className="flex flex-col items-center justify-center py-10">
// //           <div className="loading loading-spinner loading-lg text-primary mb-4"></div>
// //           <p className="text-center text-gray-500">Loading your dashboard stats...</p>
// //         </div>
// //       ) : (
// //         <>
// //           {/* Main Stats Grid */}
// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
// //             <div className="bg-base-100 shadow-lg rounded-xl border p-6 text-left hover:shadow-xl transition-shadow">
// //               <div className="flex items-center gap-4 mb-3">
// //                 <div className="bg-accent/10 p-3 rounded-full">
// //                   <FiList className="text-2xl text-accent" />
// //                 </div>
// //                 <h3 className="text-lg font-semibold">Total Listings</h3>
// //               </div>
// //               <p className="text-3xl font-bold text-accent mb-2">
// //                 <CountUp end={stats?.totalListings || 0} duration={2} />
// //               </p>
// //               <p className="text-sm text-gray-500">All time posts</p>
// //             </div>

// //             <div className="bg-base-100 shadow-lg rounded-xl border p-6 text-left hover:shadow-xl transition-shadow">
// //               <div className="flex items-center gap-4 mb-3">
// //                 <div className="bg-success/10 p-3 rounded-full">
// //                   <FiPlusCircle className="text-2xl text-success" />
// //                 </div>
// //                 <h3 className="text-lg font-semibold">New This Month</h3>
// //               </div>
// //               <p className="text-3xl font-bold text-success mb-2">
// //                 <CountUp end={stats?.newThisMonth || 0} duration={2} />
// //               </p>
// //               <p className="text-sm text-gray-500">Recent additions</p>
// //             </div>

// //             <div className="bg-base-100 shadow-lg rounded-xl border p-6 text-left hover:shadow-xl transition-shadow">
// //               <div className="flex items-center gap-4 mb-3">
// //                 <div className="bg-primary/10 p-3 rounded-full">
// //                   <FiUser className="text-2xl text-primary" />
// //                 </div>
// //                 <h3 className="text-lg font-semibold">Profile Completeness</h3>
// //               </div>
// //               <p className="text-3xl font-bold text-primary mb-2">
// //                 <CountUp end={stats?.profileCompletion || 0} duration={2} />%
// //               </p>
// //               <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
// //                 <div 
// //                   className="bg-primary h-2 rounded-full transition-all duration-1000" 
// //                   style={{width: `${stats?.profileCompletion || 0}%`}}
// //                 ></div>
// //               </div>
// //               <p className="text-sm text-gray-500">Profile strength</p>
// //             </div>
// //           </div>

// //           {/* Secondary Stats Grid */}
// //           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
// //             <div className="bg-base-100 shadow-lg rounded-xl border p-6 text-center hover:shadow-xl transition-shadow">
// //               <div className="bg-info/10 p-3 rounded-full w-fit mx-auto mb-3">
// //                 <FiEye className="text-2xl text-info" />
// //               </div>
// //               <p className="text-2xl font-bold text-info mb-1">
// //                 <CountUp end={stats?.totalViews || 0} duration={2} />
// //               </p>
// //               <p className="text-sm font-medium text-gray-600">Total Views</p>
// //             </div>

// //             <div className="bg-base-100 shadow-lg rounded-xl border p-6 text-center hover:shadow-xl transition-shadow">
// //               <div className="bg-error/10 p-3 rounded-full w-fit mx-auto mb-3">
// //                 <FiHeart className="text-2xl text-error" />
// //               </div>
// //               <p className="text-2xl font-bold text-error mb-1">
// //                 <CountUp end={stats?.totalLikes || 0} duration={2} />
// //               </p>
// //               <p className="text-sm font-medium text-gray-600">Total Likes</p>
// //             </div>

// //             <div className="bg-base-100 shadow-lg rounded-xl border p-6 text-center hover:shadow-xl transition-shadow">
// //               <div className="bg-warning/10 p-3 rounded-full w-fit mx-auto mb-3">
// //                 <FiMessageSquare className="text-2xl text-warning" />
// //               </div>
// //               <p className="text-2xl font-bold text-warning mb-1">
// //                 <CountUp end={stats?.totalMessages || 0} duration={2} />
// //               </p>
// //               <p className="text-sm font-medium text-gray-600">Messages</p>
// //             </div>
// //           </div>

// //           {/* Quick Actions */}
// //           <div className="mt-8 bg-base-100 shadow-lg rounded-xl border p-6 max-w-2xl mx-auto">
// //             <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
// //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //               <button className="btn btn-primary btn-outline">
// //                 <FiPlusCircle className="mr-2" />
// //                 Add New Listing
// //               </button>
// //               <button className="btn btn-secondary btn-outline">
// //                 <FiUser className="mr-2" />
// //                 Complete Profile
// //               </button>
// //             </div>
// //           </div>
// //         </>
// //       )}

// //       {/* Debug section - remove in production */}
// //       <div className="mt-8 max-w-6xl mx-auto p-4 bg-base-300 rounded-lg">
// //         <h3 className="font-bold mb-4">Dashboard Controls (for testing):</h3>
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
// //           <div className="space-y-2">
// //             <strong>Listings:</strong>
// //             <div className="flex gap-2">
// //               <button 
// //                 className="btn btn-xs btn-outline"
// //                 onClick={() => updateStat('totalListings', (stats?.totalListings || 0) + 1)}
// //               >
// //                 +1 Total
// //               </button>
// //               <button 
// //                 className="btn btn-xs btn-outline"
// //                 onClick={() => updateStat('newThisMonth', (stats?.newThisMonth || 0) + 1)}
// //               >
// //                 +1 New
// //               </button>
// //             </div>
// //           </div>
          
// //           <div className="space-y-2">
// //             <strong>Engagement:</strong>
// //             <div className="flex gap-2">
// //               <button 
// //                 className="btn btn-xs btn-outline"
// //                 onClick={() => updateStat('totalViews', (stats?.totalViews || 0) + 10)}
// //               >
// //                 +10 Views
// //               </button>
// //               <button 
// //                 className="btn btn-xs btn-outline"
// //                 onClick={() => updateStat('totalLikes', (stats?.totalLikes || 0) + 1)}
// //               >
// //                 +1 Like
// //               </button>
// //             </div>
// //           </div>

// //           <div className="space-y-2">
// //             <strong>Profile:</strong>
// //             <div className="flex gap-2">
// //               <button 
// //                 className="btn btn-xs btn-outline"
// //                 onClick={() => updateStat('profileCompletion', Math.min(100, (stats?.profileCompletion || 0) + 5))}
// //               >
// //                 +5% Complete
// //               </button>
// //               <button 
// //                 className="btn btn-xs btn-outline"
// //                 onClick={() => setLoading(true)}
// //               >
// //                 Reload Stats
// //               </button>
// //             </div>
// //           </div>
// //         </div>

// //         <details className="mt-4">
// //           <summary className="cursor-pointer font-medium">View Current Stats Data</summary>
// //           <pre className="text-xs overflow-auto mt-2 p-2 bg-base-100 rounded">
// //             {JSON.stringify(stats, null, 2)}
// //           </pre>
// //         </details>
// //       </div>
// //     </div>
// //   );
// // };

// // export default DashboardWelcome;


// import React, { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../provider/AuthContext";
// import CountUp from "react-countup";
// import { FiList, FiPlusCircle, FiUser } from "react-icons/fi";

// // Firebase imports
// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, query, where, getDocs, orderBy, limit } from "firebase/firestore";

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

// const DashboardWelcome = () => {
//   const { user } = useContext(AuthContext);
//   const [stats, setStats] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchDashboardStats = async () => {
//       if (!user?.email) {
//         setLoading(false);
//         return;
//       }

//       try {
//         console.log("Fetching dashboard stats for:", user.email);

//         // Get total listings by user
//         const userListingsQuery = query(
//           collection(db, "roommatePosts"),
//           where("ownerEmail", "==", user.email)
//         );
//         const userListingsSnapshot = await getDocs(userListingsQuery);
//         const totalListings = userListingsSnapshot.size;

//         // Get listings from this month
//         const currentDate = new Date();
//         const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        
//         const thisMonthQuery = query(
//           collection(db, "roommatePosts"),
//           where("ownerEmail", "==", user.email),
//           where("createdAt", ">=", firstDayOfMonth)
//         );
//         const thisMonthSnapshot = await getDocs(thisMonthQuery);
//         const newThisMonth = thisMonthSnapshot.size;

//         // Calculate profile completeness (basic calculation)
//         let profileCompletion = 20; // Base score for having an account
//         if (user.displayName) profileCompletion += 30;
//         if (user.email) profileCompletion += 20;
//         if (totalListings > 0) profileCompletion += 30;

//         const dashboardStats = {
//           totalListings,
//           newThisMonth,
//           profileCompletion: Math.min(profileCompletion, 100)
//         };

//         setStats(dashboardStats);
//         setLoading(false);

//       } catch (error) {
//         console.error("Failed to load dashboard stats:", error);
//         // Set default stats on error
//         setStats({
//           totalListings: 0,
//           newThisMonth: 0,
//           profileCompletion: 50
//         });
//         setLoading(false);
//       }
//     };

//     fetchDashboardStats();
//   }, [user?.email]);

//   return (
//     <div className="text-center py-10 px-4">
//       <h2 className="text-2xl md:text-3xl font-bold mb-4">Welcome to your Dashboard</h2>
//       <p className="text-gray-600 mb-10">
//         Hello <span className="font-semibold">{user?.displayName || "User"}</span>, here's a quick overview.
//       </p>

//       {/* Loading State */}
//       {loading ? (
//         <div className="flex flex-col items-center justify-center py-10">
//           <div className="loading loading-spinner loading-lg text-primary mb-4"></div>
//           <p className="text-center text-gray-500">Loading your dashboard stats...</p>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
//           <div className="bg-base-100 shadow rounded-xl border p-6 text-left">
//             <div className="flex items-center gap-4 mb-2">
//               <FiList className="text-2xl text-accent" />
//               <h3 className="text-lg font-semibold">Total Listings</h3>
//             </div>
//             <p className="text-3xl font-bold text-accent">
//               <CountUp end={stats?.totalListings || 0} duration={2} />
//             </p>
//             <p className="text-sm text-gray-500 mt-1">All time posts</p>
//           </div>

//           <div className="bg-base-100 shadow rounded-xl border p-6 text-left">
//             <div className="flex items-center gap-4 mb-2">
//               <FiPlusCircle className="text-2xl text-success" />
//               <h3 className="text-lg font-semibold">New This Month</h3>
//             </div>
//             <p className="text-3xl font-bold text-success">
//               <CountUp end={stats?.newThisMonth || 0} duration={2} />
//             </p>
//             <p className="text-sm text-gray-500 mt-1">Recent additions</p>
//           </div>

//           <div className="bg-base-100 shadow rounded-xl border p-6 text-left">
//             <div className="flex items-center gap-4 mb-2">
//               <FiUser className="text-2xl text-primary" />
//               <h3 className="text-lg font-semibold">Profile Completeness</h3>
//             </div>
//             <p className="text-3xl font-bold text-primary">
//               <CountUp end={stats?.profileCompletion || 0} duration={2} />%
//             </p>
//             <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
//               <div 
//                 className="bg-primary h-2 rounded-full transition-all duration-1000" 
//                 style={{width: `${stats?.profileCompletion || 0}%`}}
//               ></div>
//             </div>
//             <p className="text-sm text-gray-500 mt-1">Profile strength</p>
//           </div>
//         </div>
//       )}

//       {/* Quick Actions */}
//       <div className="mt-8 bg-base-100 shadow-lg rounded-xl border p-6 max-w-2xl mx-auto">
//         <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <button 
//             className="btn btn-primary btn-outline"
//             onClick={() => window.location.href = '/dashboard/add-lists'}
//           >
//             <FiPlusCircle className="mr-2" />
//             Add New Listing
//           </button>
//           <button 
//             className="btn btn-secondary btn-outline"
//             onClick={() => window.location.href = '/dashboard/my-lists'}
//           >
//             <FiUser className="mr-2" />
//             View My Listings
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardWelcome;


// import React, { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../provider/AuthContext";
// import CountUp from "react-countup";
// import { FiList, FiPlusCircle, FiUser } from "react-icons/fi";

// // Firebase imports
// import { initializeApp, getApps, getApp } from "firebase/app";
// import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

// // Firebase config
// const firebaseConfig = {
//   apiKey: "AIzaSyDG5WFfAfuD_EjHMxxVprtJ6Dz6dvqYMyw",
//   authDomain: "house-48b55.firebaseapp.com",
//   projectId: "house-48b55",
//   storageBucket: "house-48b55.firebasestorage.app",
//   messagingSenderId: "118580147922",
//   appId: "1:118580147922:web:67e1c94fb1522d8529df0b",
//   measurementId: "G-N4RTS3JG64",
// };

// // ✅ Prevent duplicate initialization
// const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
// const db = getFirestore(app);

// const DashboardWelcome = () => {
//   const { user } = useContext(AuthContext);
//   const [stats, setStats] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchDashboardStats = async () => {
//       if (!user?.email) {
//         setLoading(false);
//         return;
//       }

//       try {
//         console.log("Fetching dashboard stats for:", user.email);

//         // Total listings by this user
//         const userListingsQuery = query(
//           collection(db, "roommatePosts"),
//           where("ownerEmail", "==", user.email)
//         );
//         const userListingsSnapshot = await getDocs(userListingsQuery);
//         const totalListings = userListingsSnapshot.size;

//         // Listings created this month
//         const currentDate = new Date();
//         const firstDayOfMonth = new Date(
//           currentDate.getFullYear(),
//           currentDate.getMonth(),
//           1
//         );

//         const thisMonthQuery = query(
//           collection(db, "roommatePosts"),
//           where("ownerEmail", "==", user.email),
//           where("createdAt", ">=", firstDayOfMonth)
//         );
//         const thisMonthSnapshot = await getDocs(thisMonthQuery);
//         const newThisMonth = thisMonthSnapshot.size;

//         // Simple profile completeness
//         let profileCompletion = 20; // base
//         if (user.displayName) profileCompletion += 30;
//         if (user.email) profileCompletion += 20;
//         if (totalListings > 0) profileCompletion += 30;

//         setStats({
//           totalListings,
//           newThisMonth,
//           profileCompletion: Math.min(profileCompletion, 100),
//         });
//         setLoading(false);
//       } catch (error) {
//         console.error("Failed to load dashboard stats:", error);
//         setStats({
//           totalListings: 0,
//           newThisMonth: 0,
//           profileCompletion: 50,
//         });
//         setLoading(false);
//       }
//     };

//     fetchDashboardStats();
//   }, [user?.email]);

//   return (
//     <div className="text-center py-10 px-4">
//       <h2 className="text-2xl md:text-3xl font-bold mb-4">
//         Welcome to your Dashboard
//       </h2>
//       <p className="text-gray-600 mb-10">
//         Hello{" "}
//         <span className="font-semibold">
//           {user?.displayName || "User"}
//         </span>
//         , here's a quick overview.
//       </p>

//       {/* Loading */}
//       {loading ? (
//         <div className="flex flex-col items-center justify-center py-10">
//           <div className="loading loading-spinner loading-lg text-primary mb-4"></div>
//           <p className="text-center text-gray-500">
//             Loading your dashboard stats...
//           </p>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
//           {/* Total Listings */}
//           <div className="bg-base-100 shadow rounded-xl border p-6 text-left">
//             <div className="flex items-center gap-4 mb-2">
//               <FiList className="text-2xl text-accent" />
//               <h3 className="text-lg font-semibold">Total Listings</h3>
//             </div>
//             <p className="text-3xl font-bold text-accent">
//               <CountUp end={stats?.totalListings || 0} duration={2} />
//             </p>
//             <p className="text-sm text-gray-500 mt-1">All time posts</p>
//           </div>

//           {/* New This Month */}
//           <div className="bg-base-100 shadow rounded-xl border p-6 text-left">
//             <div className="flex items-center gap-4 mb-2">
//               <FiPlusCircle className="text-2xl text-success" />
//               <h3 className="text-lg font-semibold">New This Month</h3>
//             </div>
//             <p className="text-3xl font-bold text-success">
//               <CountUp end={stats?.newThisMonth || 0} duration={2} />
//             </p>
//             <p className="text-sm text-gray-500 mt-1">Recent additions</p>
//           </div>

//           {/* Profile Completeness */}
//           <div className="bg-base-100 shadow rounded-xl border p-6 text-left">
//             <div className="flex items-center gap-4 mb-2">
//               <FiUser className="text-2xl text-primary" />
//               <h3 className="text-lg font-semibold">Profile Completeness</h3>
//             </div>
//             <p className="text-3xl font-bold text-primary">
//               <CountUp end={stats?.profileCompletion || 0} duration={2} />%
//             </p>
//             <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
//               <div
//                 className="bg-primary h-2 rounded-full transition-all duration-1000"
//                 style={{ width: `${stats?.profileCompletion || 0}%` }}
//               ></div>
//             </div>
//             <p className="text-sm text-gray-500 mt-1">Profile strength</p>
//           </div>
//         </div>
//       )}

//       {/* Quick Actions */}
//       <div className="mt-8 bg-base-100 shadow-lg rounded-xl border p-6 max-w-2xl mx-auto">
//         <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <button
//             className="btn btn-primary btn-outline"
//             onClick={() => (window.location.href = "/dashboard/add-lists")}
//           >
//             <FiPlusCircle className="mr-2" />
//             Add New Listing
//           </button>
//           <button
//             className="btn btn-secondary btn-outline"
//             onClick={() => (window.location.href = "/dashboard/my-lists")}
//           >
//             <FiUser className="mr-2" />
//             View My Listings
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardWelcome;


// import React, { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../provider/AuthContext";
// import CountUp from "react-countup";
// import { FiList, FiPlusCircle } from "react-icons/fi";

// // Firebase imports
// import { initializeApp, getApps, getApp } from "firebase/app";
// import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

// // Firebase config
// const firebaseConfig = {
//   apiKey: "AIzaSyDG5WFfAfuD_EjHMxxVprtJ6Dz6dvqYMyw",
//   authDomain: "house-48b55.firebaseapp.com",
//   projectId: "house-48b55",
//   storageBucket: "house-48b55.firebasestorage.app",
//   messagingSenderId: "118580147922",
//   appId: "1:118580147922:web:67e1c94fb1522d8529df0b",
//   measurementId: "G-N4RTS3JG64",
// };

// // ✅ Prevent duplicate initialization
// const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
// const db = getFirestore(app);

// const DashboardWelcome = () => {
//   const { user } = useContext(AuthContext);
//   const [stats, setStats] = useState({ totalListings: 0, newThisMonth: 0 });
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchDashboardStats = async () => {
//       if (!user?.email) {
//         setLoading(false);
//         return;
//       }

//       try {
//         console.log("Fetching dashboard stats for:", user.email);

//         // 🔹 Get total listings by this user
//         const userListingsQuery = query(
//           collection(db, "roommatePosts"),
//           where("ownerEmail", "==", user.email)
//         );
//         const userListingsSnapshot = await getDocs(userListingsQuery);
//         const totalListings = userListingsSnapshot.size;

//         // 🔹 Get listings created this month
//         const currentDate = new Date();
//         const firstDayOfMonth = new Date(
//           currentDate.getFullYear(),
//           currentDate.getMonth(),
//           1
//         );

//         const thisMonthQuery = query(
//           collection(db, "roommatePosts"),
//           where("ownerEmail", "==", user.email),
//           where("createdAt", ">=", firstDayOfMonth) // make sure createdAt is a Firestore Timestamp
//         );
//         const thisMonthSnapshot = await getDocs(thisMonthQuery);
//         const newThisMonth = thisMonthSnapshot.size;

//         setStats({ totalListings, newThisMonth });
//       } catch (error) {
//         console.error("Failed to load dashboard stats:", error);
//         setStats({ totalListings: 0, newThisMonth: 0 });
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDashboardStats();
//   }, [user?.email]);

//   return (
//     <div className="text-center py-10 px-4">
//       <h2 className="text-2xl md:text-3xl font-bold mb-4">
//         Welcome to your Dashboard
//       </h2>
//       <p className="text-gray-600 mb-10">
//         Hello{" "}
//         <span className="font-semibold">
//           {user?.displayName || "User"}
//         </span>
//         , here's a quick overview.
//       </p>

//       {/* Loading */}
//       {loading ? (
//         <div className="flex flex-col items-center justify-center py-10">
//           <div className="loading loading-spinner loading-lg text-primary mb-4"></div>
//           <p className="text-center text-gray-500">
//             Loading your dashboard stats...
//           </p>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
//           {/* Total Listings */}
//           <div className="bg-base-100 shadow rounded-xl border p-6 text-left">
//             <div className="flex items-center gap-4 mb-2">
//               <FiList className="text-2xl text-accent" />
//               <h3 className="text-lg font-semibold">Total Listings</h3>
//             </div>
//             <p className="text-3xl font-bold text-accent">
//               <CountUp end={stats.totalListings} duration={2} />
//             </p>
//             <p className="text-sm text-gray-500 mt-1">All time posts</p>
//           </div>

//           {/* New This Month */}
//           <div className="bg-base-100 shadow rounded-xl border p-6 text-left">
//             <div className="flex items-center gap-4 mb-2">
//               <FiPlusCircle className="text-2xl text-success" />
//               <h3 className="text-lg font-semibold">New This Month</h3>
//             </div>
//             <p className="text-3xl font-bold text-success">
//               <CountUp end={stats.newThisMonth} duration={2} />
//             </p>
//             <p className="text-sm text-gray-500 mt-1">Recent additions</p>
//           </div>
//         </div>
//       )}

//       {/* Quick Actions */}
//       <div className="mt-8 bg-base-100 shadow-lg rounded-xl border p-6 max-w-2xl mx-auto">
//         <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <button
//             className="btn btn-primary btn-outline"
//             onClick={() => (window.location.href = "/dashboard/add-lists")}
//           >
//             <FiPlusCircle className="mr-2" />
//             Add New Listing
//           </button>
//           <button
//             className="btn btn-secondary btn-outline"
//             onClick={() => (window.location.href = "/dashboard/my-lists")}
//           >
//             <FiList className="mr-2" />
//             View My Listings
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardWelcome;


// src/pages/DashboardWelcome.jsx
// import React, { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../provider/AuthContext";
// import CountUp from "react-countup";
// import { FiList, FiPlusCircle } from "react-icons/fi";

// // Firebase imports (initialize safely even if file re-runs)
// import { initializeApp, getApps, getApp } from "firebase/app";
// import {
//   getFirestore,
//   collection,
//   query,
//   where,
//   getDocs,
//   Timestamp,
// } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyDG5WFfAfuD_EjHMxxVprtJ6Dz6dvqYMyw",
//   authDomain: "house-48b55.firebaseapp.com",
//   projectId: "house-48b55",
//   storageBucket: "house-48b55.appspot.com", // ensure .appspot.com if you change
//   messagingSenderId: "118580147922",
//   appId: "1:118580147922:web:67e1c94fb1522d8529df0b",
//   measurementId: "G-N4RTS3JG64",
// };

// // safe init (prevents 'already exists' errors)
// const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
// const db = getFirestore(app);

// const DashboardWelcome = () => {
//   const { user } = useContext(AuthContext);
//   const [stats, setStats] = useState({ totalListings: 0, newThisMonth: 0 });
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchDashboardStats = async () => {
//       if (!user?.email) {
//         setLoading(false);
//         return;
//       }

//       const userEmail = user.email;
//       const now = new Date();
//       const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

//       // helper to safely convert Firestore timestamp or string to JS Date
//       const toDate = (val) => {
//         if (!val) return null;
//         if (typeof val.toDate === "function") return val.toDate(); // Firestore Timestamp
//         const d = new Date(val);
//         return isNaN(d.getTime()) ? null : d;
//       };

//       try {
//         // Try querying by ownerEmail first (preferred)
//         console.debug("Running ownerEmail query for:", userEmail);
//         const qOwnerAll = query(collection(db, "roommatePosts"), where("ownerEmail", "==", userEmail));
//         const snapOwnerAll = await getDocs(qOwnerAll);
//         let totalListings = snapOwnerAll.size;
//         let newThisMonth = 0;

//         console.debug("ownerEmail total result:", totalListings);

//         // Try server-side range query for this month (fast) using Timestamp
//         try {
//           const qOwnerMonth = query(
//             collection(db, "roommatePosts"),
//             where("ownerEmail", "==", userEmail),
//             where("createdAt", ">=", Timestamp.fromDate(firstDayOfMonth))
//           );
//           const snapOwnerMonth = await getDocs(qOwnerMonth);
//           newThisMonth = snapOwnerMonth.size;
//           console.debug("ownerEmail newThisMonth (range) =>", newThisMonth);
//         } catch (rangeErr) {
//           // fallback: filter client-side if createdAt isn't a Timestamp or composite index required
//           console.warn("Range query failed (ownerEmail). Falling back to client-side filter:", rangeErr);
//           newThisMonth = snapOwnerAll.docs.filter(d => {
//             const dt = toDate(d.data().createdAt);
//             return dt && dt >= firstDayOfMonth;
//           }).length;
//           console.debug("ownerEmail newThisMonth (client filter) =>", newThisMonth);
//         }

//         // If no results for ownerEmail, try the older 'email' field
//         if (totalListings === 0) {
//           console.debug("No ownerEmail matches; trying 'email' field.");
//           const qEmailAll = query(collection(db, "roommatePosts"), where("email", "==", userEmail));
//           const snapEmailAll = await getDocs(qEmailAll);
//           totalListings = snapEmailAll.size;
//           console.debug("'email' total result:", totalListings);

//           try {
//             const qEmailMonth = query(
//               collection(db, "roommatePosts"),
//               where("email", "==", userEmail),
//               where("createdAt", ">=", Timestamp.fromDate(firstDayOfMonth))
//             );
//             const snapEmailMonth = await getDocs(qEmailMonth);
//             newThisMonth = snapEmailMonth.size;
//             console.debug("'email' newThisMonth (range) =>", newThisMonth);
//           } catch (rangeErr2) {
//             console.warn("Range query failed (email). Falling back to client-side filter:", rangeErr2);
//             newThisMonth = snapEmailAll.docs.filter(d => {
//               const dt = toDate(d.data().createdAt);
//               return dt && dt >= firstDayOfMonth;
//             }).length;
//             console.debug("'email' newThisMonth (client filter) =>", newThisMonth);
//           }
//         }

//         setStats({ totalListings, newThisMonth });
//       } catch (err) {
//         console.error("Error fetching dashboard stats:", err);
//         setStats({ totalListings: 0, newThisMonth: 0 });
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDashboardStats();
//   }, [user?.email]);

//   return (
//     <div className="text-center py-10 px-4">
//       <h2 className="text-2xl md:text-3xl font-bold mb-4">Welcome to your Dashboard</h2>
//       <p className="text-gray-600 mb-10">Hello <span className="font-semibold">{user?.displayName || "User"}</span>, here's a quick overview.</p>

//       {loading ? (
//         <div className="flex flex-col items-center justify-center py-10">
//           <div className="loading loading-spinner loading-lg text-primary mb-4"></div>
//           <p className="text-center text-gray-500">Loading your dashboard stats...</p>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
//           <div className="bg-base-100 shadow rounded-xl border p-6 text-left">
//             <div className="flex items-center gap-4 mb-2">
//               <FiList className="text-2xl text-accent" />
//               <h3 className="text-lg font-semibold">Total Listings</h3>
//             </div>
//             <p className="text-3xl font-bold text-accent"><CountUp end={stats.totalListings || 0} duration={1.2} /></p>
//             <p className="text-sm text-gray-500 mt-1">All time posts</p>
//           </div>

//           <div className="bg-base-100 shadow rounded-xl border p-6 text-left">
//             <div className="flex items-center gap-4 mb-2">
//               <FiPlusCircle className="text-2xl text-success" />
//               <h3 className="text-lg font-semibold">New This Month</h3>
//             </div>
//             <p className="text-3xl font-bold text-success"><CountUp end={stats.newThisMonth || 0} duration={1.2} /></p>
//             <p className="text-sm text-gray-500 mt-1">Recent additions</p>
//           </div>
//         </div>
//       )}

//       <div className="mt-8 bg-base-100 shadow-lg rounded-xl border p-6 max-w-2xl mx-auto">
//         <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <button className="btn btn-primary btn-outline" onClick={() => (window.location.href = "/dashboard/add-lists")}>
//             <FiPlusCircle className="mr-2" /> Add New Listing
//           </button>
//           <button className="btn btn-secondary btn-outline" onClick={() => (window.location.href = "/dashboard/my-lists")}>
//             View My Listings
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardWelcome;

import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthContext";
import CountUp from "react-countup";
import { FiList, FiPlusCircle } from "react-icons/fi";

// Firebase imports
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

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

      {/* Loading State */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-10">
          <div className="loading loading-spinner loading-lg text-primary mb-4"></div>
          <p className="text-center text-gray-500">Loading your dashboard stats...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Total Listings */}
          <div className="bg-base-100 shadow rounded-xl border p-6 text-left">
            <div className="flex items-center gap-4 mb-2">
              <FiList className="text-2xl text-accent" />
              <h3 className="text-lg font-semibold">Total Listings</h3>
            </div>
            <p className="text-3xl font-bold text-accent">
              <CountUp end={stats.totalListings} duration={2} />
            </p>
            <p className="text-sm text-gray-500 mt-1">All posts</p>
          </div>

          {/* New This Month */}
          <div className="bg-base-100 shadow rounded-xl border p-6 text-left">
            <div className="flex items-center gap-4 mb-2">
              <FiPlusCircle className="text-2xl text-success" />
              <h3 className="text-lg font-semibold">New This Month</h3>
            </div>
            <p className="text-3xl font-bold text-success">
              <CountUp end={stats.newThisMonth} duration={2} />
            </p>
            <p className="text-sm text-gray-500 mt-1">Recent additions</p>
          </div>
        </div>
      )}

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

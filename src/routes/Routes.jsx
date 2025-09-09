// // import { createBrowserRouter } from "react-router";
// // import MainLayout from "../layouts/MainLayout";
// // import Home from "../pages/Home";
// // import Register from "../pages/Register";
// // import NotFound from "../pages/NotFound";
// // import Login from "../pages/Login";
// // import BrowseLists from "../pages/BrowseLists";
// // import CardDetails from "../pages/CardDetails";
// // import ContactUs from "../pages/ContactUs";
// // // import Blog from "../pages/Blog"; // Assuming you created Blog page
// // import MyLists from "../pages/MyLists";
// // import AddLists from "../pages/AddLists";
// // import PrivateRoute from "./PrivateRoute";
// // import DashboardLayout from "../layouts/DashboardLayout";
// // import DashboardWelcome from "../pages/DashboardWelcome";
// // import UpdateList from "../pages/UpdateList";
// // import AboutUs from "../pages/About";

// // const router = createBrowserRouter([
// //   {
// //     path: "/",
// //     element: <MainLayout />, 
// //     errorElement: <NotFound />,
// //     children: [
// //       {
// //         index: true,
// //         loader: () =>
// //           fetch("https://roommate-finder-server-xi.vercel.app/lists/feature"),
// //         element: <Home />,
// //       },
// //       {
// //         path: "/browse-lists",
// //         loader: () =>
// //           fetch("https://roommate-finder-server-xi.vercel.app/lists"),
// //         element: <BrowseLists />,
// //       },
// //       {
// //         path: "/card-details/:id",
// //         loader: ({ params }) =>
// //           fetch(`https://roommate-finder-server-xi.vercel.app/lists/${params.id}`),
// //         element: <CardDetails />,
// //       },
// //       { path: "/contact", element: <ContactUs /> },
// //       { path: "/about", element: <AboutUs /> },
// //       { path: "/login", element: <Login /> },
// //       { path: "/register", element: <Register /> },
// //     ],
// //   },

// //   // Dashboard routes (Private)
// //   {
// //     path: "/dashboard",
// //     element: (
// //       <PrivateRoute>
// //         <DashboardLayout />
// //       </PrivateRoute>
// //     ),
// //     errorElement: <NotFound />,
// //     children: [
// //       {
// //         index: true,
// //         element: <DashboardWelcome/>
// //       },
// //       {
// //         path: "add-lists",
// //         element: <AddLists />,
// //       },
// //       {
// //         path: "my-lists",
// //         element: <MyLists />,
// //       },
// //       {
// //         path: "update/:id",
// //         loader: ({ params }) =>
// //           fetch(`https://roommate-finder-server-xi.vercel.app/lists/${params.id}`),
// //         element: <UpdateList />,
// //       },
// //     ],
// //   },
// // ]);

// // export default router;




// import { createBrowserRouter } from "react-router";
// import MainLayout from "../layouts/MainLayout";
// import Home from "../pages/Home";
// import Register from "../pages/Register";
// import NotFound from "../pages/NotFound";
// import Login from "../pages/Login";
// import BrowseLists from "../pages/BrowseLists";
// import CardDetails from "../pages/CardDetails";
// import ContactUs from "../pages/ContactUs";
// // import Blog from "../pages/Blog"; // Assuming you created Blog page
// import MyLists from "../pages/MyLists";
// import AddLists from "../pages/AddLists";
// import PrivateRoute from "./PrivateRoute";
// import DashboardLayout from "../layouts/DashboardLayout";
// import DashboardWelcome from "../pages/DashboardWelcome";
// import UpdateList from "../pages/UpdateList";
// import AboutUs from "../pages/About";

// // Mock data for all listings
// const mockListings = [
//   {
//     _id: "507f1f77bcf86cd799439011",
//     title: "Spacious Room Near public Station",
//     location: "Yaounde, Bastos",
//     rent: 400,
//     roomType: "Shared",
//     lifestyle: "Non-smoker, prefers early riser, vegetarian-friendly",
//     contact: "+237 634567890",
//     availability: "Available",
//     description: "Looking for a clean and friendly female roommate to share a 2-bedroom apartment near Dhanmondi Lake. Fully furnished, Wi-Fi, and 24/7 security.",
//     ownerName: "Sarah Ahmed",
//     ownerEmail: "sarah@example.com",
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
//     _id: "507f1f77bcf86cd799439014",
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
//   },
//   {
//     _id: "507f1f77bcf86cd799439015",
//     title: "Cozy Studio Apartment in Buea",
//     location: "Buea, Kumba",
//     rent: 800,
//     roomType: "Single",
//     lifestyle: "Professional, no smoking, pet-friendly",
//     contact: "+237 612345894",
//     availability: "Available",
//     description: "Modern studio apartment with all amenities. Perfect for young professionals. Gym and rooftop access included.",
//     ownerName: "Karim Rahman",
//     ownerEmail: "karim@example.com",
//     image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
//     likeCount: 22,
//     featured: true,
//     createdAt: "2024-01-05T11:10:00Z"
//   },
//   {
//     _id: "507f1f77bcf86cd799439016",
//     title: "Budget-Friendly Room in Uttara",
//     location: "Yaounde, Messasi",
//     rent: 300,
//     roomType: "Shared",
//     lifestyle: "Student-friendly, flexible timing",
//     contact: "+237 6234567895",
//     availability: "Available",
//     description: "Affordable shared accommodation for students. Close to universities and public transport. Friendly roommates.",
//     ownerName: "Nasir bachirou",
//     ownerEmail: "nasir@example.com",
//     image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
//     likeCount: 4,
//     featured: false,
//     createdAt: "2024-02-01T13:30:00Z"
//   }
// ];

// // Mock loader functions
// const mockLoaders = {
//   // Loader for featured listings (Home page)
//   featuredListings: async () => {
//     console.log("Loading featured listings...");
//     // Simulate API delay
//     await new Promise(resolve => setTimeout(resolve, 800));
    
//     // Return only featured listings
//     const featuredListings = mockListings.filter(listing => listing.featured);
//     console.log("Featured listings loaded:", featuredListings.length);
//     return featuredListings;
//   },

//   // Loader for all listings (Browse page)
//   allListings: async () => {
//     console.log("Loading all listings...");
//     // Simulate API delay
//     await new Promise(resolve => setTimeout(resolve, 1000));
    
//     console.log("All listings loaded:", mockListings.length);
//     return mockListings;
//   },

//   // Loader for single listing details
//   singleListing: async ({ params }) => {
//     console.log("Loading listing details for ID:", params.id);
//     // Simulate API delay
//     await new Promise(resolve => setTimeout(resolve, 600));
    
//     // Find listing by ID
//     const listing = mockListings.find(item => item._id === params.id);
    
//     if (!listing) {
//       console.error("Listing not found for ID:", params.id);
//       throw new Response("Listing not found", { status: 404 });
//     }
    
//     console.log("Listing details loaded:", listing.title);
//     return listing;
//   }
// };

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout />, 
//     errorElement: <NotFound />,
//     children: [
//       {
//         index: true,
//         loader: mockLoaders.featuredListings,
//         element: <Home />,
//       },
//       {
//         path: "/browse-lists",
//         loader: mockLoaders.allListings,
//         element: <BrowseLists />,
//       },
//       {
//         path: "/card-details/:id",
//         loader: mockLoaders.singleListing,
//         element: <CardDetails />,
//       },
//       { path: "/contact", element: <ContactUs /> },
//       { path: "/about", element: <AboutUs /> },
//       { path: "/login", element: <Login /> },
//       { path: "/register", element: <Register /> },
//     ],
//   },

//   // Dashboard routes (Private)
//   {
//     path: "/dashboard",
//     element: (
//       <PrivateRoute>
//         <DashboardLayout />
//       </PrivateRoute>
//     ),
//     errorElement: <NotFound />,
//     children: [
//       {
//         index: true,
//         element: <DashboardWelcome/>
//       },
//       {
//         path: "add-lists",
//         element: <AddLists />,
//       },
//       {
//         path: "my-lists",
//         element: <MyLists />,
//       },
//       {
//         path: "update/:id",
//         loader: mockLoaders.singleListing,
//         element: <UpdateList />,
//       },
//     ],
//   },
// ]);

// // Export mock data for use in other components if needed
// export { mockListings, mockLoaders };
// export default router;





import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import BrowseLists from "../pages/BrowseLists";
import CardDetails from "../pages/CardDetails";
import ContactUs from "../pages/ContactUs";
import MyLists from "../pages/MyLists";
import AddLists from "../pages/AddLists";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardWelcome from "../pages/DashboardWelcome";
import UpdateList from "../pages/UpdateList";
import AboutUs from "../pages/About";

// Firebase imports
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, orderBy } from "firebase/firestore";

// Firebase config
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

// Firebase loader functions
const firebaseLoaders = {
  // Loader for featured listings (Home page) - get available listings ordered by creation date
  featuredListings: async () => {
    console.log("Loading featured listings from Firebase...");
    
    try {
      // Query for available listings, ordered by creation date (newest first)
      const q = query(
        collection(db, "roommatePosts"),
        where("availability", "==", "Available"),
        orderBy("createdAt", "desc")
      );
      
      const querySnapshot = await getDocs(q);
      const listings = [];
      
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        listings.push({
          _id: doc.id,
          ...data,
          // Convert Firestore timestamp to ISO string if needed
          createdAt: data.createdAt?.toDate?.()?.toISOString() || data.createdAt
        });
      });
      
      // Return first 6 listings for featured section
      const featuredListings = listings.slice(0, 6);
      console.log("Featured listings loaded:", featuredListings.length);
      return featuredListings;
      
    } catch (error) {
      console.error("Error loading featured listings:", error);
      // Return empty array on error to prevent app crash
      return [];
    }
  },

  // Loader for all listings (Browse page)
  allListings: async () => {
    console.log("Loading all listings from Firebase...");
    
    try {
      // Query all listings ordered by creation date (newest first)
      const q = query(
        collection(db, "roommatePosts"),
        orderBy("createdAt", "desc")
      );
      
      const querySnapshot = await getDocs(q);
      const listings = [];
      
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        listings.push({
          _id: doc.id,
          ...data,
          // Convert Firestore timestamp to ISO string if needed
          createdAt: data.createdAt?.toDate?.()?.toISOString() || data.createdAt
        });
      });
      
      console.log("All listings loaded:", listings.length);
      return listings;
      
    } catch (error) {
      console.error("Error loading all listings:", error);
      // Return empty array on error to prevent app crash
      return [];
    }
  },

  // Loader for single listing details
  singleListing: async ({ params }) => {
    console.log("Loading listing details for ID:", params.id);
    
    try {
      const docRef = doc(db, "roommatePosts", params.id);
      const docSnap = await getDoc(docRef);
      
      if (!docSnap.exists()) {
        console.error("Listing not found for ID:", params.id);
        throw new Response("Listing not found", { status: 404 });
      }
      
      const data = docSnap.data();
      const listing = {
        _id: docSnap.id,
        ...data,
        // Convert Firestore timestamp to ISO string if needed
        createdAt: data.createdAt?.toDate?.()?.toISOString() || data.createdAt
      };
      
      console.log("Listing details loaded:", listing.title);
      return listing;
      
    } catch (error) {
      console.error("Error loading listing details:", error);
      if (error.status) {
        throw error; // Re-throw HTTP errors
      }
      throw new Response("Error loading listing", { status: 500 });
    }
  }
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, 
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        loader: firebaseLoaders.featuredListings,
        element: <Home />,
      },
      {
        path: "/browse-lists",
        loader: firebaseLoaders.allListings,
        element: <BrowseLists />,
      },
      {
        path: "/card-details/:id",
        loader: firebaseLoaders.singleListing,
        element: <CardDetails />,
      },
      { path: "/contact", element: <ContactUs /> },
      { path: "/about", element: <AboutUs /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },

  // Dashboard routes (Private)
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <DashboardWelcome/>
      },
      {
        path: "add-lists",
        element: <AddLists />,
      },
      {
        path: "my-lists",
        element: <MyLists />,
      },
      {
        path: "update/:id",
        loader: firebaseLoaders.singleListing,
        element: <UpdateList />,
      },
    ],
  },
]);

export default router;
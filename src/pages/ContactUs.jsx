// import React, { useState } from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";

// import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
// import markerIcon from "leaflet/dist/images/marker-icon.png";
// import markerShadow from "leaflet/dist/images/marker-shadow.png";

// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: markerIcon2x,
//   iconUrl: markerIcon,
//   shadowUrl: markerShadow,
// });

// function App() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const [mapCenter] = useState([23.8103, 90.4125]); // Dhaka

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     alert("Thank you for your message! We will get back to you soon.");
//     setFormData({
//       name: "",
//       email: "",
//       subject: "",
//       message: "",
//     });
//   };

//   return (
//     <div className="flex items-center justify-center font-sans">
//       <div className="w-full bg-base-200 rounded-xl overflow-hidden md:mb-16">
//         <div className="text-center mb-10">
//           <h1 className="text-4xl sm:text-5xl font-extrabold text-base-content leading-tight mb-4 p-4">
//             Contact Us
//           </h1>
//           <p className="text-lg">
//             We'd love to hear from you! Please fill out the form below or find
//             us on the map.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           {/* Contact Form */}
//           <div className="card bg-base-100 shadow-xl rounded-xl p-6">
//             <h2 className="text-3xl font-bold text-base-content mb-6 text-center">
//               Send Us a Message
//             </h2>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label htmlFor="name" className="label">
//                   <span className="label-text font-medium">Your Name</span>
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="John Doe"
//                   className="input input-bordered w-full"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className="label">
//                   <span className="label-text font-medium">Your Email</span>
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="you@example.com"
//                   className="input input-bordered w-full"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="subject" className="label">
//                   <span className="label-text font-medium">Subject</span>
//                 </label>
//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   placeholder="Regarding your services..."
//                   className="input input-bordered w-full"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="message" className="label">
//                   <span className="label-text font-medium">Your Message</span>
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="Type your message here..."
//                   className="textarea textarea-bordered h-32 w-full"
//                   required
//                 ></textarea>
//               </div>
//               <div className="form-control mt-6">
//                 <button
//                   type="submit"
//                   className="btn btn-secondary btn-lg w-full rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
//                 >
//                   Send Message
//                 </button>
//               </div>
//             </form>
//           </div>

//           {/* Contact Info and Map */}
//           <div className="card bg-base-100 shadow-xl rounded-xl flex flex-col justify-between md:p-4">
//             <div>
//               <h2 className="text-3xl font-bold text-base-content mb-6 text-center">
//                 Our Location
//               </h2>
//               <div className="space-y-4 mb-8">
//                 <div className="flex items-center space-x-3">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6 text-secondary"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                   </svg>
//                   <p className="text-lg">
//                     House 42, Road 12, Gulshan 2, Dhaka, Bangladesh
//                   </p>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6 text-secondary"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                     />
//                   </svg>
//                   <p className="text-lg">+880 1700 123456</p>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6 text-secondary"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                     />
//                   </svg>
//                   <p className="text-lg">contact@yourcompany.com</p>
//                 </div>
//               </div>
//             </div>

//             {/* Map Section */}
//             <div className="w-full h-50 md:h-60 lg:h-70 rounded-xl overflow-hidden shadow-md">
//               <MapContainer
//                 center={mapCenter}
//                 zoom={13}
//                 scrollWheelZoom={false}
//                 className="h-full w-full rounded-xl"
//               >
//                 <TileLayer
//                   attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
//                   url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 />
//                 <Marker position={mapCenter}>
//                   <Popup>
//                     Our Office Location <br /> Come visit us!
//                   </Popup>
//                 </Marker>
//               </MapContainer>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

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

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [mapCenter] = useState([23.8103, 90.4125]); // Dhaka

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add form data to Firestore
      await addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: serverTimestamp()
      });
      alert("Thank you for your message! We will get back to you soon.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error saving message:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center font-sans">
      <div className="w-full bg-base-200 rounded-xl overflow-hidden md:mb-16">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-base-content leading-tight mb-4 p-4">
            Contact Us
          </h1>
          <p className="text-lg">
            We'd love to hear from you! Please fill out the form below or find
            us on the map.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Contact Form */}
          <div className="card bg-base-100 shadow-xl rounded-xl p-6">
            <h2 className="text-3xl font-bold text-base-content mb-6 text-center">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="label">
                  <span className="label-text font-medium">Your Name</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="label">
                  <span className="label-text font-medium">Your Email</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="label">
                  <span className="label-text font-medium">Subject</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Regarding your services..."
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="label">
                  <span className="label-text font-medium">Your Message</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  className="textarea textarea-bordered h-32 w-full"
                  required
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn btn-secondary btn-lg w-full rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info and Map */}
          <div className="card bg-base-100 shadow-xl rounded-xl flex flex-col justify-between md:p-4">
            <div>
              <h2 className="text-3xl font-bold text-base-content mb-6 text-center">
                Our Location
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-secondary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="text-lg">
                    Yaounde, cameroon
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-secondary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <p className="text-lg">+237 653297204</p>
                </div>
                <div className="flex items-center space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-secondary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-lg">sunitaformu2007@gmail.com</p>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

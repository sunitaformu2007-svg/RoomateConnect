// import React, { useContext, useEffect, useState } from "react";
// import { NavLink, useNavigate } from "react-router";
// import { FcGoogle } from "react-icons/fc";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import toast from "react-hot-toast";
// import { AuthContext } from "../provider/AuthContext";

// const Register = () => {
//   const { createUser, googleLogin, manageProfile } = useContext(AuthContext);
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     document.title = "Register";
//   }, []);

//   const handleGoogleLogin = () => {
//     googleLogin().then(() => {
//       toast.success("Login with Google successful");
//       navigate(`${location.state ? location.state : "/"}`);
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const name = e.target.fullname.value;
//     const email = e.target.email.value;
//     const password = e.target.password.value;
//     const photoUrl = e.target.photourl.value;

//     if (password.length < 6) {
//       toast.error("Password must be at least 6 digit.");
//       return;
//     }

//     if (!/[A-Z]/.test(password)) {
//       toast.error("Password must contain at least one uppercase letter.");
//       return;
//     }

//     if (!/[a-z]/.test(password)) {
//       toast.error("Password must contain at least one lowercase letter.");
//       return;
//     }

//     createUser(email, password)
//       .then((result) => {
//         const user = result.user;
//         console.log(user);
//         toast.success("User Register successful!");

//         manageProfile(name, photoUrl).then(() => {
//           navigate(`${location.state ? location.state : "/"}`);
//         });
//       })
//       .catch(() => {
//         toast.error("User Register Failed");
//       });
//   };

//   return (
//     <div className="flex items-center justify-center pt-8 pb-12 sm:pt-12 sm:pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24">
//       <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8">
//         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-secondary mb-2">
//           Create an account
//         </h2>
//         <p className="text-sm sm:text-base md:text-[17px] text-center text-gray-600 mb-6">
//           Already have an account?{" "}
//           <NavLink
//             to="/login"
//             className="text-secondary hover:underline font-medium"
//           >
//             Login here
//           </NavLink>
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Name + Photo */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="space-y-2">
//               <label
//                 htmlFor="fullname"
//                 className="block text-sm sm:text-base font-medium text-gray-700"
//               >
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 name="fullname"
//                 id="fullname"
//                 required
//                 placeholder="Your name"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm sm:text-base"
//               />
//             </div>
//             <div className="space-y-2">
//               <label
//                 htmlFor="photourl"
//                 className="block text-sm sm:text-base font-medium text-gray-700"
//               >
//                 Photo URL
//               </label>
//               <input
//                 type="text"
//                 name="photourl"
//                 id="photourl"
//                 required
//                 placeholder="Photo URL"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm sm:text-base"
//               />
//             </div>
//           </div>

//           {/* Email + Password */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="space-y-2">
//               <label
//                 htmlFor="email"
//                 className="block text-sm sm:text-base font-medium text-gray-700"
//               >
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 required
//                 placeholder="Your email"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm sm:text-base"
//               />
//             </div>

//             <div className="space-y-2">
//               <label
//                 htmlFor="password"
//                 className="block text-sm sm:text-base font-medium text-gray-700"
//               >
//                 Password
//               </label>
//               <div className="flex items-center relative">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   id="password"
//                   required
//                   placeholder="******"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm sm:text-base"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="btn btn-xs absolute right-4"
//                 >
//                   {showPassword ? <FaEye size={16} /> : <FaEyeSlash size={16} />}
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary text-sm sm:text-base"
//           >
//             Register
//           </button>
//         </form>

//         <div className="flex items-center w-full my-4">
//           <hr className="w-full border-gray-300" />
//           <span className="px-3 text-gray-500 text-sm sm:text-base">OR</span>
//           <hr className="w-full border-gray-300" />
//         </div>

//         <button
//           onClick={handleGoogleLogin}
//           type="button"
//           className="flex items-center justify-center w-full gap-3 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 text-sm sm:text-base"
//         >
//           <FcGoogle size={23} />
//           <span>Login with Google</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Register;


import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

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

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const googleProvider = new GoogleAuthProvider();

  useEffect(() => {
    document.title = "Register";
  }, []);

  // --- Save user to Firestore ---
  const saveUserToFirestore = async (user) => {
    try {
      await setDoc(doc(db, "users", user.uid), {
        name: user.displayName || "",
        email: user.email,
        photoURL: user.photoURL || "",
        createdAt: new Date(),
      });
    } catch (error) {
      console.error("Firestore save error:", error);
      toast.error("Failed to save user info");
    }
  };

  // --- Google login ---
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveUserToFirestore(user);
        toast.success("Login with Google successful");
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Google login failed");
      });
  };

  // --- Email/password registration ---
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.fullname.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoUrl = e.target.photourl.value;

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter");
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        updateProfile(user, { displayName: name, photoURL: photoUrl })
          .then(() => saveUserToFirestore(user))
          .then(() => {
            toast.success("User registered successfully!");
            navigate("/");
          })
          .catch(() => {
            toast.error("Failed to save user info");
          });
      })
      .catch(() => {
        toast.error("User registration failed");
      });
  };

  return (
    <div className="flex items-center justify-center pt-8 pb-12 sm:pt-12 sm:pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-secondary mb-2">
          Create an account
        </h2>
        <p className="text-sm sm:text-base md:text-[17px] text-center text-gray-600 mb-6">
          Already have an account?{" "}
          <NavLink
            to="/login"
            className="text-secondary hover:underline font-medium"
          >
            Login here
          </NavLink>
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="fullname" className="block text-sm sm:text-base font-medium text-gray-700">
                Full Name
              </label>
              <input type="text" name="fullname" id="fullname" required placeholder="Your name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm sm:text-base" />
            </div>
            <div className="space-y-2">
              <label htmlFor="photourl" className="block text-sm sm:text-base font-medium text-gray-700">
                Photo URL
              </label>
              <input type="text" name="photourl" id="photourl" required placeholder="Photo URL"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm sm:text-base" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-700">
                Email Address
              </label>
              <input type="email" name="email" id="email" required placeholder="Your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm sm:text-base" />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm sm:text-base font-medium text-gray-700">
                Password
              </label>
              <div className="flex items-center relative">
                <input type={showPassword ? "text" : "password"} name="password" id="password" required placeholder="******"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm sm:text-base" />
                <button type="button" onClick={() => setShowPassword(!showPassword)}
                  className="btn btn-xs absolute right-4">
                  {showPassword ? <FaEye size={16} /> : <FaEyeSlash size={16} />}
                </button>
              </div>
            </div>
          </div>

          <button type="submit" className="w-full py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary text-sm sm:text-base">
            Register
          </button>
        </form>

        <div className="flex items-center w-full my-4">
          <hr className="w-full border-gray-300" />
          <span className="px-3 text-gray-500 text-sm sm:text-base">OR</span>
          <hr className="w-full border-gray-300" />
        </div>

        <button onClick={handleGoogleLogin} type="button"
          className="flex items-center justify-center w-full gap-3 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 text-sm sm:text-base">
          <FcGoogle size={23} />
          <span>Login with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Register;

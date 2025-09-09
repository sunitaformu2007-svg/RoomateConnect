

import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AuthContext } from "../provider/AuthContext";
import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaBed,
  FaUsers,
  FaCalendarCheck,
  FaHeart,
} from "react-icons/fa";

// // Firebase imports
// import { initializeApp } from "firebase/app";
// import { getFirestore, doc, updateDoc, increment } from "firebase/firestore";

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Details = () => {
  // Get data from router loader (Firebase)
  const loaderData = useLoaderData();
  const [list, setList] = useState(loaderData);
  
  // Get authenticated user
  const { user } = useContext(AuthContext);

  useEffect(() => {
    document.title = "Card Details";
  }, []);

  // Destructure listing data
  const {
    _id,
    title,
    location,
    rent,
    roomType,
    lifestyle,
    description,
    availability,
    contact,
    likeCount,
    ownerEmail, // Use ownerEmail instead of email for consistency
    image,
  } = list;

  const [like, setLike] = useState(likeCount || 0);
  const [showContact, setShowContact] = useState(false);
  const [hasLiked, setHasLiked] = useState(false);

  // Check if current user is the owner
  const isOwner = user?.email === ownerEmail;

  const handleLike = async () => {
    if (!user) {
      toast.error("Please login to like this post.");
      return;
    }

    if (isOwner) {
      toast.error("You cannot like your own post.");
      return;
    }

    if (hasLiked) {
      toast.error("You have already liked this post.");
      return;
    }

    try {
      console.log("Liking post with ID:", _id);
      console.log("Current like count:", like);
      
      // Update Firebase document
      const listRef = doc(db, "roommatePosts", _id);
      await updateDoc(listRef, {
        likeCount: increment(1)
      });
      
      // Update local state
      const newLikeCount = like + 1;
      setLike(newLikeCount);
      setShowContact(true);
      setHasLiked(true);
      
      // Update the main list data
      setList(prevList => ({
        ...prevList,
        likeCount: newLikeCount
      }));
      
      toast.success("Liked successfully! Contact info revealed.");
      
    } catch (error) {
      console.error("Failed to like post:", error);
      toast.error("Failed to like the post. Please try again.");
    }
  };

  return (
    <div className="w-full px-4 py-16">
      <div className="max-w-4xl mx-auto text-center mb-8 px-2">
        <h2 className="text-3xl md:text-4xl font-bold">
          Roommate Listing Details
        </h2>
        <p className="text-base-content/70 mt-2 text-base md:text-lg max-w-2xl mx-auto">
          Discover everything you need to know about this listing. Find the right room and lifestyle that fits your needs.
        </p>
      </div>

      <div className="w-full max-w-7xl mx-auto bg-base-100 rounded-xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-10">
        <div className="w-full">
          <img
            src={image || "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"}
            alt={title}
            className="w-full h-full object-cover rounded-lg aspect-video"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/600x400/E5E7EB/6B7280?text=No+Image";
              e.target.alt = "No image available";
            }}
          />
        </div>

        <div className="w-full flex flex-col justify-center space-y-4 text-base-content">
          <h2 className="text-2xl font-semibold text-center text-secondary">
            <FaHeart className={`inline-block mr-2 ${hasLiked ? 'text-red-500' : 'text-error'}`} />
            {like} people interested
          </h2>

          <h3 className="text-2xl font-bold">{title}</h3>

          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-primary" />
            <span>{location}</span>
          </p>

          <p className="flex items-center gap-2">
            <FaMoneyBillWave className="text-success" />
            <span>FCFA{rent}</span>
          </p>

          <p className="flex items-center gap-2">
            <FaBed className="text-secondary" />
            <span>{roomType}</span>
          </p>

          <p className="flex items-center gap-2">
            <FaUsers className="text-accent" />
            <span>{lifestyle}</span>
          </p>

          <p className="text-base leading-relaxed">
            <strong>Description:</strong> {description}
          </p>

          <p className="flex items-center gap-2">
            <FaCalendarCheck className={`${availability === "Available" ? "text-success" : "text-error"}`} />
            <span className={availability === "Available" ? "text-success font-semibold" : "text-error font-semibold"}>
              {availability}
            </span>
          </p>

          <button
            className={`btn w-full text-base h-12 ${
              hasLiked 
                ? 'btn-success' 
                : isOwner 
                  ? 'btn-disabled' 
                  : 'btn-secondary'
            }`}
            onClick={handleLike}
            disabled={hasLiked || isOwner || !user}
          >
            {hasLiked ? '❤️ Liked!' : isOwner ? 'Your Post' : !user ? 'Login to Like' : 'Like This Post'}
          </button>

          {showContact && !isOwner && (
            <div className="bg-success/10 border border-success/20 rounded-lg p-4 text-center animate-pulse">
              <p className="font-semibold text-success">
                <strong>🎉 Contact Info Unlocked:</strong>
              </p>
              <p className="text-lg font-bold mt-2">{contact}</p>
              <p className="text-sm text-success/80 mt-1">
                You can now contact the owner directly!
              </p>
            </div>
          )}

          {isOwner && (
            <div className="bg-info/10 border border-info/20 rounded-lg p-4 text-center">
              <p className="text-info font-semibold">
                📝 This is your listing
              </p>
              <p className="text-sm text-info/80 mt-1">
                Others can see your contact info when they like: {contact}
              </p>
            </div>
          )}

          {!user && (
            <div className="bg-warning/10 border border-warning/20 rounded-lg p-4 text-center">
              <p className="text-warning font-semibold">
                🔐 Login Required
              </p>
              <p className="text-sm text-warning/80 mt-1">
                Please login to like this post and unlock contact information.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Owner info section */}
      <div className="w-full max-w-7xl mx-auto mt-8 bg-base-200 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-4 text-center">About the Owner</h3>
        <div className="text-center">
          <p className="text-lg font-semibold">{list.ownerName || list.name}</p>
          <p className="text-base-content/70">{ownerEmail}</p>
          <p className="text-sm text-base-content/60 mt-2">
            Posted on {new Date(list.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
import React from "react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    // ✅ Full width footer
    <footer className="py-12 bg-base-200 text-base-content">
      {/* ✅ Content centered like Navbar */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <a href='/'>
             <h3 className="text-lg text-secondary md:text-xl font-bold mb-4">RoomMate</h3>
            </a>
            <p className="text-sm md:text-base">
              A free roommate finder service to find roommates, rooms for rent, or apartment rentals for sharing based on your lifestyle & preferences.
            </p>
          </div>

          <div className="md:pl-20">
            <h3 className="text-lg md:text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li><a href="/terms">Terms and Conditions</a></li>
              <li><a href="/privacy">Privacy and Policy</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-5">
              <a target="_blank" href="https://www.facebook.com" rel="noreferrer">
                <FaFacebook className="text-blue-500" size={28} />
              </a>
              <a target="_blank" href="https://www.youtube.com" rel="noreferrer">
                <FaYoutube className="text-red-500" size={30} />
              </a>
              <a target="_blank" href="https://www.instagram.com" rel="noreferrer">
                <FaInstagram className="text-pink-500" size={28} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-6 text-center text-xs md:text-sm text-gray-500">
          &copy; RoomMate All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

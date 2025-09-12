import React, { useState } from "react";
import toast from "react-hot-toast";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter a valid email!");
      return;
    }

    // Simulate successful subscription
    toast.success("Subscribed successfully!");
    setEmail("");
  };

  return (
    <section className="w-full bg-base-200 py-12 px-4 rounded-2xl sm:px-8 md:px-16 md:mb-16">
      <div className="max-w-6xl mx-auto">
        {/* Title at the Top */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-base-content mb-4">
            Stay Updated with RoomMate Finds
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Get the latest room listings, roommate tips, and exclusive offers delivered straight to your inbox.
            Join our community today!
          </p>
        </div>

        {/* Grid Layout */}
        <div className="bg-base-100 rounded-xl p-6 sm:p-8 md:p-10 lg:flex lg:items-center shadow-lg">
          {/* Left Section */}
          <div className="lg:w-1/2 lg:pr-8 text-center lg:text-left mb-6 lg:mb-0">
            <ul className="space-y-4 text-base-content/80 list-none p-0">
              {[
                "New Room Listings Daily",
                "Exclusive Roommate Tips",
                "Early Access to Features",
              ].map((text, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-center lg:justify-start"
                >
                  <svg
                    className="w-5 h-5 text-secondary mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section: Form */}
          <div className="lg:w-1/2 lg:pl-8">
            <div className="bg-secondary/8 p-6 sm:p-8 rounded-xl border border-secondary/20 shadow-inner">
              <h3 className="text-2xl font-bold text-secondary mb-5 text-center">
                Join Our Newsletter
              </h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="input input-bordered w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="btn btn-secondary w-full">
                  Subscribe Now
                </button>
              </form>
              <p className="mt-4 text-sm text-base-content/70 text-center">
                We care about your privacy. Read our{" "}
                <a
                  href="#"
                  className="text-secondary font-medium hover:underline"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;

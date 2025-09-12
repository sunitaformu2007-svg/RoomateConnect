import React, { useEffect } from "react"
import about from '../assets/about.png'
import { FaUsers, FaLightbulb, FaHandsHelping, FaCheckCircle, FaStar } from "react-icons/fa"; // Importing icons for visual appeal

const AboutUs = () => {
  useEffect(() => {
    document.title = "About Us - Roommate Finder";
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Mafor Glory",
      role: "Product Owner",
      bio: "Glory envisioned Roommate Finder to simplify co-living, bringing years of experience in house searching and community building.",
    },
    {
      id: 2,
      name: "Fonkeng Terence Lyonga",
      role: "CTO",
      bio: "Terrence leads our engineering efforts, passionate about creating robust and scalable solutions for seamless user experiences.",
    },
    {
      id: 3,
      name: "Junior Mekata Itambi Ekpa ",
      role: "srum master",
      bio: "Junior ensures our community thrives, focusing on user support and fostering a positive environment for all members.",
    },
    {
      id: 4,
      name: "Rodrick Vernyuy",
      role: "Member",
      bio: "Rodrick he valued professionalism and dedication shown throughtout this project.",
    },
    {
      id: 1,
      name: "Formu Sunita",
      role: "Member",
      bio: "Naah enjoyed collaborating with a supportive and proactive team. great teamwork everyone contributed meaningfully to the project success, gave a specific skill of problem solving, communication, project management.",
    },
  ];

  const testimonials = [
    {
      id: 1,
      quote: "Roommate Finder made finding my ideal roommate a breeze! The matching system is incredibly accurate.",
      author: "Sarah M.",
      rating: 5,
    },
    {
      id: 2,
      quote: "I was skeptical at first, but this platform is secure and reliable. Found a great place and an even better roommate.",
      author: "John D.",
      rating: 4,
    },
    {
      id: 3,
      quote: "Highly recommend! The verification process gave me peace of mind, and I connected with wonderful people.",
      author: "Emily R.",
      rating: 5,
    },
  ];

  return (
    <div className="w-full px-4 md:my-16 md:py-12 text-base-content font-sans">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center mb-16 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Discover Your Perfect Co-Living Experience
        </h1>
        <p className="text-xl text-base-content/80 max-w-3xl mx-auto mb-8">
          At Roommate Finder, we're dedicated to transforming how people find roommates and homes. Our mission is to connect individuals with compatible living partners, fostering harmonious and secure environments.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="/browse-lists" className="btn btn-secondary btn-lg shadow-lg transform transition duration-300 hover:scale-105">
            Browse All Lists
          </a>
          <a href="/" className="btn btn-outline btn-lg shadow-lg transform transition duration-300 hover:scale-105">
           Browse Feature Lists
          </a>
        </div>
      </div>

      <hr className="my-12 border-t-2 border-base-300" />

      {/* Our Story Section */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <FaLightbulb className="inline-block mr-3 text-secondary" /> Our Story
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Roommate Finder began with a simple idea: finding the right roommate shouldn't be stressful. Ours the founder, having faced our own challenges in the search, envisioned a platform that prioritized compatibility, safety, and community.
            </p>
            <p className="text-lg leading-relaxed">
              Since our inception in {new Date().getFullYear() +0}, we are growing into a trusted community, continuously evolving our features to meet the diverse needs of students, professionals, and travelers seeking their ideal living arrangements.
            </p>
          </div>
          <div className="animate-slide-in-right">
            <img
              src={about}
              alt="Our Story"
              className="rounded-xl shadow-xl border border-base-300"
            />
          </div>
        </div>
      </section>

      <hr className="my-12 border-t-2 border-base-300" />

      {/* Our Mission & Values Section */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Drives Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-base-100 p-8 rounded-xl shadow-lg border border-base-300 transform transition duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in-up">
            <div className="text-5xl text-secondary mb-4 text-center">
              <FaUsers />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-center">Our Mission</h3>
            <p className="text-base-content/80 text-center leading-relaxed">
              To simplify and secure the process of finding compatible roommates and ideal living spaces, empowering individuals to create harmonious homes.
            </p>
          </div>
          <div className="bg-base-100 p-8 rounded-xl shadow-lg border border-base-300 transform transition duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in-up delay-100">
            <div className="text-5xl text-accent mb-4 text-center">
              <FaCheckCircle className="text-secondary" />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-center">Our Values</h3>
            <ul className="list-none space-y-2 text-base-content/80 text-center">
              <li>Trust & Transparency</li>
              <li>Community & Support</li>
              <li>Innovation & Simplicity</li>
              <li>Safety & Security</li>
            </ul>
          </div>
          <div className="bg-base-100 p-8 rounded-xl shadow-lg border border-base-300 transform transition duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in-up delay-200">
            <div className="text-5xl text-secondary mb-4 text-center">
              <FaHandsHelping />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-center">What We Offer</h3>
            <ul className="list-disc list-inside space-y-2 text-base-content/80">
              <li>Smart roommate matching with lifestyle filters</li>
              <li>Verified listings and secure communication</li>
              <li>Advanced search and sorting tools</li>
              <li>Responsive support and community guidelines</li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="my-12 border-t-2 border-base-300" />

      {/* Meet the Team Section */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <FaUsers className="inline-block mr-3 text-secondary" /> Meet Our dynamic Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-base-100 p-6 rounded-xl shadow-lg border border-base-300 text-center transform transition duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-secondary"
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-secondary-focus mb-3">{member.role}</p>
              <p className="text-base-content/70 text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      <hr className="my-12 border-t-2 border-base-300" />

      {/* Testimonials Section */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <FaStar className="inline-block mr-3 text-warning" /> What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-base-100 p-6 rounded-xl shadow-lg border border-base-300 transform transition duration-300 hover:shadow-xl animate-fade-in"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={i < testimonial.rating ? "text-warning" : "text-base-content/30"}
                  />
                ))}
              </div>
              <p className="italic text-base-content/80 mb-4 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <p className="font-semibold text-right">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
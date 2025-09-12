import React from "react";
import blog1 from '../assets/blog1.jpg'
import blog2 from '../assets/blog2.webp'
import blog3 from '../assets/blog3.webp'
import blog4 from '../assets/blog4.jpg'

const blogs = [
  {
    id: 1,
    title: "How to Find the Perfect Roommate",
    category: "Tips",
    date: "June 1, 2025",
    views: "2.1K views",
    image: blog1,
  },
  {
    id: 2,
    title: "Budgeting Rent with Roommates",
    category: "Finance",
    date: "June 2, 2025",
    views: "2.2K views",
    image: blog2,
  },
  {
    id: 3,
    title: "Creating Harmony in Shared Living",
    category: "Lifestyle",
    date: "June 3, 2025",
    views: "2.3K views",
    image: blog3,
  },
  {
    id: 4,
    title: "What to Include in a Roommate Agreement",
    category: "Legal",
    date: "June 4, 2025",
    views: "2.4K views",
    image: blog4,
  },
];

const BlogSection = () => {
  return (
    <section className="py-12 bg-base-100 text-base-content">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">Our Latest Blogs</h2>
          <p className="text-base text-base-content/70">
            Discover tips, ideas, and advice to make your roommate journey better.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-base-200 rounded-xl shadow-md overflow-hidden flex flex-col"
            >
              <a href="#" className="block" aria-label={blog.title}>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-52 object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/400x300/E5E7EB/6B7280?text=No+Image";
                    e.target.alt = "Image not available";
                  }}
                />
              </a>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <a
                    href="#"
                    className="text-xs font-semibold uppercase text-primary hover:underline"
                  >
                    {blog.category}
                  </a>
                  <h3 className="mt-2 text-lg font-semibold leading-snug">
                    {blog.title}
                  </h3>
                </div>
                <div className="flex justify-between text-sm text-base-content/60 pt-4">
                  <span>{blog.date}</span>
                  <span>{blog.views}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

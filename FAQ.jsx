import React from "react";

const faqData = [
  {
    question: "How Does The Roommate Finder Work?",
    answer:
      "Roommate has a powerful search tool that makes finding your ideal roommate super easy! It's like a personalized search engine just for roommates—filter by what's important to you and connect with the right match in no time.",
  },
  {
    question: "Is The Roommate Finder Free to Use?",
    answer:
      "Yes, completely free! The Roommate Finder lets you search and message as much as you want without any limits.",
  },
  {
    question: "What Should I Look For In a College Roommate?",
    answer:
      "When it comes to picking a college roommate, finding someone you can live well with is key. Look for someone who has a similar schedule, goals, and social habits. It's better to have a good living situation than to risk losing a friendship over roommate issues. For more tips on what makes a great roommate, check out our post in our blog!",
  },
  {
    question: "What Questions Should I Ask Potential College Roommates?",
    answer:
      "Asking the right questions helps you get beyond the basics and figure out if you'll make a good team as roommates. We've put together a list of the top 50 questions to help you get started—check it out!",
  },
  {
    question: "How To Find Roommates For College?",
    answer:
      "Finding a roommate doesn't have to be stressful! There are plenty of options out there, like Facebook groups, Instagram pages, and the MeetYourClass Roommate Finder, which makes it easy to find the right person for you.",
  },
  {
    question: "What Websites To Find Roommates?",
    answer:
      "There are lots of places online to find roommates, but Roommate is one of the fastest-growing, with over 400,000 students from 1,500+ colleges. It's a great place to start your search!",
  },
];

const FAQ = () => {
  return (
    <div className="faq-wrapper md:my-24">
      <h2 className="font-bold text-xl md:text-3xl lg:text-4xl text-center my-6">
        Frequently Asked Questions
      </h2>

      {/* Professional subheading */}
      <p className="text-center text-base md:text-lg max-w-2xl mx-auto mb-6">
        Here you'll find answers to the most common questions about using RoomMate designed to help you get the best experience.
      </p>

      {faqData.map((item, index) => (
        <div
          key={index}
          className="collapse collapse-plus bg-base-100 border border-base-300"
        >
          <input
            type="radio"
            name="my-accordion-3"
            defaultChecked={index === 0}
            id={`faq-${index}`}
          />
          <div className="collapse-title font-semibold text-lg md:text-xl">
            {index + 1}. {item.question}
          </div>
          <div className="collapse-content text-sm md:text-base">
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;

import React from "react";
import { Autoplay, Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";
import slider4 from "../assets/slider4.avif";

const Slider = () => {
  const slides = [
    {
      image: slider1,
      title: "Find Your Ideal Roommate Today",
      desc: "Explore the easiest way to connect and share your space with students like you.",
    },
    {
      image: slider2,
      title: "Smart Search. Better Matches.",
      desc: "Discover people who match your lifestyle and housing preferences.",
    },
    {
      image: slider3,
      title: "Live Together. Study Better.",
      desc: "Find roommates that support your goals, not distract from them.",
    },
    {
      image: slider4,
      title: "Safe. Verified. Trusted.",
      desc: "Over 400,000 students already use RoomMate. Join the community.",
    },
  ];

  return (
    <div className="w-full">
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[180px] md:h-[50vh]">
              {/* ✅ Background Image Container */}
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt="Slide"
                  className="w-full h-full object-cover"
                />
                {/* ✅ Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>
              </div>

              {/* ✅ Slide Content */}
              <div className="relative z-20 h-full flex flex-col justify-center items-center text-white text-center px-4 sm:px-6 lg:px-12">
                <h2 className="text-sm sm:text-lg md:text-3xl lg:text-5xl font-bold mb-1 md:mb-4">
                  {slide.title}
                </h2>
                <p className="text-xs sm:text-sm md:text-lg lg:text-xl max-w-2xl">
                  {slide.desc}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;

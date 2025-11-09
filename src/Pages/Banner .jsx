import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const Banner = () => {
  const slides = [
    {
      img: "https://i.ibb.co/0VmCzQMF/volunteers-participating-ramadan-cleanup-drive-1003686-83729.jpg",
      title: "Garbage Issues in the Community",
      desc: "Uncollected waste pollutes our streets and water — report and take action today!",
    },
    {
      img: "https://i.ibb.co/39qZKCwc/happy-family-collecting-rubbish-13339-183696.jpg",
      title: "Community Cleaning Drives",
      desc: "Together, we can make our city clean and green — join your local cleaning movement.",
    },
    {
      img: "https://i.ibb.co.com/b5McyvtK/Happy-friends-gardening-for-the-community-on-a-sunny-day.jpg",
      title: "Sustainability in Action",
      desc: "Adopt eco-friendly habits for a sustainable future — every small step counts.",
    },
  ];

  return (
    <div className="w-full h-[70vh] relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          reverseDirection: false,
        }}
        speed={1000} 
        pagination={{ clickable: true }}
        navigation={true}
        effect="fade"
        fadeEffect={{ crossFade: true }} 
        loop
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[70vh]">
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-6 transition-opacity duration-700 opacity-100">
                <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl max-w-2xl mb-6">
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

export default Banner;

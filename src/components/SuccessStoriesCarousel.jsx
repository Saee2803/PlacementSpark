import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
  Keyboard,
  Mousewheel,
} from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import PlacementStoryCard from "./PlacementStoryCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

/**
 * SuccessStoriesCarousel Component
 * Responsive carousel with swipe, drag, autoplay, and navigation
 * Breakpoints:
 * - Desktop (1200px+): 4 cards
 * - Laptop (992px+): 3 cards
 * - Tablet (640px+): 2 cards
 * - Mobile: 1 card
 */
export default function SuccessStoriesCarousel({ stories = [] }) {
  const swiperRef = useRef(null);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handleMouseEnter = () => {
    setIsAutoplay(false);
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    setIsAutoplay(true);
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

  return (
    <div
      className="w-full relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow, Keyboard, Mousewheel]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
          1600: {
            slidesPerView: 4,
            spaceBetween: 28,
          },
        }}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          el: ".carousel-pagination",
          clickable: true,
          type: "bullets",
          dynamicBullets: true,
          dynamicMainBullets: 3,
        }}
        navigation={{
          nextEl: ".carousel-button-next",
          prevEl: ".carousel-button-prev",
          disabledClass: "opacity-50 cursor-not-allowed",
        }}
        keyboard={{
          enabled: true,
          onlyInViewport: true,
        }}
        mousewheel={{
          forceToAxis: true,
          sensitivity: 1,
        }}
        grabCursor={true}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 1,
          slideShadows: false,
        }}
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
        className="success-stories-swiper"
      >
        {stories && stories.length > 0 ? (
          stories.map((story) => (
            <SwiperSlide key={story.id} className="h-auto">
              <PlacementStoryCard story={story} />
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <div className="flex items-center justify-center h-96 bg-brand-card rounded-lg">
              <p className="text-brand-white text-opacity-50">No stories available</p>
            </div>
          </SwiperSlide>
        )}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="hidden lg:flex absolute -left-16 2xl:-left-20 top-1/2 -translate-y-1/2 gap-4 2xl:gap-6 z-20 pointer-events-none">
        <button
          onClick={handlePrevClick}
          className="carousel-button-prev pointer-events-auto flex items-center justify-center w-12 h-12 2xl:w-14 2xl:h-14 rounded-full bg-gradient-to-r from-brand-red to-red-600 text-white hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300 hover:scale-110"
          aria-label="Previous story"
        >
          <FaChevronLeft size={18} />
        </button>
        <button
          onClick={handleNextClick}
          className="carousel-button-next pointer-events-auto flex items-center justify-center w-12 h-12 2xl:w-14 2xl:h-14 rounded-full bg-gradient-to-r from-brand-red to-red-600 text-white hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300 hover:scale-110"
          aria-label="Next story"
        >
          <FaChevronRight size={18} />
        </button>
      </div>

      {/* Mobile Navigation Buttons */}
      <div className="lg:hidden flex justify-center gap-3 mt-6">
        <button
          onClick={handlePrevClick}
          className="carousel-button-prev flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full bg-gradient-to-r from-brand-red to-red-600 text-white hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300"
          aria-label="Previous story"
        >
          <FaChevronLeft size={14} />
        </button>
        <button
          onClick={handleNextClick}
          className="carousel-button-next flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full bg-gradient-to-r from-brand-red to-red-600 text-white hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300"
          aria-label="Next story"
        >
          <FaChevronRight size={14} />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-8 md:mt-10 lg:mt-12 2xl:mt-14">
        <div className="carousel-pagination flex justify-center items-center gap-2"></div>
      </div>

      {/* Custom Pagination Styles */}
      <style>{`
        .carousel-pagination {
          display: flex !important;
          gap: 8px;
          justify-content: center;
          align-items: center;
        }

        .carousel-pagination .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: rgb(255, 255, 255);
          opacity: 0.3;
          margin: 0 4px !important;
          transition: all 0.3s ease;
          cursor: pointer;
          border-radius: 50%;
        }

        .carousel-pagination .swiper-pagination-bullet:hover {
          opacity: 0.6;
        }

        .carousel-pagination .swiper-pagination-bullet-active {
          width: 32px;
          border-radius: 6px;
          background: linear-gradient(90deg, var(--brand-red), var(--brand-yellow));
          opacity: 1;
        }

        .success-stories-swiper {
          padding-bottom: 10px;
        }

        @media (max-width: 1024px) {
          .carousel-pagination .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
          }

          .carousel-pagination .swiper-pagination-bullet-active {
            width: 24px;
          }
        }
      `}</style>
    </div>
  );
}

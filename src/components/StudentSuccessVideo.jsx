import { useState } from "react";
import { FaPlay } from "react-icons/fa";

export default function StudentSuccessVideo() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Video Section */}
      <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
        {/* Video Thumbnail */}
        <div 
          className="relative cursor-pointer group"
          onClick={() => setIsModalOpen(true)}
        >
          <img
            src="/Batch_Image.png"
            alt="Student Success Video"
            className="w-full h-auto object-cover"
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-brand-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-brand-red rounded-full p-6 lg:p-8 2xl:p-10 group-hover:scale-110 transition-transform duration-300 shadow-2xl shadow-brand-red/50">
              <FaPlay className="text-white text-2xl lg:text-3xl 2xl:text-4xl ml-1" />
            </div>
          </div>
        </div>

        {/* Content Below Video */}
        <div className="p-8 lg:p-10 2xl:p-12 bg-brand-card border-t-2 border-brand-red border-opacity-30">
          <h3 className="text-2xl lg:text-3xl 2xl:text-4xl font-bold text-brand-white mb-6 lg:mb-8">
            Watch Student Transformation
          </h3>
          <p className="text-base lg:text-lg 2xl:text-xl text-brand-white text-opacity-80 mb-8 lg:mb-10">
            See how students went from confused graduates to placement-ready professionals.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 lg:gap-6">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl 2xl:text-5xl font-bold text-brand-yellow mb-2">
                120+
              </div>
              <p className="text-sm lg:text-base text-brand-white text-opacity-70">
                Students Mentored
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl 2xl:text-5xl font-bold text-brand-blue mb-2">
                27+
              </div>
              <p className="text-sm lg:text-base text-brand-white text-opacity-70">
                Success Stories
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl 2xl:text-5xl font-bold text-brand-green mb-2">
                95%
              </div>
              <p className="text-sm lg:text-base text-brand-white text-opacity-70">
                Interview Rate
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 bg-brand-red text-white rounded-full p-2 lg:p-3 hover:bg-red-600 transition-colors"
            >
              ✕
            </button>

            {/* Video Container */}
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Student Success Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-2xl"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

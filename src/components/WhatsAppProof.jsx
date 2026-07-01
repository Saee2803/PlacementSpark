import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function WhatsAppProof() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const proofs = [
    {
      id: 1,
      name: "Aditya S.",
      text: "Got selected at Lubrizol! Mock interviews were game-changing 🎯",
      image: "https://via.placeholder.com/80x80?text=Aditya",
      date: "2 weeks ago"
    },
    {
      id: 2,
      name: "Priya J.",
      text: "The Placement Mentorship is what got me through. Thanks! ✨",
      image: "https://via.placeholder.com/80x80?text=Priya",
      date: "1 week ago"
    },
    {
      id: 3,
      name: "Rohit P.",
      text: "15 LPA offer from Reliance! Never thought it was possible 🚀",
      image: "https://via.placeholder.com/80x80?text=Rohit",
      date: "3 days ago"
    },
    {
      id: 4,
      name: "Sneha D.",
      text: "Best investment for my placement. Highly recommend!",
      image: "https://via.placeholder.com/80x80?text=Sneha",
      date: "Today"
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % proofs.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + proofs.length) % proofs.length);
  };

  return (
    <section className="py-20 md:py-32 bg-brand-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-in">
          <h2 className="heading-section text-brand-black mb-4">
            Student Feedback
          </h2>
          <p className="text-lg text-brand-black text-opacity-70">
            Real messages from students on WhatsApp
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto relative">
          {/* Main Message */}
          <div className="bg-gradient-to-br from-brand-blue to-brand-red rounded-2xl p-8 md:p-12 text-center mb-8 shadow-xl">
            <div className="flex justify-center mb-6">
              <img
                src={proofs[currentIndex].image}
                alt={proofs[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover border-4 border-brand-white"
              />
            </div>
            <p className="text-xl md:text-2xl font-bold text-brand-white mb-4">
              "{proofs[currentIndex].text}"
            </p>
            <div className="flex flex-col items-center gap-2">
              <p className="text-brand-white text-opacity-90 font-semibold">
                {proofs[currentIndex].name}
              </p>
              <p className="text-brand-white text-opacity-70 text-sm">
                {proofs[currentIndex].date}
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={prevSlide}
              className="bg-brand-black bg-opacity-10 hover:bg-opacity-20 text-brand-black p-3 rounded-full transition-all"
              aria-label="Previous feedback"
            >
              <FaChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {proofs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-brand-red w-6"
                      : "bg-brand-black bg-opacity-20 w-2"
                  }`}
                  aria-label={`Go to feedback ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="bg-brand-black bg-opacity-10 hover:bg-opacity-20 text-brand-black p-3 rounded-full transition-all"
              aria-label="Next feedback"
            >
              <FaChevronRight size={20} />
            </button>
          </div>

          {/* Counter */}
          <div className="text-center mt-6">
            <p className="text-sm text-brand-black text-opacity-60">
              {currentIndex + 1} of {proofs.length}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-brand-black mb-6">
            Join {proofs.length}00+ students who are already succeeding.
          </p>
        </div>
      </div>
    </section>
  );
}

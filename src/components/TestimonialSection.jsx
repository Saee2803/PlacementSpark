import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

export default function TestimonialSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Aditya Lamture",
      company: "Lubrizol",
      quote:
        "I failed my first interview. After joining Placement Spark, just one mock session helped me crack Lubrizol.",
      rating: 5,
    },
    {
      name: "Manasi Joshi",
      company: "Worley",
      quote:
        "Their GD and technical interview strategy helped me get placed at Worley. The support was incredible.",
      rating: 5,
    },
    {
      name: "Omkar Gaikwad",
      company: "Thermax",
      quote:
        "From fear to confidence — Placement Spark is the reason behind my placement.",
      rating: 5,
    },
  ];

  const quotes = [
    {
      text: "Success is not for the intelligent — it is for the prepared.",
      color: "from-brand-red",
    },
    {
      text: "Either transform or get replaced — the choice is yours.",
      color: "from-brand-blue",
    },
    {
      text: "If interviews scare you, corporate life will be worse. Train now.",
      color: "from-brand-yellow",
    },
    {
      text: "Your biggest weakness is the preparation you keep postponing.",
      color: "from-brand-red",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section
      id="testimonials"
      className="py-20 md:py-32 bg-brand-black relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-in">
          <h2 className="heading-section mb-2">Student Success Stories</h2>
          <p className="text-lg text-brand-white text-opacity-70">
            Real Transformations. Real Careers.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="feature-card relative p-8 text-center">
            {/* Testimonial */}
            <div className="animate-fade-in">
              <p className="text-2xl font-bold text-brand-white mb-6 italic">
                "{testimonials[currentTestimonial].quote}"
              </p>

              <div className="text-brand-red font-bold text-lg mb-2">
                {testimonials[currentTestimonial].name}
              </div>
              <div className="inline-block px-4 py-2 bg-brand-red bg-opacity-20 border border-brand-red border-opacity-30 rounded-full text-sm">
                {testimonials[currentTestimonial].company}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-brand-red rounded-full flex items-center justify-center hover:bg-red-500 transition-colors"
            >
              <FaChevronLeft className="text-brand-white" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-brand-red rounded-full flex items-center justify-center hover:bg-red-500 transition-colors"
            >
              <FaChevronRight className="text-brand-white" />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentTestimonial
                      ? "bg-brand-red w-8"
                      : "bg-brand-white bg-opacity-30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Verified Feedback Section */}
        <div className="mb-20 animate-in">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">
              Student Feedback
            </h3>
            <p className="text-brand-white text-opacity-60">
              Authentic testimonials from our community
            </p>
          </div>

          {/* Feedback Cards */}
          <div className="max-w-2xl mx-auto">
            <div className="glass-effect p-8 text-center border border-brand-blue border-opacity-20">
              <div className="bg-brand-card rounded-lg p-8 mb-4">
                <p className="text-brand-white mb-4">
                  "The guidance was exceptional. I went from nervous to confident in just weeks."
                </p>
                <p className="text-sm text-brand-blue">- Rahul M., Placed at TCS</p>
              </div>
              <a
                href="https://chat.whatsapp.com/KkCyg76GqpXIvoKIktmk3Q"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-3 bg-brand-blue hover:bg-blue-600 text-brand-white font-semibold rounded-lg transition-all"
              >
                Join Our WhatsApp Community
              </a>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 md:gap-6 mb-20">
          <div className="stats-card text-center animate-in">
            <div className="text-4xl font-bold text-brand-red mb-2">27+</div>
            <p className="text-sm text-brand-white text-opacity-60">
              Success Stories
            </p>
          </div>
          <div className="stats-card text-center animate-in stagger-1">
            <div className="text-4xl font-bold text-brand-yellow mb-2">95%</div>
            <p className="text-sm text-brand-white text-opacity-60">
              Interview Success Rate
            </p>
          </div>
          <div className="stats-card text-center animate-in stagger-2">
            <div className="text-4xl font-bold text-brand-blue mb-2">5 Wks</div>
            <p className="text-sm text-brand-white text-opacity-60">
              Transformation
            </p>
          </div>
        </div>

        {/* Motivational Quote Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {quotes.map((quote, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${quote.color} to-brand-black p-8 rounded-xl border border-brand-white border-opacity-10 animate-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-xl font-bold text-brand-white italic">
                "{quote.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

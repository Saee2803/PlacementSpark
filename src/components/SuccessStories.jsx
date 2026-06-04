import { FaCheckCircle } from "react-icons/fa";
import { URLS } from "../config/urls";

export default function SuccessStories() {
  const stories = [
    {
      id: 1,
      name: "Aditya Sharma",
      branch: "Chemical Engineering",
      company: "Lubrizol",
      position: "Process Engineer",
      before: "❌ No confidence in interviews",
      after: "✅ Selected at Lubrizol",
      image: "https://via.placeholder.com/200x200?text=Aditya",
      companyLogo: "https://via.placeholder.com/100x50?text=Lubrizol"
    },
    {
      id: 2,
      name: "Priya Joshi",
      branch: "Chemical Engineering",
      company: "Thermax",
      position: "Production Engineer",
      before: "❌ Weak technical knowledge",
      after: "✅ Cleared 3 rounds at Thermax",
      image: "https://via.placeholder.com/200x200?text=Priya",
      companyLogo: "https://via.placeholder.com/100x50?text=Thermax"
    },
    {
      id: 3,
      name: "Rohit Patil",
      branch: "Chemical Engineering",
      company: "Reliance",
      position: "Senior Process Engineer",
      before: "❌ Failed 5 interviews before",
      after: "✅ Got 15 LPA offer at Reliance",
      image: "https://via.placeholder.com/200x200?text=Rohit",
      companyLogo: "https://via.placeholder.com/100x50?text=Reliance"
    },
    {
      id: 4,
      name: "Sneha Desai",
      branch: "Chemical Engineering",
      company: "Worley",
      position: "Design Engineer",
      before: "❌ Poor communication skills",
      after: "✅ Promoted within 6 months at Worley",
      image: "https://via.placeholder.com/200x200?text=Sneha",
      companyLogo: "https://via.placeholder.com/100x50?text=Worley"
    },
  ];

  return (
    <section id="success-stories" className="py-20 md:py-32 lg:py-40 2xl:py-48 bg-brand-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-red via-brand-black to-brand-blue opacity-10"></div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-20 lg:mb-24 2xl:mb-32 animate-in">
          <h2 className="heading-section mb-4 lg:mb-6 2xl:mb-8">Success Stories 🚀</h2>
          <p className="text-lg lg:text-xl 2xl:text-2xl text-brand-white text-opacity-70 max-w-3xl lg:max-w-4xl 2xl:max-w-5xl mx-auto">
            Real students. Real transformations. Real job offers.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 2xl:gap-10 max-w-7xl lg:max-w-6xl 2xl:max-w-full mx-auto">
          {stories.map((story, index) => (
            <div
              key={story.id}
              className="feature-card bg-brand-card border border-brand-red border-opacity-30 overflow-hidden animate-in hover:border-brand-red hover:border-opacity-100 hover:shadow-xl hover:shadow-red-500/20 hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Student Image */}
              <div className="relative h-48 lg:h-56 2xl:h-64 bg-gradient-to-b from-brand-blue to-brand-red overflow-hidden">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Company Logo Badge */}
                <div className="absolute top-2 right-2 bg-brand-black bg-opacity-80 p-2 lg:p-3 2xl:p-4 rounded-lg shadow-lg">
                  <img
                    src={story.companyLogo}
                    alt={story.company}
                    className="h-8 lg:h-10 2xl:h-12 w-auto"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-7 2xl:p-8">
                {/* Student Info */}
                <h3 className="text-xl lg:text-2xl 2xl:text-3xl font-bold text-brand-white mb-2 lg:mb-3 2xl:mb-4">
                  {story.name}
                </h3>
                <p className="text-sm lg:text-base 2xl:text-lg text-brand-yellow font-semibold mb-3 lg:mb-4 2xl:mb-5">
                  {story.company}
                </p>
                <p className="text-xs lg:text-sm 2xl:text-base text-brand-white text-opacity-60 mb-5 lg:mb-6 2xl:mb-7">
                  {story.position}
                </p>

                {/* Before/After */}
                <div className="space-y-3 lg:space-y-4 2xl:space-y-5 mb-5 lg:mb-6 2xl:mb-7">
                  <div className="flex items-start gap-2 lg:gap-3 2xl:gap-4 text-sm lg:text-base 2xl:text-lg">
                    <span className="text-brand-red font-bold flex-shrink-0">❌</span>
                    <span className="text-brand-white text-opacity-70">
                      {story.before}
                    </span>
                  </div>
                  <div className="flex items-start gap-2 lg:gap-3 2xl:gap-4 text-sm lg:text-base 2xl:text-lg">
                    <span className="text-brand-yellow font-bold flex-shrink-0">✅</span>
                    <span className="text-brand-white font-semibold">
                      {story.after}
                    </span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 text-brand-yellow text-sm lg:text-base 2xl:text-lg">
                  ⭐⭐⭐⭐⭐ <span className="text-brand-white ml-2">Recommended</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20 lg:mt-24 2xl:mt-32 animate-in">
          <p className="text-lg lg:text-xl 2xl:text-2xl text-brand-white mb-6 lg:mb-8 2xl:mb-10">
            Be the next success story. <span className="text-brand-red font-bold">27+ students</span> have already transformed.
          </p>
          <button 
            onClick={() => {
              if (URLS.isPlaceholder(URLS.REGISTRATION_FORM)) {
                URLS.showConfigMessage();
                return;
              }
              window.open(URLS.REGISTRATION_FORM, "_blank");
            }}
            className="btn-primary text-base lg:text-lg 2xl:text-xl py-3 lg:py-4 2xl:py-5 px-8 lg:px-12 2xl:px-16 font-semibold hover:shadow-lg">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
}

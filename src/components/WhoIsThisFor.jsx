import {
    FaBriefcase,
    FaCalendarAlt,
    FaTrophy,
    FaUserGraduate,
} from "react-icons/fa";

export default function WhoIsThisFor() {
  const audience = [
    {
      icon: <FaUserGraduate size={40} />,
      title: "Engineering Students",
      description: "Pre-placement training for any branch and year.",
    },
    {
      icon: <FaCalendarAlt size={40} />,
      title: "Final Year Students",
      description: "Maximize your placement cycle with proper preparation.",
    },
    {
      icon: <FaBriefcase size={40} />,
      title: "Fresh Graduates",
      description: "Land your first job with confidence and strategy.",
    },
    {
      icon: <FaTrophy size={40} />,
      title: "Serious About Placements",
      description: "Committed to preparing for top-tier companies.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-brand-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-in">
          <h2 className="heading-section text-brand-black mb-4">
            Built For Students Like You
          </h2>
          <p className="text-lg text-brand-black text-opacity-70">
            Whether you're starting early or making a last push, Placement Spark
            fits your needs
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audience.map((item, index) => (
            <div
              key={index}
              className="feature-card bg-brand-card border-brand-blue border-opacity-20 text-center hover:border-opacity-50 transition-all duration-300 animate-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-brand-red mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-white mb-3">
                {item.title}
              </h3>
              <p className="text-brand-white text-opacity-70">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="max-w-3xl mx-auto mt-16 glass-effect p-8 text-center">
          <p className="text-lg text-brand-white mb-4">
            <strong>NOT just for top branches.</strong> Our program works for
            every engineering student — Chemical, Mechanical, Civil, Electrical,
            Electronics, IT, CSE, and more.
          </p>
          <p className="text-brand-white text-opacity-80">
            What matters is your commitment. If you're ready to prepare
            seriously, we're ready to guide you.
          </p>
        </div>
      </div>
    </section>
  );
}

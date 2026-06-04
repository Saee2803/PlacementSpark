
import relianceLogo from "../assets/logos/reliance.jpeg";
import thermaxLogo from "../assets/logos/thermax.jpeg";
import lubrizolLogo from "../assets/logos/lubrizol.jpeg";
import worleyLogo from "../assets/logos/worley.jpeg";
import uplLogo from "../assets/logos/upl.jpeg";
import aartiLogo from "../assets/logos/aarti.jpeg";
import tatLogo from "../assets/logos/tata-chemicals.jpeg";

export default function About() {
  const companies = [
    { name: "Reliance", logo: relianceLogo },
    { name: "Thermax", logo: thermaxLogo },
    { name: "Lubrizol", logo: lubrizolLogo },
    { name: "Worley", logo: worleyLogo },
    { name: "UPL", logo: uplLogo },
    { name: "Aarti Industries", logo: aartiLogo },
    { name: "Tata Chemicals", logo: tatLogo },
  ];

  const features = [
    {
      title: "Interview Gap",
      description: "Students excel technically but lack interview confidence and communication skills.",
    },
    {
      title: "No Mentorship",
      description: "No real guidance on how to approach interviews and placement strategies.",
    },
    {
      title: "Unstructured Prep",
      description: "No clear roadmap. Students waste time on irrelevant preparation.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 lg:py-40 2xl:py-48 bg-brand-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20 lg:mb-24 2xl:mb-32 animate-in">
          <h2 className="heading-section text-brand-black mb-4 lg:mb-6 2xl:mb-8">
            Why Placement Spark?
          </h2>
          <p className="subheading text-brand-black text-opacity-70 max-w-3xl lg:max-w-4xl 2xl:max-w-5xl mx-auto">
            Bridge the gap between college knowledge and corporate readiness with structured preparation and real mentorship.
          </p>
        </div>

        {/* Problems & Solutions */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 2xl:gap-10 mb-24 lg:mb-32 2xl:mb-40">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card bg-brand-card border-2 border-brand-red border-opacity-30 hover:border-opacity-60 hover:shadow-lg hover:shadow-red-500/20 animate-in p-6 lg:p-8 2xl:p-10 transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-lg lg:text-xl 2xl:text-2xl font-bold text-brand-white mb-3 lg:mb-4 2xl:mb-5">
                {feature.title}
              </h3>
              <p className="text-brand-white text-opacity-80 text-sm lg:text-base 2xl:text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Companies Section */}
        <div className="border-t border-brand-black border-opacity-10 pt-20 lg:pt-24 2xl:pt-32">
          <h3 className="text-center text-brand-black font-bold mb-10 lg:mb-12 2xl:mb-16 text-xl lg:text-2xl 2xl:text-3xl">
            Students Interviewed At
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 lg:gap-6 2xl:gap-8">
            {companies.map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 lg:p-6 2xl:p-8 bg-brand-black bg-opacity-5 rounded-xl lg:rounded-2xl border-2 border-brand-black border-opacity-10 hover:border-brand-blue hover:border-opacity-50 hover:shadow-lg hover:shadow-blue-500/20 hover:bg-opacity-10 transition-all duration-300 group overflow-hidden"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-10 lg:h-12 2xl:h-14 w-auto object-contain group-hover:scale-125 transition-transform duration-300 filter group-hover:grayscale-0 grayscale"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


export default function Companies() {
  const companies = [
    { name: "Reliance", logo: "https://via.placeholder.com/150x80?text=Reliance" },
    { name: "Thermax", logo: "https://via.placeholder.com/150x80?text=Thermax" },
    { name: "Lubrizol", logo: "https://via.placeholder.com/150x80?text=Lubrizol" },
    { name: "Worley", logo: "https://via.placeholder.com/150x80?text=Worley" },
    { name: "Tata Chemicals", logo: "https://via.placeholder.com/150x80?text=Tata+Chemicals" },
    { name: "UPL", logo: "https://via.placeholder.com/150x80?text=UPL" },
  ];

  return (
    <section className="py-16 md:py-24 bg-brand-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-brand-black mb-2">
            Students Preparing For Opportunities At
          </h3>
          <p className="text-brand-black text-opacity-60">
            Join 500+ engineers who landed jobs at top companies
          </p>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-brand-card rounded-lg border border-brand-black border-opacity-10 hover:border-brand-red hover:border-opacity-30 transition-all"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

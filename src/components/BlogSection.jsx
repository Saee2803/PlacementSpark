import { FaArrowRight } from "react-icons/fa";

export default function BlogSection() {
  const blogs = [
    {
      id: 1,
      title: "Chemical Engineering Interview Questions",
      excerpt: "Master the top 50 technical questions asked in chemical engineering interviews with detailed explanations.",
      category: "Interview Prep",
      readTime: "8 min read",
      image: "https://via.placeholder.com/400x250?text=Interview+Questions",
    },
    {
      id: 2,
      title: "Reliance Interview Experience",
      excerpt: "Complete walkthrough of Reliance's interview process, questions asked, and how our students cracked it.",
      category: "Success Story",
      readTime: "6 min read",
      image: "https://via.placeholder.com/400x250?text=Reliance+Interview",
    },
    {
      id: 3,
      title: "How To Crack Lubrizol Interview",
      excerpt: "Step-by-step guide to acing Lubrizol's technical and HR rounds with insider tips from placed students.",
      category: "Company Guide",
      readTime: "7 min read",
      image: "https://via.placeholder.com/400x250?text=Lubrizol+Guide",
    },
    {
      id: 4,
      title: "Top Resume Mistakes Freshers Make",
      excerpt: "Avoid these 10 common resume mistakes that get freshers rejected before they even get called for interviews.",
      category: "Resume Tips",
      readTime: "5 min read",
      image: "https://via.placeholder.com/400x250?text=Resume+Mistakes",
    },
  ];

  return (
    <section className="py-20 md:py-32 lg:py-40 2xl:py-48 bg-brand-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20 2xl:mb-28 animate-in">
          <h2 className="heading-section text-brand-black mb-4 lg:mb-6 2xl:mb-8">
            Latest from Our Blog
          </h2>
          <p className="text-base lg:text-lg 2xl:text-xl text-brand-black text-opacity-70 max-w-2xl mx-auto">
            Expert insights, interview tips, and placement success stories
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 2xl:gap-10">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="feature-card bg-brand-card border-2 border-brand-black border-opacity-10 hover:border-brand-blue hover:border-opacity-40 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-40 lg:h-48 bg-brand-black bg-opacity-20">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-5 lg:p-6 2xl:p-7 flex-1 flex flex-col">
                {/* Category & Read Time */}
                <div className="flex items-center justify-between mb-3 lg:mb-4">
                  <span className="text-xs lg:text-xs 2xl:text-sm font-bold text-brand-blue uppercase tracking-wider">
                    {blog.category}
                  </span>
                  <span className="text-xs text-brand-white text-opacity-60">
                    {blog.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base lg:text-lg 2xl:text-xl font-bold text-brand-white mb-3 lg:mb-4 group-hover:text-brand-yellow transition-colors line-clamp-2">
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs lg:text-sm 2xl:text-base text-brand-white text-opacity-70 mb-4 lg:mb-5 2xl:mb-6 line-clamp-3 flex-1">
                  {blog.excerpt}
                </p>

                {/* Read More */}
                <div className="flex items-center gap-2 text-brand-blue font-semibold text-sm lg:text-base group-hover:gap-3 transition-all">
                  Read More
                  <FaArrowRight size={14} />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 lg:mt-16 2xl:mt-20">
          <button className="btn-outline text-sm lg:text-base 2xl:text-lg py-3 px-8 lg:py-4 lg:px-10 2xl:py-4 2xl:px-12">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
}

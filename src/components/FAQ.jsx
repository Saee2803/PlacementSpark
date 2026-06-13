import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { URLS } from "../config/urls";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is it only for Chemical Engineering?",
      answer:
        "We started with Chemical Engineering and are expanding to all branches. Currently, our programs are specialized for Chemical Engineering students, but the frameworks apply to all technical disciplines.",
    },
    {
      question: "Is the program online or offline?",
      answer:
        "Our program is 100% online with flexible scheduling. You can attend live sessions from anywhere, anytime. All sessions are recorded for lifetime access.",
    },
    {
      question: "What is the duration of the program?",
      answer:
        "The Foundation Plan is 3 months of intensive training. You can also extend or take custom batches based on your needs.",
    },
    {
      question: "What if I don't like the program?",
      answer:
        "Every enrollment comes with a 7-Day Risk-Free Guarantee. If you feel the program is not suitable for you within the first 7 days, simply contact our team and request a refund. Your refund will be processed within 3-5 business working days. No questions asked.",
    },
    {
      question: "Will I get mock interviews?",
      answer:
        "Absolutely! Every paid plan includes mock interviews. The Solo, Buddy, and Squad plans all include multiple mock interviews (HR + Technical). All feedback is personalized and tailored to your needs.",
    },
    {
      question: "How does the 7-Day Money Back Guarantee work?",
      answer:
        "After you enroll and pay the program fee, you get full access to all mentorship, mock interviews, roadmap sessions and placement preparation. If you're not satisfied within 7 days, request a refund and we'll process it within 3-5 business days. It's that simple.",
    },
    {
      question: "Do I need a credit card to access the program?",
      answer:
        "Yes, you'll need to pay the program fee to enroll. We accept all major credit cards, debit cards, and UPI payments. Your payment is secure and protected.",
    },
    {
      question: "How many batches run per month?",
      answer:
        "We run new batches every 2 weeks. You can join the next batch immediately or wait for your preferred schedule.",
    },
  ];

  return (
    <section id="faq" className="py-12 sm:py-16 md:py-24 lg:py-32 2xl:py-40 bg-brand-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-red opacity-5"></div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20 2xl:mb-24 animate-in px-4 sm:px-0">
          <h2 className="heading-section mb-3 sm:mb-4 md:mb-5 lg:mb-6 2xl:mb-8">Frequently Asked Questions</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl text-brand-white/70 max-w-2xl sm:max-w-3xl md:max-w-4xl 2xl:max-w-5xl mx-auto px-2">
            Everything you need to know about Placement Spark
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl md:max-w-5xl lg:max-w-6xl 2xl:max-w-7xl mx-auto space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 2xl:space-y-7 px-4 sm:px-0">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="feature-card bg-brand-card border-2 border-brand-red/20 hover:border-brand-red/40 rounded-lg sm:rounded-xl md:rounded-2xl 2xl:rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-red-500/20 animate-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-4 sm:p-5 md:p-6 lg:p-8 2xl:p-10 hover:bg-brand-black/20 transition-colors gap-3"
              >
                <h3 className="text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-xl font-bold text-brand-white text-left leading-snug">
                  {faq.question}
                </h3>
                <FaChevronDown
                  className={`text-brand-red flex-shrink-0 transition-transform duration-300 text-sm sm:text-base md:text-lg lg:text-xl ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  size={20}
                />
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-4 sm:px-5 md:px-6 lg:px-8 2xl:px-10 pb-4 sm:pb-5 md:pb-6 lg:pb-8 2xl:pb-10 border-t border-brand-red/20 animate-in fade-in">
                  <p className="text-brand-white/80 text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-xl leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-14 md:mt-16 lg:mt-20 2xl:mt-24 animate-in px-4 sm:px-0">
          <p className="text-brand-white/70 mb-4 sm:mb-5 md:mb-6 lg:mb-8 text-sm sm:text-base md:text-lg">
            Didn't find your answer?
          </p>
          <button
            onClick={() =>
              window.open(URLS.WHATSAPP_QUESTION, "_blank")
            }
            className="btn-primary text-xs sm:text-sm md:text-base lg:text-lg py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 lg:px-10"
          >
            Chat with us on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}

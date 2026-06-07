import { useState } from "react";
import { FaEnvelope, FaLinkedin, FaPhone, FaWhatsapp } from "react-icons/fa";
import emailjs from "emailjs-com";

/**
 * Contact Form Component with EmailJS Integration
 * 
 * SETUP INSTRUCTIONS:
 * 1. Visit https://www.emailjs.com
 * 2. Sign up and create an account
 * 3. Add Gmail service:
 *    - Service ID: gmail
 *    - Email: Career.placementspark@gmail.com
 * 4. Create Email Template:
 *    - Template ID: contact_form_template
 *    - Template Body:
 *      Name: {{from_name}}
 *      Email: {{from_email}}
 *      Phone: {{phone}}
 *      Branch: {{branch}}
 *      Year: {{current_year}}
 *      Message:
 *      {{message}}
 * 5. Get your Public Key from EmailJS dashboard
 * 6. Replace 'YOUR_EMAILJS_PUBLIC_KEY' below with your actual key
 * 7. Test the form to verify email delivery
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    currentYear: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [errors, setErrors] = useState({});

  // Initialize EmailJS
  emailjs.init("YOUR_EMAILJS_PUBLIC_KEY");

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required";
    } else if (!/^[0-9\s\-+()]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    
    
    
    if (!formData.currentYear) {
      newErrors.currentYear = "Current Year is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Email template parameters
      const emailParams = {
        to_email: "Career.placementspark@gmail.com",
        from_name: formData.fullName,
        from_email: formData.email,
        phone: formData.phone,
        current_year: formData.currentYear,
        message: formData.message,
      };

      // Send email using EmailJS
      await emailjs.send(
        "YOUR_EMAILJS_SERVICE_ID",
        "YOUR_EMAILJS_TEMPLATE_ID",
        emailParams
      );

      // Success state
      setSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        currentYear: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error("Email send error:", err);
      setError("Failed to send message. Please try again or contact us directly.");
      setTimeout(() => {
        setError(null);
      }, 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 lg:py-32 2xl:py-40 bg-brand-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20 2xl:mb-24 animate-in px-4 sm:px-0">
          <h2 className="heading-section text-brand-black mb-3 sm:mb-4 md:mb-5 2xl:mb-6">
            Ready To Transform Your Career?
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-xl text-brand-black/70 max-w-2xl sm:max-w-3xl md:max-w-4xl 2xl:max-w-5xl mx-auto px-2">
            Fill out the form or reach out directly. We respond within 24 hours.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-8 lg:gap-10 2xl:gap-12 max-w-4xl md:max-w-5xl lg:max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-0">
          {/* Left Card - Contact Info */}
          <div className="animate-in">
            <div className="feature-card bg-brand-card h-full p-5 sm:p-6 md:p-8 lg:p-10 2xl:p-12 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl 2xl:rounded-4xl">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold text-brand-white mb-6 sm:mb-8 md:mb-10 lg:mb-12 2xl:mb-14">
                Get In Touch
              </h3>

              {/* Email */}
              <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 2xl:mb-14">
                <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3 lg:mb-4 2xl:mb-5">
                  <FaEnvelope className="text-brand-red text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl flex-shrink-0" />
                  <p className="text-xs sm:text-xs md:text-sm lg:text-base 2xl:text-lg font-bold text-brand-white/60 uppercase tracking-wide">
                    EMAIL
                  </p>
                </div>
                <a
                  href="mailto:Career.placementspark@gmail.com"
                  className="text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-xl text-brand-blue hover:text-brand-yellow transition-colors font-semibold hover:underline break-all"
                >
                  Career.placementspark@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 2xl:mb-14">
                <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3 lg:mb-4 2xl:mb-5">
                  <FaPhone className="text-brand-red text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl flex-shrink-0" />
                  <p className="text-xs sm:text-xs md:text-sm lg:text-base 2xl:text-lg font-bold text-brand-white/60 uppercase tracking-wide">
                    PHONE
                  </p>
                </div>
                <div className="space-y-1.5 sm:space-y-2 md:space-y-3 lg:space-y-4 2xl:space-y-5">
                  <a
                    href="tel:+917057606291"
                    className="text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-xl text-brand-blue hover:text-brand-yellow transition-colors flex items-center gap-2 font-semibold hover:underline"
                  >
                    +91 7057606291
                  </a>
                  <a
                    href="tel:+918793953155"
                    className="text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-xl text-brand-blue hover:text-brand-yellow transition-colors flex items-center gap-2 font-semibold hover:underline"
                  >
                    +91 8793953155
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 2xl:mb-14">
                <p className="text-xs sm:text-xs md:text-sm lg:text-base 2xl:text-lg font-bold text-brand-white/60 mb-3 sm:mb-4 md:mb-5 lg:mb-6 2xl:mb-8 uppercase tracking-wide">
                  FOLLOW US
                </p>
                <div className="flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 2xl:gap-8">
                  <a
                    href="https://chat.whatsapp.com/KkCyg76GqpXIvoKIktmk3Q"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-14 md:h-14 lg:w-16 lg:h-16 2xl:w-20 2xl:h-20 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-brand-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-green-500/50 flex-shrink-0"
                  >
                    <FaWhatsapp size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                  </a>
                  <a
                    href="https://www.linkedin.com/posts/placement-spark_placementspark-chemicalengineering-freshersjobs-activity-7352289653548371971-rkc0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-14 md:h-14 lg:w-16 lg:h-16 2xl:w-20 2xl:h-20 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-brand-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-600/50 flex-shrink-0"
                  >
                    <FaLinkedin size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="pt-6 sm:pt-8 md:pt-10 lg:pt-12 2xl:pt-14 border-t border-brand-white/10">
                <p className="text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-xl text-brand-white/80 mb-2 sm:mb-3 lg:mb-4 2xl:mb-5">
                  <strong className="text-brand-yellow">Response Time:</strong> Within 24 hours
                </p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-xl text-brand-white/80">
                  <strong className="text-brand-yellow">Best Time to Call:</strong> 10 AM - 6 PM IST
                </p>
              </div>
            </div>
          </div>

          {/* Right Card - Contact Form */}
          <div className="animate-in stagger-1">
            <div className="feature-card bg-brand-card p-5 sm:p-6 md:p-8 lg:p-10 2xl:p-12 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl 2xl:rounded-4xl">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-7 2xl:space-y-8">
                {/* Full Name */}
                <div>
                  <label className="block text-xs sm:text-xs md:text-sm lg:text-base 2xl:text-lg font-bold text-brand-white mb-2 md:mb-3 lg:mb-4 2xl:mb-5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full px-3 sm:px-4 md:px-5 lg:px-6 2xl:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 2xl:py-5 bg-brand-black border rounded-lg text-brand-white placeholder-brand-white/30 focus:outline-none transition-colors text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-xl ${
                      errors.fullName
                        ? "border-red-500"
                        : "border-brand-white/20 focus:border-brand-blue"
                    }`}
                    placeholder="Your name"
                  />
                  {errors.fullName && (
                    <p className="text-red-400 text-xs sm:text-xs md:text-sm lg:text-base 2xl:text-lg mt-1.5">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs sm:text-xs md:text-sm lg:text-base 2xl:text-lg font-bold text-brand-white mb-2 md:mb-3 lg:mb-4 2xl:mb-5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-3 sm:px-4 md:px-5 lg:px-6 2xl:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 2xl:py-5 bg-brand-black border rounded-lg text-brand-white placeholder-brand-white/30 focus:outline-none transition-colors text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-xl ${
                      errors.email
                        ? "border-red-500"
                        : "border-brand-white/20 focus:border-brand-blue"
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs sm:text-xs md:text-sm lg:text-base 2xl:text-lg mt-1.5">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs sm:text-xs md:text-sm lg:text-base 2xl:text-lg font-bold text-brand-white mb-2 md:mb-3 lg:mb-4 2xl:mb-5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-3 sm:px-4 md:px-5 lg:px-6 2xl:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 2xl:py-5 bg-brand-black border rounded-lg text-brand-white placeholder-brand-white/30 focus:outline-none transition-colors text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-xl ${
                      errors.phone
                        ? "border-red-500"
                        : "border-brand-white/20 focus:border-brand-blue"
                    }`}
                    placeholder="+91"
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-xs sm:text-xs md:text-sm lg:text-base 2xl:text-lg mt-1.5">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Current Year */}
                <div>
                  <label className="block text-xs sm:text-xs md:text-sm lg:text-base 2xl:text-lg font-bold text-brand-white mb-2 md:mb-3 lg:mb-4 2xl:mb-5">
                    Current Year *
                  </label>
                  <select
                    name="currentYear"
                    value={formData.currentYear}
                    onChange={handleChange}
                    className={`form-select w-full px-3 sm:px-4 md:px-5 lg:px-6 2xl:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 2xl:py-5 bg-brand-black border rounded-lg text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-xl font-medium text-brand-white focus:outline-none transition-colors ${
                      errors.currentYear
                        ? "border-red-500"
                        : "border-brand-white/20 focus:border-brand-blue"
                    }`}
                  >
                    <option value="">Select year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                    <option value="Final Year">Final Year</option>
                    <option value="Graduate">Graduate / Fresher</option>
                  </select>
                  {errors.currentYear && (
                    <p className="text-red-400 text-xs sm:text-xs md:text-sm lg:text-base 2xl:text-lg mt-1.5">
                      {errors.currentYear}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs sm:text-xs md:text-sm lg:text-base 2xl:text-lg font-bold text-brand-white mb-2 md:mb-3 lg:mb-4 2xl:mb-5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-3 sm:px-4 md:px-5 lg:px-6 2xl:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 2xl:py-5 bg-brand-black border border-brand-white/20 rounded-lg text-brand-white placeholder-brand-white/30 focus:outline-none focus:border-brand-blue transition-colors resize-none text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-xl"
                    placeholder="Tell us about your placement goals..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`btn-primary w-full flex items-center justify-center gap-3 transition-all py-2.5 sm:py-3 md:py-4 lg:py-5 2xl:py-6 text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-xl font-semibold rounded-lg md:rounded-lg lg:rounded-xl 2xl:rounded-2xl ${
                    loading ? "opacity-75 cursor-not-allowed" : "hover:shadow-lg"
                  }`}
                >
                  {loading ? (
                    <>
                      <span className="inline-block w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 2xl:w-7 2xl:h-7 border-2 border-brand-white border-t-transparent rounded-full animate-spin"></span>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>

                {/* Success Message */}
                {submitted && (
                  <div className="p-3 sm:p-4 md:p-5 lg:p-6 2xl:p-8 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-xl animate-fade-in">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl flex-shrink-0">🎉</span>
                      <div>
                        <p className="font-bold">Thank You!</p>
                        <p>Your message has been received successfully.</p>
                        <p>Our team will contact you within 24 hours.</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {error && (
                  <div className="p-3 sm:p-4 md:p-5 lg:p-6 2xl:p-8 bg-red-500/20 border border-red-500 rounded-lg text-red-400 text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-xl animate-fade-in">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl flex-shrink-0">❌</span>
                      <p>{error}</p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

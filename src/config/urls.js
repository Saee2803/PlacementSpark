// External URLs Configuration
// Update these with your actual URLs

export const URLS = {
  // Google Forms
  REGISTRATION_FORM: "https://docs.google.com/forms/d/e/1FAIpQLSdCwpfXOtBNqvE1YGrOfcm_522j-3kc-eB_ocuHQeAaDutqSg/viewform",
  
  // WhatsApp
  WHATSAPP_PHONE: "+919876543210",
  WHATSAPP_COUNSELLING: "https://wa.me/919876543210?text=Hi%20PlacementSpark!%20I%20want%20a%20free%20counselling%20session",
  WHATSAPP_HELP: "https://wa.me/919876543210?text=Hi%20PlacementSpark!%20I%20need%20help.",
  WHATSAPP_GROUP: "https://wa.me/919876543210?text=Hi%20PlacementSpark!%20I%20just%20registered%20for%20the%20program.",
  WHATSAPP_QUESTION: "https://wa.me/919876543210?text=Hi%20PlacementSpark!%20I%20have%20a%20question",
  
  // LinkedIn
  LINKEDIN_PAGE: "https://linkedin.com/company/placementspark",
  
  // Phone
  PHONE_CALL: "tel:+919876543210",

  // Google Form with plan parameter
  getFormWithPlan: (planName) => {
    const baseUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdCwpfXOtBNqvE1YGrOfcm_522j-3kc-eB_ocuHQeAaDutqSg/viewform";
    return `${baseUrl}?entry.selected_plan=${encodeURIComponent(planName)}`;
  },

  // Check if URL is a placeholder (not configured)
  isPlaceholder: (url) => {
    return url.includes("1FAIpQLSfExample") || url.includes("placementspark");
  },

  // Show config message
  showConfigMessage: () => {
    const message = `🔧 Configuration Required!\n\nPlease update your URLs in: src/config/urls.js\n\n✓ Replace REGISTRATION_FORM with your actual Google Form URL\n✓ Replace WHATSAPP_PHONE with your WhatsApp number\n✓ Replace LINKEDIN_PAGE with your LinkedIn profile\n\nYour Google Form URL should look like:\nhttps://docs.google.com/forms/d/e/YOUR_FORM_ID_HERE/viewform`;
    alert(message);
  }
};

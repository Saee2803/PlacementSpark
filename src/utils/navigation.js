// Utility function to scroll to a section
export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

// Handle navigation buttons
export const handleNavigationClick = (action) => {
  const navigationMap = {
    "join-program": "program",
    "start-journey": "program",
    "book-counselling": "contact",
    "free-trial": "curriculum",
    "enroll-foundation": "program",
    "enroll-ready": "program",
    "enroll-pro": "program",
    "start-steps": "program",
  };

  const targetSection = navigationMap[action];
  if (targetSection) {
    setTimeout(() => {
      scrollToSection(targetSection);
    }, 100);
  }
};

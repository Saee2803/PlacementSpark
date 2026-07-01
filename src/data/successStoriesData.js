import aartiLogo from "../assets/logos/aarti.jpeg";
import adaniLogo from "../assets/logos/Adani.png";
import finepacLogo from "../assets/logos/Finepac.png";
import laxmiLogo from "../assets/logos/Laxmi_Organic.jpg";
import lubrizolLogo from "../assets/logos/lubrizol.jpeg";
import relianceLogo from "../assets/logos/reliance.jpeg";
import tataLogo from "../assets/logos/tata-chemicals.jpeg";
import thermaxLogo from "../assets/logos/thermax.jpeg";
import uplLogo from "../assets/logos/upl.jpeg";
import worleyLogo from "../assets/logos/worley.jpeg";
import gpeLogo from "../assets/logos/GPE.png";
import kevaLogo from "../assets/logos/Keva.png";
import ltLogo from "../assets/logos/LT.png";

export const successStoriesData = [
  {
    id: 1,
    name: "Vishal Wagh",
    image: "/success-stories/Vishal Wagh.jpeg",
    studentPhotoAlt: "Vishal Wagh",
    company: "Adani",
    companyLogo: adaniLogo,
    position: "Graduate Engineer Trainee",
    testimonial:
      "PlacementSpark mentors guided me throughout my interview preparation and helped me gain confidence to crack the interview.",
    placementBadge: "✓ Placed at Adani",
    branch: "Chemical Engineering",
  },

  {
    id: 2,
    name: "Shashank Oza",
    image: "/success-stories/Shashank Oza.jpeg",
    studentPhotoAlt: "Shashank Oza",
    company: "Thermax",
    companyLogo: thermaxLogo,
    position: "Graduate Engineer Trainee",
    testimonial:
      "The mock interviews and one-to-one mentorship helped me understand the interview process and prepare effectively.",
    placementBadge: "✓ Placed at Thermax",
    branch: "Chemical Engineering",
  },

  {
    id: 3,
    name: "Manasi Joshi",
    image: "/success-stories/Manasi Joshi.jpeg",
    studentPhotoAlt: "Manasi Joshi",
    company: "Worley",
    companyLogo: worleyLogo,
    position: "Graduate Engineer Trainee",
    testimonial:
      "PlacementSpark gave me the right direction, confidence and interview guidance that helped me secure my placement.",
    placementBadge: "✓ Placed at Worley",
    branch: "Chemical Engineering",
  },

  {
    id: 4,
    name: "Akash",
    image: "/success-stories/Aakash.png",
    studentPhotoAlt: "Akash",
    company: "GPE - Gas Processing Equipment",
    companyLogo: gpeLogo,
    position: "Graduate Engineer Trainee",
    testimonial:
      "Resume reviews, mock interviews and mentor support made me interview ready and helped me get selected.",
    placementBadge: "✓ Placed at GPE",
    branch: "Chemical Engineering",
  },

  {
    id: 5,
    name: "Prathamesh Gite",
    image: "/success-stories/Prathamesh Gite.jpeg",
    studentPhotoAlt: "Prathamesh Gite",
    company: "Keva Fragrances",
    companyLogo: kevaLogo,
    position: "Graduate Engineer Trainee",
    testimonial:
      "The structured roadmap and regular mentor feedback improved my confidence throughout the placement journey.",
    placementBadge: "✓ Placed at Keva Fragrances",
    branch: "Chemical Engineering",
  },

  {
    id: 6,
    name: "Nirbhay",
    image: "/success-stories/Nirbhay Photo.png",
    studentPhotoAlt: "Nirbhay",
    company: "Finepac Structures Pvt Ltd",
    companyLogo: finepacLogo,
    position: "Graduate Engineer Trainee",
    testimonial:
      "PlacementSpark helped me prepare with confidence through interview practice and continuous mentor support.",
    placementBadge: "✓ Placed at Finepac Structures",
    branch: "Chemical Engineering",
  },

  {
    id: 7,
    name: "Prathamesh Patil",
    image: "/success-stories/placeholder.jpg",
    studentPhotoAlt: "Prathamesh Patil",
    company: "L&T",
    companyLogo: ltLogo,
    position: "Graduate Engineer Trainee",
    testimonial:
      "Guidance from PlacementSpark helped me prepare systematically for campus placements.",
    placementBadge: "✓ Placed at L&T",
    branch: "Chemical Engineering",
  },

  {
    id: 8,
    name: "Aditya Lamture",
    image: "/success-stories/placeholder.jpg",
    studentPhotoAlt: "Aditya Lamture",
    company: "Lubrizol",
    companyLogo: lubrizolLogo,
    position: "Graduate Engineer Trainee",
    testimonial:
      "The interview preparation sessions and resume guidance played an important role in my placement journey.",
    placementBadge: "✓ Placed at Lubrizol",
    branch: "Chemical Engineering",
  },

  {
    id: 9,
    name: "Vinay Mesare",
    image: "/success-stories/placeholder.jpg",
    studentPhotoAlt: "Vinay Mesare",
    company: "Laxmi Organics",
    companyLogo: laxmiLogo,
    position: "Graduate Engineer Trainee",
    testimonial:
      "PlacementSpark mentors helped me improve my preparation strategy and interview confidence.",
    placementBadge: "✓ Placed at Laxmi Organics",
    branch: "Chemical Engineering",
  },
];

// ===========================
// Statistics
// ===========================

export const statisticsConfig = {
  studentsNurtured: {
    label: "Students Nurtured",
    value: 120,
    prefix: "",
    suffix: "+",
    duration: 2000,
  },

  successStories: {
    label: "Success Stories",
    value: 27,
    prefix: "",
    suffix: "+",
    duration: 2000,
  },

  interviewSuccessRate: {
    label: "Interview Success Rate",
    value: 95,
    prefix: "",
    suffix: "%",
    duration: 2000,
  },

  highestPackage: {
    label: "Highest Package",
    value: 12,
    prefix: "",
    suffix: " LPA",
    duration: 2000,
  },
};

// ===========================
// Filter Options
// ===========================

export const filterOptions = [
  { id: "all", label: "All Companies" },
  { id: "adani", label: "Adani" },
  { id: "thermax", label: "Thermax" },
  { id: "worley", label: "Worley" },
  { id: "other", label: "Other Companies" },
];

// ===========================
// Filter Function
// ===========================

export const getStoriesByCompany = (company) => {
  if (company === "all") return successStoriesData;

  if (company === "other") {
    const mainCompanies = ["Adani", "Thermax", "Worley"];

    return successStoriesData.filter(
      (story) => !mainCompanies.includes(story.company)
    );
  }

  return successStoriesData.filter(
    (story) => story.company.toLowerCase() === company.toLowerCase()
  );
};

// ===========================
// Unique Companies
// ===========================

export const getUniqueCompanies = () => {
  return [...new Set(successStoriesData.map((story) => story.company))];
};
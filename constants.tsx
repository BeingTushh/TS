import React from 'react';
import { TestCategory, TeamMember, Testimonial, PopularTest, TimeSlot } from './types';
import { Icon } from './components/Icon'; 

// --- THIS SECTION HAS BEEN UPDATED ---
export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Book a Test', path: '/book-test' },
  // { name: 'Test Results', path: '/results' }, // This line has been removed
  { name: 'About Us', path: '/about' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'Reviews', path: '/reviews' },
];

export const TEST_CATEGORIES_DATA: TestCategory[] = [
  { 
    id: 'food', 
    name: 'Food Tests', 
    description: 'Comprehensive analysis of food products.', 
    icon: <Icon name="ArchiveBox" className="w-12 h-12 text-primary" />,
    popularTests: [
      { id: 'food-intolerance', name: 'Food Intolerance Test' },
      { id: 'food-allergy', name: 'Food Allergy (IgE) Test' },
      { id: 'nutrient-deficiency', name: 'Nutrient Deficiency Panel' },
      { id: 'blood-glucose', name: 'Blood Glucose & HbA1c' },
      { id: 'lipid-profile', name: 'Lipid Profile (Cholesterol & Triglycerides)' },
      { id: 'stool-analysis', name: 'Comprehensive Stool Analysis' },
    ],
    subTests: [
      { id: 'milk-dairy', name: 'Milk & Dairy Products', description: 'Testing for purity, adulterants, and nutritional content.' },
      { id: 'meat-poultry', name: 'Meat & Poultry', description: 'Analysis for pathogens, preservatives, and quality.' },
      { id: 'bakery-confectionery', name: 'Bakery & Confectionery', description: 'Checks for shelf-life, allergens, and safety.' },
      { id: 'spices-condiments', name: 'Spices & Condiments', description: 'Testing for authenticity, purity, and contaminants.' },
      { id: 'water-beverages', name: 'Water & Beverages', description: 'Potability and quality testing for packaged drinks.' },
    ]
  },
  { 
    id: 'pharma', 
    name: 'Pharmaceutical Tests', 
    description: 'Quality control for pharmaceutical products.', 
    icon: <Icon name="Beaker" className="w-12 h-12 text-primary" />,
    popularTests: [
      { id: 'pharma-purity', name: 'Purity & Potency Assay' },
      { id: 'pharma-stability', name: 'Stability Testing' },
      { id: 'pharma-dissolution', name: 'Dissolution Testing' },
    ],
    subTests: []
  },
  { 
    id: 'enviro', 
    name: 'Environment Tests', 
    description: 'Air, water, and soil quality testing.', 
    icon: <Icon name="BuildingLibrary" className="w-12 h-12 text-primary" />,
    popularTests: [
      { id: 'enviro-water', name: 'Water Quality Analysis' },
      { id: 'enviro-air', name: 'Air Quality Monitoring' },
      { id: 'enviro-soil', name: 'Soil Contaminant Testing' },
    ],
    subTests: []
  },
  { 
    id: 'rohs', 
    name: 'ROHS Compliance', 
    description: 'Testing for hazardous substances.', 
    icon: <Icon name="ShieldCheck" className="w-12 h-12 text-primary" />,
    popularTests: [],
    subTests: []
  },
  { 
    id: 'training', 
    name: 'Training/Internship', 
    description: 'Hands-on laboratory training programs.', 
    icon: <Icon name="AcademicCap" className="w-12 h-12 text-primary" />,
    popularTests: [],
    subTests: []
  },
  { 
    id: 'manpower', 
    name: 'Manpower Supply', 
    description: 'Providing skilled laboratory professionals.', 
    icon: <Icon name="UserGroup" className="w-12 h-12 text-primary" />,
    popularTests: [],
    subTests: []
  },
];

export const TEAM_MEMBERS_DATA: TeamMember[] = [
  { id: '1', name: 'Dr. Evelyn Reed', title: 'Chief Medical Officer', bio: 'Oversees all clinical operations and research.', imageUrl: '../assets/Image_fx (12).jpg', credentials: ['MD, PhD'] },
  { id: '2', name: 'John Smith', title: 'Head of Laboratory', bio: 'Manages lab technicians and quality control.', imageUrl: '../assets/Image_fx (11).jpg', credentials: ['MSc, Lab Sciences'] },
  { id: '3', name: 'Alice Brown', title: 'Senior Geneticist', bio: 'Specializes in advanced DNA sequencing.', imageUrl: '../assets/Image_fx (8).jpg', credentials: ['PhD, Genetics'] },
  { id: '4', name: 'Robert Davis', title: 'Patient Care Coordinator', bio: 'Ensures a smooth experience for all patients.', imageUrl: '../assets/Image_fx (7).jpg' },
];

export const LAB_CERTIFICATIONS = [
  'ISO 15189 Accredited',
  'CLIA Certified',
  'College of American Pathologists (CAP) Member',
  'State Health Department Licensed',
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  { id: '1', name: 'Sarah L.', service: 'Blood Test', rating: 5, comment: 'Quick, professional, and the results were easy to understand. Highly recommend!', date: '2024-07-15' },
  { id: '2', name: 'Mike P.', service: 'DNA Test', rating: 4, comment: 'The DNA insights were fascinating. Process was smooth, though results took a bit longer than expected.', date: '2024-06-20' },
  { id: '3', name: 'Jessica K.', service: 'COVID-19 Test', rating: 5, comment: 'Needed a PCR test for travel. Got my results back in less than 24 hours. Lifesavers!', date: '2024-07-01' },
  { id: '4', name: 'David S.', service: 'Allergy Test', rating: 5, comment: 'Very thorough allergy testing. The staff was friendly and explained everything clearly.', date: '2024-06-25' },
  { id: '5', name: 'Emily R.', service: 'Hormone Panel', rating: 4, comment: 'Comprehensive hormone panel. Results helped my doctor a lot. A bit of a wait, but worth it.', date: '2024-07-10' },
  { id: '6', name: 'Chris B.', service: 'Urine Analysis', rating: 5, comment: 'Fast and efficient urine analysis. Got my results quickly and the online portal is very user-friendly.', date: '2024-07-03' },
];

export const TIME_SLOTS_DATA: TimeSlot[] = [
  { id: 'ts1', time: '09:00 AM', available: true }, { id: 'ts2', time: '09:30 AM', available: true },
  { id: 'ts3', time: '10:00 AM', available: false }, { id: 'ts4', time: '10:30 AM', available: true },
  { id: 'ts5', time: '11:00 AM', available: true }, { id: 'ts6', time: '11:30 AM', available: false },
  { id: 'ts7', time: '01:00 PM', available: true }, { id: 'ts8', time: '01:30 PM', available: true },
  { id: 'ts9', time: '02:00 PM', available: true }, { id: 'ts10', time: '02:30 PM', available: true },
];

export const FAQ_DATA = [
    {
        question: "How do I book a test?",
        answer: "You can book a test online through our 'Book a Test' page. Select your desired test, fill in your information, and choose an available date and time slot."
    },
    {
        question: "When will I get my test results?",
        answer: "Result turnaround times vary by test. Most common test results are available within 24-48 hours. You will be notified via SMS/email when your results are ready."
    },
    {
        question: "Can I get a copy of my results?",
        answer: "Yes, you can securely download your results from our 'Test Results' page using your registered phone number or email for verification. You can also view them online or request to have them emailed to your doctor."
    },
    {
        question: "What are your operating hours?",
        answer: "Our lab is open Monday to Friday from 8:00 AM to 6:00 PM, and Saturday from 9:00 AM to 1:00 PM. We are closed on Sundays and public holidays."
    }
];

export const GEMINI_CHATBOT_SYSTEM_INSTRUCTION = "You are a helpful AI assistant for 'Testing Services', a modern laboratory. Your name is 'Labby'. Answer questions about our services, booking tests, test preparation, understanding results, and general health information related to testing. Use the provided FAQs if the question is directly answered there. Keep your answers concise, friendly, and professional. If you don't know an answer, politely state that you can't help with that specific query and suggest contacting customer support. Available test categories include: Blood, Urine, DNA, COVID-19, Allergy, and Hormone tests.";

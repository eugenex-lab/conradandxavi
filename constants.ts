
import { PracticeArea, TeamMember, Testimonial, BlogPost } from './types';

export const FIRM_INFO = {
  name: "CONRAD & XAVI LP",
  tagline: "Trusted Legal Expertise. Strategic Representation. Proven Results.",
  established: 2014,
  phones: ["08038648444", "08032153088"],
  email: "conradnxavi@gmail.com",
  addresses: [
    "11, Folgore Close, Adiva Plainfields Estate, Ibeju Lekki, Lagos",
    "109B, Ilupeju Street, Dolphin Estate, Ikoyi, Lagos"
  ],
  membership: "Nigerian Bar Association"
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "corp",
    title: "Corporate & Commercial Law",
    description: "Expert guidance for businesses navigating complex regulatory landscapes and transactional challenges.",
    icon: "Briefcase",
    keyServices: ["Company Formation", "Mergers & Acquisitions", "Governance Compliance", "Joint Ventures"]
  },
  {
    id: "real",
    title: "Real Estate & Property Law",
    description: "Comprehensive legal support for property acquisition, management, and disputes in the Nigerian market.",
    icon: "Home",
    keyServices: ["Title Verification", "Conveyancing", "Lease Agreements", "Property Disputes"]
  },
  {
    id: "lit",
    title: "Litigation & Dispute Resolution",
    description: "Formidable representation in courtrooms and arbitration panels to protect your interests.",
    icon: "Scale",
    keyServices: ["Civil Litigation", "Commercial Arbitration", "Debt Recovery", "Appeals"]
  },
  {
    id: "fam",
    title: "Family Law",
    description: "Sensitive and professional handling of domestic legal matters with a focus on sustainable outcomes.",
    icon: "Users",
    keyServices: ["Divorce & Separation", "Child Custody", "Wills & Probate", "Estate Planning"]
  },
  {
    id: "adv",
    title: "Business Advisory & Compliance",
    description: "Strategic insights to ensure your operations remain ethical, legal, and competitive.",
    icon: "ShieldCheck",
    keyServices: ["Regulatory Audits", "Risk Assessment", "Contract Management", "Policy Drafting"]
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "1",
    name: "Olawale Conrad",
    position: "Senior Partner",
    qualifications: "LL.B (Hons), B.L",
    experience: "15+ Years",
    specialization: "Corporate Law & Litigation",
    image: "https://picsum.photos/seed/lawyer1/400/500"
  },
  {
    id: "2",
    name: "Xavier Nnamdi",
    position: "Managing Partner",
    qualifications: "LL.B (Hons), LL.M, B.L",
    experience: "12+ Years",
    specialization: "Real Estate & Commercial Law",
    image: "https://picsum.photos/seed/lawyer2/400/500"
  },
  {
    id: "3",
    name: "Aisha Bello",
    position: "Associate Counsel",
    qualifications: "LL.B (Hons), B.L",
    experience: "7+ Years",
    specialization: "Family Law & ADR",
    image: "https://picsum.photos/seed/lawyer3/400/500"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Chief Dr. Emeka A.",
    quote: "Their attention to detail in our property acquisition was impeccable. Truly the gold standard of legal practice in Lagos.",
    role: "Real Estate Developer"
  },
  {
    id: "t2",
    name: "Funmilayo O.",
    quote: "Conrad & Xavi handled our corporate restructuring with professional excellence that gave us peace of mind.",
    role: "CEO, TechNova Solutions"
  },
  {
    id: "t3",
    name: "Johnathan W.",
    quote: "Strategic thinkers. They don't just know the law; they know how to apply it for the best commercial outcomes.",
    role: "Investment Banker"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "b1",
    title: "Navigating the New CAMA 2020: What Small Businesses Need to Know",
    excerpt: "The latest regulatory changes in Nigerian corporate law have significant implications for SMEs.",
    category: "Corporate Law",
    date: "Oct 12, 2025",
    author: "Olawale Conrad",
    image: "https://picsum.photos/seed/blog1/600/400"
  },
  {
    id: "b2",
    title: "The Importance of Due Diligence in Lagos Real Estate Transactions",
    excerpt: "Avoid common pitfalls and legal traps when buying land or property in high-demand areas.",
    category: "Property Law",
    date: "Sept 28, 2025",
    author: "Xavier Nnamdi",
    image: "https://picsum.photos/seed/blog2/600/400"
  }
];

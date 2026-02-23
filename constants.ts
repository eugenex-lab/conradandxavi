import { PracticeArea, TeamMember, Testimonial, BlogPost } from "./types";

export const FIRM_INFO = {
  name: "CONRAD & XAVI LP",
  tagline: "Trusted Legal Expertise. Strategic Representation. Proven Results.",
  established: 2014,
  phones: ["08038648444", "08032153088"],
  email: "conradnxavi@gmail.com",
  addresses: [
    "11, Folgore Close, Adiva Plainfields Estate, Ibeju Lekki, Lagos",
    "109B, Ilupeju Street, Dolphin Estate, Ikoyi, Lagos",
  ],
  membership: "Nigerian Bar Association",
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "adv",
    title: "Business Advisory & Compliance",
    description:
      "Strategic insights to ensure your operations remain ethical, legal, and competitive.",
    icon: "ShieldCheck",
    keyServices: [
      "Regulatory Audits",
      "Risk Assessment",
      "Contract Management",
      "Policy Drafting",
    ],
  },
  {
    id: "corp",
    title: "Corporate & Commercial Law",
    description:
      "Expert guidance for businesses navigating complex regulatory landscapes and transactional challenges.",
    icon: "Briefcase",
    keyServices: [
      "Company Formation",
      "Mergers & Acquisitions",
      "Governance Compliance",
      "Joint Ventures",
    ],
  },
  {
    id: "real",
    title: "Real Estate & Property Law",
    description:
      "Comprehensive legal support for property acquisition, management, and disputes in the Nigerian market.",
    icon: "Home",
    keyServices: [
      "Title Verification",
      "Conveyancing",
      "Lease Agreements",
      "Property Disputes",
    ],
  },
  {
    id: "lit",
    title: "Litigation & Dispute Resolution",
    description:
      "Formidable representation in courtrooms and arbitration panels to protect your interests.",
    icon: "Scale",
    keyServices: [
      "Civil Litigation",
      "Commercial Arbitration",
      "Debt Recovery",
      "Appeals",
    ],
  },
  {
    id: "fam",
    title: "Family Law",
    description:
      "Elite structuring and preservation of multi-generational wealth, ensuring seamless succession and legacy management.",
    icon: "Users",
    keyServices: [
      "Wealth Preservation",
      "Trusts & Foundations",
      "Succession Planning",
      "Private Client Services",
      "Wills & Probate",
      "Estate Planning",
    ],
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "1",
    name: "Olawale Conrad",
    position: "Senior Partner",
    qualifications: "LL.B (Hons), B.L",
    experience: "15+ Years",
    specialization: "Corporate Law & Litigation",
    image: "https://picsum.photos/seed/lawyer1/400/500",
  },
  {
    id: "2",
    name: "Xavier Nnamdi",
    position: "Managing Partner",
    qualifications: "LL.B (Hons), LL.M, B.L",
    experience: "12+ Years",
    specialization: "Real Estate & Commercial Law",
    image: "https://picsum.photos/seed/lawyer2/400/500",
  },
  {
    id: "3",
    name: "Aisha Bello",
    position: "Associate Counsel",
    qualifications: "LL.B (Hons), B.L",
    experience: "7+ Years",
    specialization: "Family Law & ADR",
    image: "https://picsum.photos/seed/lawyer3/400/500",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Chief Dr. Emeka A.",
    quote:
      "Their attention to detail in our property acquisition was impeccable. Truly the gold standard of legal practice in Lagos.",
    role: "Real Estate Developer",
  },
  {
    id: "t2",
    name: "Funmilayo O.",
    quote:
      "Conrad & Xavi handled our corporate restructuring with professional excellence that gave us peace of mind.",
    role: "CEO, TechNova Solutions",
  },
  {
    id: "t3",
    name: "Johnathan W.",
    quote:
      "Strategic thinkers. They don't just know the law; they know how to apply it for the best commercial outcomes.",
    role: "Investment Banker",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "b1",
    title: "Navigating the New CAMA 2020: What Small Businesses Need to Know",
    excerpt:
      "The latest regulatory changes in Nigerian corporate law have significant implications for SMEs.",
    category: "Corporate Law",
    date: "Oct 12, 2025",
    author: "Olawale Conrad",
    image: "https://picsum.photos/seed/blog1/600/400",
  },
  {
    id: "b2",
    title: "The Importance of Due Diligence in Lagos Real Estate Transactions",
    excerpt:
      "Avoid common pitfalls and legal traps when buying land or property in high-demand areas.",
    category: "Property Law",
    date: "Sept 28, 2025",
    author: "Xavier Nnamdi",
    image: "https://picsum.photos/seed/blog2/600/400",
  },
  {
    id: "b3",
    title: "Arbitration vs. Litigation: Choosing the Right Path for Disputes",
    excerpt:
      "A comparative analysis of dispute resolution mechanisms in the Nigerian commercial sector.",
    category: "Dispute Resolution",
    date: "Sept 20, 2025",
    author: "Aisha Bello",
    image: "https://picsum.photos/seed/blog3/600/400",
  },
  {
    id: "b4",
    title: "Securing Intellectual Property in the Digital Age",
    excerpt:
      "Proactive steps for Nigerian tech entrepreneurs to protect their patents and trademarks.",
    category: "IP Law",
    date: "Sept 15, 2025",
    author: "Olawale Conrad",
    image: "https://picsum.photos/seed/blog4/600/400",
  },
  {
    id: "b5",
    title: "The Role of ESG in Nigerian Corporate Governance",
    excerpt:
      "Why Environmental, Social, and Governance criteria are becoming central to law and business.",
    category: "Corporate Governance",
    date: "Sept 05, 2025",
    author: "Xavier Nnamdi",
    image: "https://picsum.photos/seed/blog5/600/400",
  },
  {
    id: "b6",
    title: "Succession Planning for Family-Owned Enterprises",
    excerpt:
      "Legal frameworks for ensuring the longevity of multi-generational businesses.",
    category: "Family Office",
    date: "Aug 28, 2025",
    author: "Aisha Bello",
    image: "https://picsum.photos/seed/blog6/600/400",
  },
  {
    id: "b7",
    title: "Fintech Regulations: Navigating the CBN Guidelines",
    excerpt:
      "An overview of the evolving regulatory landscape for financial technology companies in Nigeria.",
    category: "Fintech",
    date: "Aug 20, 2025",
    author: "Olawale Conrad",
    image: "https://picsum.photos/seed/blog7/600/400",
  },
  {
    id: "b8",
    title: "Maritime Law Trends: Implications for Nigerian Trade",
    excerpt:
      "Analyzing recent changes in international maritime law and their local impact.",
    category: "Maritime Law",
    date: "Aug 12, 2025",
    author: "Xavier Nnamdi",
    image: "https://picsum.photos/seed/blog8/600/400",
  },
  {
    id: "b9",
    title: "Tax Planning Strategies for High-Net-Worth Individuals",
    excerpt:
      "Legal avenues for optimizing tax liabilities within the Nigerian fiscal framework.",
    category: "Tax Law",
    date: "Aug 05, 2025",
    author: "Aisha Bello",
    image: "https://picsum.photos/seed/blog9/600/400",
  },
  {
    id: "b10",
    title: "Labor Law Compliance: A Guide for Multinational Operations",
    excerpt:
      "Ensuring your foreign operations align with Nigerian labor statutes and practices.",
    category: "Labor Law",
    date: "July 28, 2025",
    author: "Olawale Conrad",
    image: "https://picsum.photos/seed/blog10/600/400",
  },
  {
    id: "b11",
    title: "Cryptocurrency and Law: The Nigerian Perspective",
    excerpt:
      "Understanding the legal status and regulatory approach to digital assets in Nigeria.",
    category: "Technology Law",
    date: "July 15, 2025",
    author: "Xavier Nnamdi",
    image: "https://picsum.photos/seed/blog11/600/400",
  },
  {
    id: "b12",
    title: "Structuring Energy Projects: Oil, Gas, and Renewables",
    excerpt:
      "Legal considerations for large-scale energy sector investments and development.",
    category: "Energy Law",
    date: "July 10, 2025",
    author: "Aisha Bello",
    image: "https://picsum.photos/seed/blog12/600/400",
  },
  {
    id: "b13",
    title: "Effective Debt Recovery Tactics for Corporations",
    excerpt:
      "Legal mechanisms for managing receivables and securing commercial debt recovery.",
    category: "Commercial Law",
    date: "June 25, 2025",
    author: "Olawale Conrad",
    image: "https://picsum.photos/seed/blog13/600/400",
  },
  {
    id: "b14",
    title: "Public-Private Partnerships: The Legal Framework",
    excerpt:
      "Navigating the complexities of PPP projects in infrastructure development.",
    category: "Infrastructure",
    date: "June 18, 2025",
    author: "Xavier Nnamdi",
    image: "https://picsum.photos/seed/blog14/600/400",
  },
  {
    id: "b15",
    title: "The Future of Legal Tech: AI in the Courtroom",
    excerpt:
      "How artificial intelligence is beginning to reshape the practice of law in West Africa.",
    category: "Legal Tech",
    date: "June 05, 2025",
    author: "Aisha Bello",
    image: "https://picsum.photos/seed/blog15/600/400",
  },
];

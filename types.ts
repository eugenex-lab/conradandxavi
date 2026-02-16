
export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  icon: string;
  keyServices: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  qualifications: string;
  experience: string;
  specialization: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  role: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  image: string;
}

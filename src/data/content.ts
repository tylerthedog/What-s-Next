export interface SocialLink {
  id: string;
  name: string;
  url: string;
  iconName: string;
}

export interface SharedDocument {
  id: string;
  title: string;
  description: string;
  category: string;
  fileType: string;
  fileSize: string;
  youtubeVideoUrl?: string;
  youtubeVideoTitle?: string;
  updatedAt: string;
  downloadsCount: number;
  tags: string[];
  contentPreview?: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  deliverables: string[];
  processSteps: { title: string; desc: string }[];
  ctaText: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Consultations' | 'Career & Profiles' | 'Media & Production' | 'Policies';
}

export interface ConsultationPackage {
  id: string;
  name: string;
  tagline: string;
  duration: string;
  price: string;
  popular?: boolean;
  features: string[];
  idealFor: string;
}

export interface OpportunityItem {
  id: string;
  title: string;
  type: 'Contract' | 'Freelance' | 'Full-time' | 'Partnership';
  location: string;
  department: string;
  description: string;
  requirements: string[];
  deadline: string;
}

export const COMPANY_INFO = {
  name: "What's Next?",
  tagline: "Your Creative Production Agency for Video, Photo, Voice, Social & Development",
  email: "hello@whatsnext.agency",
  phone: "+1 (800) 555-NEXT / +1 (555) 942-8763",
  address: "100 Innovation Way, Suite 400, Creative District, CA 90210",
  hours: "Monday - Friday: 9:00 AM - 6:00 PM (EST)",
  introductionText: `At What's Next?, we don't just create content, we build complete creative workflows for brands, creators, and businesses. From filming and editing to publishing and promotion, our team manages every stage of production so you can focus on what matters most.`,
  whyWeMatterText: `We leverage real-world experience, cutting-edge strategies, and a relentless focus on balancing your journey and results to connect you with the right opportunities, sharpen your skills, and ignite your potential.`,
};

export const SOCIAL_LINKS: SocialLink[] = [
  { id: 'facebook', name: 'Facebook', url: 'https://facebook.com', iconName: 'Facebook' },
  { id: 'instagram', name: 'Instagram', url: 'https://instagram.com', iconName: 'Instagram' },
  { id: 'tiktok', name: 'TikTok', url: 'https://tiktok.com', iconName: 'Video' },
  { id: 'youtube', name: 'YouTube', url: 'https://youtube.com', iconName: 'Youtube' },
  { id: 'linkedin', name: 'LinkedIn', url: 'https://linkedin.com', iconName: 'Linkedin' },
  { id: 'freelancer', name: 'Freelancer.com', url: 'https://freelancer.com', iconName: 'Briefcase' },
];

export const NAVIGATION_PAGES = [
  { id: 'home', name: 'Home', path: '/' },
  { id: 'video-production', name: 'Video Production', path: '/video-production' },
  { id: 'photography', name: 'Photography', path: '/photography' },
  { id: 'voiceovers', name: 'Voice-Overs', path: '/voiceovers' },
  { id: 'social-media', name: 'Social Media Management', path: '/social-media' },
  { id: 'youtube-management', name: 'YouTube Channel Management', path: '/youtube-management' },
  { id: 'profile-resume', name: 'Profile Optimisation & CVs', path: '/profile-resume' },
  { id: 'written-content', name: 'Written Content & SEO', path: '/written-content' },
  { id: 'website-building', name: 'Website & App Development', path: '/website-building' },
  { id: 'graphic-design', name: 'Graphic Design', path: '/graphic-design' },
  { id: 'translation', name: 'Translation & Localisation', path: '/translation' },
  { id: 'company-apparel', name: 'Company Apparel & Custom Branding', path: '/company-apparel' },
  { id: 'careers', name: 'Careers', path: '/careers' },
  { id: 'about', name: 'About Us', path: '/about' },
  { id: 'contact', name: 'Contact Us', path: '/contact' },
];

export const CONSULTATION_PACKAGES: ConsultationPackage[] = [
  {
    id: 'strategy-discovery',
    name: 'Discovery Strategy Call',
    tagline: 'Initial diagnostic & targeted roadmap for immediate clarity',
    duration: '45 Minutes',
    price: '£119',
    features: [
      'Comprehensive current state audit',
      'Identification of key growth bottlenecks',
      'Actionable step-by-step 30-day action plan',
      'Follow-up summary PDF & recording access',
      'Credit weight towards full implementation packages'
    ],
    idealFor: 'Professionals & creators needing immediate strategic direction before launching a project or job search.'
  },
  {
    id: 'career-brand-overhaul',
    name: 'Executive Career & Brand Sprint',
    tagline: 'End-to-end transformation of your professional image & CV',
    duration: '2 Weeks (3 Live Sessions)',
    price: '£399',
    popular: true,
    features: [
      'Complete ATS-optimised CV rewrite',
      'Custom targeted cover letter suite',
      'LinkedIn & Freelancer profile optimisation',
      'Two 60-minute 1-on-1 coaching calls',
      'Interview preparation mock session',
      'Direct email access to your consultant'
    ],
    idealFor: 'Mid-to-senior level professionals targeting top-tier roles or higher compensation.'
  },
  {
    id: 'media-channel-growth',
    name: 'YouTube & Media Production Advisory',
    tagline: 'Scale your channel retention, video quality, and monetisation',
    duration: '1 Month Intensive',
    price: '£699',
    features: [
      'Full YouTube channel & video SEO audit',
      'Content strategy & thumbnail design playbook',
      'Video production & gear recommendations',
      'Four weekly 60-minute strategy sessions',
      'Access to private resource library & templates',
      'Direct feedback on video cuts & scripts'
    ],
    idealFor: 'YouTube creators, agency owners, and brands aiming to double retention and convert views into revenue.'
  }
];

export const SHARED_DOCUMENTS: SharedDocument[] = [
  {
    id: 'doc-1',
    title: 'Ultimate ATS CV Blueprint & Formatting Guide 2026',
    description: 'The exact high-conversion CV template and ATS keyword optimisation framework used by What\'s Next clients to land interviews.',
    category: 'Career & CVs',
    fileType: 'PDF / DOCX',
    fileSize: '2.4 MB',
    youtubeVideoUrl: 'https://youtube.com/watch?v=sample1',
    youtubeVideoTitle: 'How to Build an ATS-Beating CV in 2026 [Step-by-Step]',
    updatedAt: '2026-07-15',
    downloadsCount: 1420,
    tags: ['CV', 'ATS', 'Career', 'Template'],
    contentPreview: 'INCLUDED TEMPLATES:\n1. Executive Clean Single-Column Layout\n2. Modern Technical Metrics-Driven Format\n3. Action Verb Master Cheat Sheet\n4. ATS Keyword Density Calculator'
  },
  {
    id: 'doc-2',
    title: 'LinkedIn Profile Optimisation & Headline Matrix',
    description: 'Comprehensive checklist and formula sheet to turn your LinkedIn profile into a recruiter magnet and high-ticket lead generator.',
    category: 'Profile Optimisation',
    fileType: 'PDF Guide',
    fileSize: '1.8 MB',
    youtubeVideoUrl: 'https://youtube.com/watch?v=sample2',
    youtubeVideoTitle: 'Transform Your LinkedIn Profile in 30 Minutes',
    updatedAt: '2026-07-28',
    downloadsCount: 980,
    tags: ['LinkedIn', 'Branding', 'Social Media', 'Cheatsheet'],
    contentPreview: 'HEADLINE FORMULA:\n[Target Role] + [Key Value Proposition] + [Measurable Result / Speciality]\nExample: Senior Full-Stack Engineer | Scaling High-Traffic Cloud Services | 10+ Yrs Enterprise Experience'
  },
  {
    id: 'doc-3',
    title: 'YouTube Creator Growth & Production Workflow Checklist',
    description: 'Our internal pre-production, filming, editing, and YouTube uploading checklist designed to streamline production and maximise viewer retention.',
    category: 'YouTube & Media',
    fileType: 'XLSX / PDF',
    fileSize: '3.1 MB',
    youtubeVideoUrl: 'https://youtube.com/watch?v=sample3',
    youtubeVideoTitle: 'My Full Video Editing & YouTube System Explained',
    updatedAt: '2026-08-01',
    downloadsCount: 2150,
    tags: ['YouTube', 'Video Production', 'Editing', 'Workflow'],
    contentPreview: 'CHECKLIST PHASES:\n- Phase 1: Topic Research & Title/Thumbnail Validation\n- Phase 2: Script Outline & Visual Hook Drafting\n- Phase 3: Filming & B-Roll Cue List\n- Phase 4: Editing, Pacing & Audio Mastering'
  },
  {
    id: 'doc-4',
    title: 'Freelance Client Outreach & Proposal Master Template',
    description: 'High-converting proposal script and contract framework for freelancers and consultants listing on Freelance platforms or pitching directly.',
    category: 'Business & Freelance',
    fileType: 'DOCX / PDF',
    fileSize: '1.2 MB',
    youtubeVideoUrl: 'https://youtube.com/watch?v=sample4',
    youtubeVideoTitle: 'How I Win £5k+ Freelance Contracts Every Month',
    updatedAt: '2026-06-10',
    downloadsCount: 840,
    tags: ['Freelance', 'Proposal', 'Client Pitch', 'Contracts'],
    contentPreview: 'PROPOSAL STRUCTURE:\n1. Empathy & Problem Restatement\n2. Proposed Solution & Scope of Work\n3. Milestones & Delivery Timeline\n4. Pricing & Next Steps'
  },
  {
    id: 'doc-5',
    title: 'Voiceover Recording & Audio Mastering Cheat Sheet',
    description: 'Standard EQ settings, noise reduction parameters, and microphone positioning tips for broadcast-quality vocal recording in home studios.',
    category: 'Audio & Voiceovers',
    fileType: 'PDF Guide',
    fileSize: '1.5 MB',
    youtubeVideoUrl: 'https://youtube.com/watch?v=sample5',
    youtubeVideoTitle: 'Make Any Mic Sound Like a £1000 Studio Mic',
    updatedAt: '2026-07-02',
    downloadsCount: 1290,
    tags: ['Voiceover', 'Audio', 'DAW', 'Microphone'],
    contentPreview: 'MASTERING CHAIN:\n1. High-Pass Filter @ 80Hz\n2. Gentle Vocal Compressor (2:1 Ratio)\n3. Parametric EQ (Subtle Boost at 3kHz & 10kHz)\n4. De-Esser & Peak Limiter'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How do I get started with What\'s Next?',
    category: 'General',
    answer: 'Getting started is simple! You can schedule an initial Discovery Strategy Call directly on our Consultations page, or submit an enquiry through our Contact Us page. We will review your goals and match you with the right advisor or media strategist.'
  },
  {
    id: 'faq-2',
    question: 'What is the turnaround time for CV & Cover Letter rewrites?',
    category: 'Career & Profiles',
    answer: 'Standard turnaround time is 3 to 5 business days following your intake questionnaire and kickoff call. Priority expedited delivery (24-48 hours) is also available upon request.'
  },
  {
    id: 'faq-3',
    question: 'Are the resources on the YouTube Resources page free to access?',
    category: 'General',
    answer: 'Yes! All documents, templates, and spreadsheets linked on our YouTube Resources page are 100% free for our YouTube community and website visitors. Simply click preview or download to access them.'
  },
  {
    id: 'faq-4',
    question: 'Can you handle both video editing and full production for remote clients?',
    category: 'Media & Production',
    answer: 'Absolutely. For remote clients, you can upload your raw video footage and audio files to our secure cloud folder. Our post-production team handles cutting, colour grading, sound design, motion graphics, and thumbnail creation.'
  },
  {
    id: 'faq-5',
    question: 'What platform profiles do you specialise in optimising?',
    category: 'Career & Profiles',
    answer: 'We specialise in LinkedIn, Freelancer.com, Upwork, GitHub, personal portfolio websites, and professional social media channels (YouTube, Instagram, TikTok).'
  },
  {
    id: 'faq-6',
    question: 'What is your refund policy for consultation calls and custom media services?',
    category: 'Policies',
    answer: 'Consultation sessions can be rescheduled up to 24 hours prior to the appointment at no charge. Custom services (such as video production, website building, and CV rewrites) follow milestone-based approvals outlined in our Policies page.'
  }
];

export const OPPORTUNITIES_LIST: OpportunityItem[] = [
  {
    id: 'opp-1',
    title: 'Senior Video Editor (YouTube & Short-Form Content)',
    type: 'Contract',
    location: 'Remote / Global',
    department: 'Media Production',
    description: 'We are seeking an experienced video editor proficient in Premiere Pro / DaVinci Resolve with a deep understanding of YouTube pacing, retention dynamics, sound design, and viral short-form editing.',
    requirements: [
      '3+ years experience editing high-performing YouTube long-form videos',
      'Strong portfolio featuring motion graphics, kinetic typography, and audio mixing',
      'Ability to turn raw footage into engaging storytelling clips'
    ],
    deadline: '2026-09-01'
  },
  {
    id: 'opp-2',
    title: 'Career Branding Specialist & CV Strategist',
    type: 'Freelance',
    location: 'Remote',
    department: 'Career Services',
    description: 'Help our executive clients revitalise their career narratives, craft compelling ATS-friendly CVs, and optimise high-converting LinkedIn profiles.',
    requirements: [
      'Proven background in talent acquisition, recruitment, or executive career coaching',
      'Exceptional writing and storytelling ability',
      'Deep knowledge of ATS algorithms and industry keyword trends'
    ],
    deadline: '2026-08-30'
  },
  {
    id: 'opp-3',
    title: 'Voiceover Specialist & Audio Narrator Pool',
    type: 'Partnership',
    location: 'Remote Studio',
    department: 'Audio & Voiceovers',
    description: 'Join our roster of professional voice talent for corporate explainers, YouTube video documentaries, commercial ads, and e-learning courses.',
    requirements: [
      'Acoustically treated studio setup with broadcast microphone setup',
      'Versatile vocal range and prompt delivery',
      'Ability to provide raw + mastered vocal stems'
    ],
    deadline: 'Ongoing'
  }
];

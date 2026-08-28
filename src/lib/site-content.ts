import type { LucideIcon } from "lucide-react";
import {
  Brain, Bot, Workflow, Code2, Megaphone, Search,
  Rocket, Target, Users, Award, Heart, ShieldCheck,
  Sparkles, LineChart, Stethoscope, GraduationCap, BookOpen,
} from "lucide-react";

export type Service = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  Icon: LucideIcon;
  outcomes: string[];
  offerings: { title: string; body: string }[];
  stack: string[];
  subServices?: string[];
};

export const services: Service[] = [
  {
    slug: "ai-solutions",
    name: "AI Solutions",
    tagline: "Custom AI that ships to production, not to a demo folder.",
    description:
      "From LLM copilots to computer-vision pipelines, we design, train, and deploy AI systems that survive real traffic and real edge cases.",
      Icon: Brain,
      outcomes: ["Cut manual work by 70%", "Ship in weeks, not quarters", "Grounded, auditable answers"],
      subServices: ["AI Product", "Content Writing", "Content Creation", "Data Analyst"],
    offerings: [
      { title: "LLM Copilots", body: "Retrieval-augmented assistants scoped to your data, tone, and workflows." },
      { title: "Predictive Models", body: "Forecasting, scoring, and anomaly detection with monitored drift." },
      { title: "Computer Vision", body: "Detection, OCR, and QA pipelines running on-device or on cloud GPUs." },
      { title: "MLOps", body: "Versioned datasets, reproducible training, and one-click rollback." },
    ],
    stack: ["OpenAI", "Anthropic", "PyTorch", "LangGraph", "Pinecone", "Modal"],
  },
  {
    slug: "ai-agents",
    name: "AI Agents",
    tagline: "Autonomous agents that take action, not just answer questions.",
    description:
      "Multi-step agents wired into your tools — CRM, email, spreadsheets, browsers — with human-in-the-loop safety rails.",
    Icon: Bot,
    outcomes: ["24/7 execution", "Tool-use with guardrails", "Traceable every step"],
    offerings: [
      { title: "Sales Agents", body: "Prospect, personalize, schedule, and follow up while you sleep." },
      { title: "Support Agents", body: "Deflect Tier-1 tickets with grounded answers and escalation logic." },
      { title: "Ops Agents", body: "Move data across systems, reconcile records, and file reports." },
      { title: "Voice Agents", body: "Realtime speech agents for inbound and outbound calls." },
    ],
    stack: ["LangGraph", "n8n", "Twilio", "Zapier", "Playwright", "Vapi"],
  },
  {
    slug: "business-automation",
    name: "Business Automation",
    tagline: "Kill repetitive work. Keep the humans on the interesting parts.",
    description:
      "We map your workflows end-to-end, then rebuild them with automations, integrations, and internal tools your team actually enjoys.",
    Icon: Workflow,
    outcomes: ["10x throughput on ops", "Zero context-switching", "Clean audit trails"],
    offerings: [
      { title: "Workflow Mapping", body: "We shadow your team and diagram every hand-off worth automating." },
      { title: "System Integrations", body: "Two-way syncs between the SaaS you already pay for." },
      { title: "Internal Tools", body: "Admin panels, dashboards, and approval flows built in days." },
      { title: "RPA + Scraping", body: "Reliable browser automations for anything without an API." },
    ],
    stack: ["n8n", "Make", "Zapier", "Airtable", "Supabase", "Retool"],
  },
  {
    slug: "web-development",
    name: "Web Development",
    tagline: "Fast, accessible, animated. Sites that convert and apps that scale.",
    description:
      "Full-stack product engineering — marketing sites, SaaS dashboards, and complex applications with polished motion and airtight performance.",
      Icon: Code2,
      outcomes: ["<1s TTFB", "100/100 Lighthouse", "WCAG 2.2 AA"],
      subServices: [
        "WordPress Development",
        "Shopify Development",
        "Custom Website Development",
        "E-commerce Development",
        "Website Maintenance & Support",
        "Website Redesign",
        "Landing Page Design",
        "UI/UX Design",
        "Logo & Branding",
      ],
    offerings: [
      { title: "Marketing Sites", body: "Content-rich, SEO-optimized, and beautifully animated." },
      { title: "SaaS Applications", body: "React, TypeScript, Postgres, and edge-first infra." },
      { title: "Design Systems", body: "Token-first UI kits with Storybook and semantic versioning." },
      { title: "Headless Commerce", body: "Shopify Hydrogen, Stripe, and personalized storefronts." },
    ],
    stack: ["React", "TanStack", "TypeScript", "Postgres", "Cloudflare", "Vercel"],
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    tagline: "Growth engineering: content, SEO, paid, and analytics as one system.",
    description:
      "A performance team that treats marketing like software — instrumented, iterated, and honest about what works.",
      Icon: Megaphone,
      outcomes: ["3x qualified pipeline", "-40% CAC", "Weekly experiments"],
      subServices: ["Digital Marketing", "Social Media Management"],
    offerings: [
      { title: "SEO & Content", body: "Topic strategy, briefs, publishing, and technical SEO." },
      { title: "Paid Media", body: "Google, Meta, LinkedIn — creative-first, geo-aware, honest reporting." },
      { title: "Lifecycle", body: "Email, SMS, and product-led onboarding with A/B tests baked in." },
      { title: "Analytics", body: "GA4, PostHog, and warehouse-native attribution you can trust." },
    ],
    stack: ["GA4", "PostHog", "Ahrefs", "HubSpot", "Segment", "BigQuery"],
  },
  {
    slug: "seo",
    name: "SEO",
    tagline: "Technical, content, and authority SEO that actually ranks.",
    description:
      "Full-funnel search optimization — technical audits, Core Web Vitals, content strategy, and link authority — engineered by people who read the algorithm updates.",
    Icon: Search,
    outcomes: ["+180% organic traffic", "Page 1 rankings", "Faster Core Web Vitals"],
    offerings: [
      { title: "Technical SEO", body: "Crawlability, indexation, schema markup, and Core Web Vitals fixed at the source." },
      { title: "Content Strategy", body: "Keyword-mapped content that ranks and actually converts." },
      { title: "Link Authority", body: "Earned backlinks and digital PR — no shady link farms." },
      { title: "Local & Technical Audits", body: "Ongoing audits so rankings don't quietly decay." },
    ],
    stack: ["Google Search Console", "Ahrefs", "Screaming Frog", "Core Web Vitals", "Schema.org", "GA4"],
  },
];

export type Product = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  Icon: LucideIcon;
  features: { title: string; body: string }[];
  benefits: string[];
  cta: string;
  liveUrl: string;
};

export const products: Product[] = [
  {
    slug: "career-path-finder",
    name: "Career Path Finder",
    category: "AI for Education",
    tagline: "Every student, an AI career coach in their pocket.",
    description:
      "An adaptive assessment engine that maps a learner's aptitudes, interests, and market demand into personalized career roadmaps — with courses, mentors, and milestones.",
    Icon: GraduationCap,
    features: [
      { title: "Adaptive Assessments", body: "Psychometric + skill diagnostics that recalibrate with every answer." },
      { title: "Personalized Roadmaps", body: "Weekly plans with courses, projects, and hiring signals." },
      { title: "Mentor Matching", body: "Warm intros to industry mentors in the student's chosen path." },
      { title: "Progress Analytics", body: "Parent, counselor, and school dashboards with real outcomes." },
      { title: "Job-Market Signals", body: "Local demand, salary ranges, and skill trends refreshed weekly." },
      { title: "Multilingual", body: "Ships with English, Spanish, Arabic, Hindi and Urdu out of the box." },
    ],
    benefits: [
      "Cut counselor caseload by 60%",
      "Improve stream/major fit by 3x",
      "Boost enrollment and placement metrics",
      "Family-friendly reports in plain language",
    ],
    cta: "Bring it to your school",
    liveUrl: "https://hanzala-career-pathfinder.netlify.app/",
  },
  {
    slug: "ai-clinic-management",
    name: "AI Clinic Management System",
    category: "AI for Healthcare",
    tagline: "The operating system for modern clinics.",
    description:
      "Appointments, records, billing, and AI-assisted charting in one calm interface — designed for busy front desks and burnt-out clinicians.",
    Icon: Stethoscope,
    features: [
      { title: "Smart Scheduling", body: "No-show prediction, waitlist, and multi-provider calendars." },
      { title: "AI Charting", body: "Ambient scribe drafts SOAP notes; clinician approves in seconds." },
      { title: "EHR + Billing", body: "ICD-10, CPT, insurance eligibility, and clean claim exports." },
      { title: "Patient Portal", body: "Booking, intake forms, secure chat, and prescription refills." },
      { title: "Analytics", body: "Utilization, revenue, and clinical-quality dashboards." },
      { title: "Compliant", body: "HIPAA-aligned, audit logs, role-based access, and SSO." },
    ],
    benefits: [
      "Save 90 minutes per clinician per day",
      "Reduce no-shows by up to 40%",
      "Clean claims from day one",
      "One-day onboarding for small clinics",
    ],
    cta: "Book a clinic demo",
    liveUrl: "https://hanzala-clinic-management-system.netlify.app/login",
  },
  {
    slug: "ai-tutor",
    name: "AI Tutor",
    category: "AI for Education",
    tagline: "A patient, on-demand tutor for every subject.",
    description:
      "A conversational AI tutor that adapts explanations to each student's level, walks through problems step by step, and tracks mastery over time.",
    Icon: BookOpen,
    features: [
      { title: "Adaptive Explanations", body: "Re-explains concepts at a simpler or deeper level based on the student's responses." },
      { title: "Step-by-Step Solving", body: "Walks through problems instead of just handing over the answer." },
      { title: "Subject Coverage", body: "Math, science, languages, and test prep in one interface." },
      { title: "Progress Tracking", body: "Mastery scores and weak-topic flags for students and parents." },
      { title: "24/7 Availability", body: "No scheduling — help is available the moment a student is stuck." },
      { title: "Practice Generation", body: "Unlimited fresh practice questions targeted at weak areas." },
    ],
    benefits: [
      "Homework help without waiting for office hours",
      "Consistent, patient explanations every time",
      "Built-in progress tracking for parents",
      "Works alongside any curriculum",
    ],
    cta: "Try the AI Tutor",
    liveUrl: "https://hanzala-ai-tutor.netlify.app/",
  },
];

export const stats = [
  { value: 10, suffix: "+", label: "Projects delivered" },
  { value: 50, suffix: "+", label: "Users touched" },
  { value: 99, suffix: "%", label: "Client retention" },
  { value: 5, suffix: "", label: "Countries served" },
];

export const values = [
  { Icon: Rocket, title: "Momentum", body: "We move in weeks, not quarters. Small demos beat big decks." },
  { Icon: Target, title: "Outcomes", body: "We optimize for the metric you care about — not the one that looks good." },
  { Icon: ShieldCheck, title: "Trust", body: "Code reviews, security scans, and transparent status pages by default." },
  { Icon: Heart, title: "Craft", body: "Motion, accessibility, and pixel-perfect polish are non-negotiable." },
];

export const timeline = [
  { year: "2025", title: "Founded in a Slack channel", body: "Five people, five different skill sets, and one shared conviction that software could be built better." },
  { year: "2025 July", title: "First 10 clients", body: "Built our first product: an AI Tutor and a Clinic Management System." },
  { year: "2025 August", title: "AI Agent and LLM Model", body: "Trained our first production LLM fine-tunes for retail." },
  { year: "2025 November", title: "Intelligent team", body: "Grew into a tight team of engineers and AI specialists — still small enough to move fast." },
  { year: "2026", title: "Agentic era", body: "Shipped autonomous agent frameworks to enterprise clients." },
  { year: "2026", title: "Products launched", body: "Career Path Finder + AI Clinic Management went public." },
  { year: "2026", title: "You, next", body: "This is the year your team stops shipping like it's 2015." },
];

export const team = [
  { name: "Syed Hanzala Alam", role: "CEO of TechRox", bio: "AI Engineer specializing in LLM systems, agentic workflows, and scalable AI infrastructure.", photo: "/team/hanzala.jpg" },
  { name: " Sadaf Hussain", role: "Client Hunting Head", bio: "WordPress developer, SEO expert, graphic designer, and multi-channel content strategist.", photo: "/team/sadaf.jpeg" },
  { name: "Alishba Javed", role: "Social Media Head", bio: "Specializing in web development, visual branding, creative design, and growth-driven digital marketing.", photo: "/team/alishba.jpeg" },
  { name: "Sadia", role: "Client Hunting Department Member", bio: "Google & Meta ads strategist, performance advertiser, and direct-response copywriter.", photo: "/team/sadia.jpeg" },
  { name: "Ayesha Mazhar", role: "Social Media Department Member", bio: "Digital Growth Strategist & Multimedia Content Creator", photo: "/team/ayesha.jpeg" },
  { name: "Affifa", role: "Social Media Department Member", bio: "Specializing in graphic design, WordPress development, and complete Shopify store management & listings.", photo: "/team/afifa.jpeg" },
];

export const testimonials = [
  { quote: "TechRox rebuilt our ops platform in six weeks. Our team's daily standup is now 4 minutes long.", author: "Maya D.", role: "COO, Northline Logistics" },
  { quote: "The AI agent they deployed handles 61% of our support volume. Customer CSAT went up, not down.", author: "Ravi K.", role: "VP Support, LumenPay" },
  { quote: "We shipped our first product with them. It felt like adding a senior team overnight.", author: "Sofia B.", role: "Founder, GreenGrid" },
  { quote: "Serious engineers who care about design. That combination is rare.", author: "Daniel M.", role: "CTO, Kite Health" },
  { quote: "Cut our cloud bill by 43% and made our deploys 5x faster. Real numbers.", author: "Amara O.", role: "Head of Platform, Nova Retail" },
];

export const portfolio = [
  { title: "Lumen Analytics", category: "SaaS", tag: "Product", metric: "3.4x conversion", gradient: "from-slate-800 to-slate-500" },
  { title: "Northline Ops", category: "Automation", tag: "Enterprise", metric: "70% less manual work", gradient: "from-zinc-700 to-neutral-400" },
  { title: "Kite Health", category: "AI", tag: "Healthcare", metric: "90 min saved / clinician / day", gradient: "from-stone-700 to-stone-400" },
  { title: "GreenGrid Wallet", category: "FinTech", tag: "Mobile", metric: "4.9★ App Store", gradient: "from-gray-800 to-gray-400" },
  { title: "Nova Retail", category: "Cloud", tag: "Migration", metric: "-43% cloud spend", gradient: "from-neutral-700 to-neutral-300" },
  { title: "Vertex Learn", category: "AI", tag: "EdTech", metric: "1.2M students", gradient: "from-slate-700 to-zinc-400" },
  { title: "Halo Studio", category: "Web", tag: "Agency", metric: "Awwwards SOTD", gradient: "from-zinc-800 to-stone-400" },
  { title: "Orbit CRM", category: "SaaS", tag: "Product", metric: "$8M ARR in 12 months", gradient: "from-stone-800 to-neutral-400" },
];

export const portfolioCategories = ["All", "SaaS", "AI", "Automation", "FinTech", "Cloud", "Web"];

export const caseStudies = [
  {
    slug: "lumen-analytics",
    client: "Lumen Analytics",
    title: "Rebuilding a data platform for a 12x growth spike",
    problem: "Their monolith crumbled under Series-B growth. Dashboards took 40s to load; churn was climbing.",
    solution: "We migrated to an event-sourced architecture, shipped a new dashboard UI, and instrumented every path.",
    results: [
      { value: 40, suffix: "x", label: "Faster dashboard loads" },
      { value: 3, suffix: ".4x", label: "Conversion lift" },
      { value: 61, suffix: "%", label: "Churn reduction" },
    ],
  },
  {
    slug: "kite-health",
    client: "Kite Health",
    title: "AI charting for a 200-provider clinic network",
    problem: "Clinicians spent 2 hours a night on documentation. Burnout was real; retention was slipping.",
    solution: "We deployed an ambient AI scribe with a review flow that fit their existing EHR.",
    results: [
      { value: 90, suffix: " min", label: "Saved per clinician / day" },
      { value: 27, suffix: "%", label: "Retention improvement" },
      { value: 98, suffix: "%", label: "Note-approval rate" },
    ],
  },
  {
    slug: "nova-retail",
    client: "Nova Retail",
    title: "Multi-cloud migration without a single outage",
    problem: "A single-region setup was expensive, slow overseas, and one bad deploy from disaster.",
    solution: "A phased migration to multi-region Kubernetes with a FinOps discipline baked in.",
    results: [
      { value: 43, suffix: "%", label: "Cloud spend reduction" },
      { value: 5, suffix: "x", label: "Deploy frequency" },
      { value: 99, suffix: ".99%", label: "New uptime" },
    ],
  },
];

export const posts = [
  { slug: "shipping-agents-that-dont-embarrass-you", title: "Shipping agents that don't embarrass you", excerpt: "A field guide to building AI agents your ops team will actually trust.", category: "AI", read: "8 min", date: "Jul 12, 2026" },
  { slug: "the-quiet-death-of-the-status-meeting", title: "The quiet death of the status meeting", excerpt: "How internal tools + a Slack bot replaced 14 recurring meetings for one client.", category: "Automation", read: "6 min", date: "Jun 28, 2026" },
  { slug: "web-performance-in-2026", title: "Web performance in 2026", excerpt: "The Core Web Vitals playbook nobody talks about anymore — but should.", category: "Web", read: "10 min", date: "Jun 4, 2026" },
  { slug: "finops-for-startups", title: "FinOps for startups without a FinOps team", excerpt: "A 90-day discipline that cuts cloud spend 30–50% without hiring anyone.", category: "Cloud", read: "7 min", date: "May 20, 2026" },
  { slug: "designing-for-motion", title: "Designing for motion (without the motion sickness)", excerpt: "Restraint, easing, and knowing when your hero animation is doing too much.", category: "Design", read: "5 min", date: "May 2, 2026" },
  { slug: "seo-in-the-age-of-llms", title: "SEO in the age of LLM answers", excerpt: "What still ranks, what doesn't, and what changed the day ChatGPT started citing.", category: "Marketing", read: "9 min", date: "Apr 18, 2026" },
];

export const jobs = [
  { title: "Senior AI Engineer", team: "AI", location: "Remote", type: "Full-time" },
  { title: "Product Designer", team: "Design", location: "London / Remote", type: "Full-time" },
  { title: "Platform Engineer", team: "Cloud", location: "Remote", type: "Full-time" },
  { title: "Growth Marketer", team: "Marketing", location: "New York", type: "Full-time" },
  { title: "Technical Writer", team: "Content", location: "Remote", type: "Contract" },
  { title: "Sales Development Rep", team: "GTM", location: "Dubai", type: "Full-time" },
];

export const faqs = [
  { q: "How quickly can you start?", a: "Most engagements begin within one week of signature. Urgent projects can start in 48 hours." },
  { q: "Do you work with startups or only enterprises?", a: "Both. We have dedicated pricing tracks for pre-seed to Series A, and enterprise programs above." },
  { q: "Who owns the code and IP?", a: "You do. Full transfer on delivery, with a repo, docs, and a handover session." },
  { q: "How do you handle security and compliance?", a: "SOC 2-aligned processes, SSO, code review, secrets management, and NDA available on request." },
  { q: "What if we don't like the work?", a: "We work in two-week sprints with a checkpoint at the end of each. Cancel any sprint for any reason." },
  { q: "Do you offer ongoing support?", a: "Yes — retainers for maintenance, on-call SRE, and a growth partnership model for marketing." },
];

export { Sparkles, LineChart, Users, Award };
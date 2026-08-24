import safari from "@/assets/work-safari.jpg";
import ecommerce from "@/assets/work-ecommerce.jpg";
import school from "@/assets/work-school.jpg";
import realestate from "@/assets/work-realestate.jpg";
import hotel from "@/assets/work-hotel.jpg";
import agritech from "@/assets/work-agritech.jpg";
import corporate from "@/assets/work-corporate.jpg";
import restaurant from "@/assets/work-restaurant.jpg";
import pms from "@/assets/work-pms.jpg";
import fintech from "@/assets/work-fintech.jpg";

export type Project = {
  slug: string;
  name: string;
  industry: string;
  summary: string;
  image: string;
  alt: string;
  tech: string[];
  features: string[];
  challenge: string;
  solution: string;
  result: string;
  metrics: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "luxury-safari-tours",
    name: "Savannah Trails Safaris",
    industry: "Tourism & Travel",
    summary:
      "A tour operator was losing high-value international enquiries to competitors with stronger websites. We built an editorial safari platform where every destination and package tells a story, and where an enquiry takes under a minute to send.",
    image: safari,
    alt: "Luxury safari tour company website homepage built by WebMakers",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    features: [
      "Destination pages with rich photography",
      "Tour package builder with day-by-day itineraries",
      "Multi-step booking and enquiry system",
      "Filterable gallery and traveller reviews",
      "Mobile-first responsive design",
    ],
    challenge:
      "The client relied entirely on OTA marketplaces and social media DMs. There was no credible online home for a premium safari brand, and enquiries arrived without dates, budgets or group sizes — making them slow and expensive to qualify.",
    solution:
      "WebMakers designed a photography-led experience with dedicated destination and package pages, then engineered a structured enquiry flow that captures travel dates, party size and budget before submission. Content is managed by the client without developer involvement.",
    result:
      "Direct enquiries became the client's primary booking channel, and the sales team now responds with tailored quotes on the first reply instead of a chain of clarifying emails.",
    metrics: [
      { label: "More direct enquiries", value: "3.4x" },
      { label: "Mobile traffic served", value: "72%" },
      { label: "Avg. load time", value: "1.2s" },
    ],
  },
  {
    slug: "modern-ecommerce-store",
    name: "UrbanStride Commerce",
    industry: "E-Commerce & Retail",
    summary:
      "A growing retail brand needed to move off social-media selling. We built a complete online store with catalogue, cart, checkout, payments and an admin back office the team runs themselves.",
    image: ecommerce,
    alt: "Modern e-commerce store website with product catalogue built by WebMakers",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe", "M-Pesa API"],
    features: [
      "Product catalogue with variants and stock control",
      "Cart, wishlist and guest checkout",
      "Card and mobile money payment integration",
      "Customer accounts and order history",
      "Admin dashboard for orders and inventory",
    ],
    challenge:
      "Orders arrived through WhatsApp screenshots. Stock was tracked in a notebook, oversells were routine, and there was no way to run a promotion or measure what actually sold.",
    solution:
      "We built a storefront with real inventory logic, integrated card and mobile money payments, and shipped an admin panel where staff manage products, fulfil orders and issue refunds without touching code.",
    result:
      "The brand now processes orders end to end online, with accurate stock levels and a repeat-purchase rate they can finally measure.",
    metrics: [
      { label: "Checkout completion", value: "68%" },
      { label: "Manual order admin", value: "-80%" },
      { label: "Products managed", value: "600+" },
    ],
  },
  {
    slug: "private-school-website",
    name: "Riverview Academy",
    industry: "Education",
    summary:
      "An established private school looked dated online while competing for admissions. We rebuilt their web presence around the single question parents ask: is this the right school for my child?",
    image: school,
    alt: "Private school website with admissions and programmes built by WebMakers",
    tech: ["React", "TypeScript", "Tailwind CSS", "Headless CMS"],
    features: [
      "Online admissions enquiry and tour booking",
      "Academic programmes by level",
      "News, events and term calendar",
      "Staff and leadership profiles",
      "Parent contact and support channels",
    ],
    challenge:
      "Admissions ran on phone calls and printed brochures. The old site had no mobile layout, no way to publish news, and no path from interest to application.",
    solution:
      "WebMakers structured the site around the parent journey — programmes, campus life, fees guidance and admissions — and added a tour-booking flow plus a news system the communications team updates weekly.",
    result:
      "Admissions enquiries now arrive complete and pre-qualified, and the school publishes announcements the same day instead of waiting on an external developer.",
    metrics: [
      { label: "Admissions enquiries", value: "+120%" },
      { label: "Pages self-managed", value: "100%" },
      { label: "Accessibility score", value: "97" },
    ],
  },
  {
    slug: "real-estate-platform",
    name: "Modern Living Realty",
    industry: "Real Estate",
    summary:
      "A property agency needed listings that buyers could actually search. We built a platform with filtering, map context, agent profiles and inbound lead routing.",
    image: realestate,
    alt: "Real estate property listing platform with search and filters built by WebMakers",
    tech: ["React", "Next.js", "PostgreSQL", "REST APIs", "Mapbox"],
    features: [
      "Property listings with rich media galleries",
      "Search and filtering by price, location and type",
      "Detailed property pages with map context",
      "Agent profiles and direct enquiry routing",
      "Saved properties for returning buyers",
    ],
    challenge:
      "Listings lived in PDF flyers and WhatsApp groups. Buyers could not filter by budget or neighbourhood, and enquiries landed in one shared inbox with no owner.",
    solution:
      "We built a searchable listings platform with structured property data, then routed each enquiry directly to the responsible agent with the property context attached.",
    result:
      "Buyers self-serve before contacting an agent, so viewings are booked by people who already match the property's price band and location.",
    metrics: [
      { label: "Qualified viewings", value: "+64%" },
      { label: "Listings live", value: "300+" },
      { label: "Lead response time", value: "<2h" },
    ],
  },
  {
    slug: "hotel-resort-website",
    name: "Serena Vista Resort",
    industry: "Hospitality",
    summary:
      "A boutique resort was paying heavy commissions on every booking. We built a direct-booking website that makes the property look as good online as it does in person.",
    image: hotel,
    alt: "Luxury hotel and resort website with room booking built by WebMakers",
    tech: ["React", "TypeScript", "Node.js", "Booking API", "Tailwind CSS"],
    features: [
      "Room and suite pages with live rates",
      "Availability check and booking enquiry widget",
      "Amenities, dining and experiences sections",
      "Immersive photo gallery",
      "Location, directions and transfer information",
    ],
    challenge:
      "Almost all bookings came through third-party platforms that took a double-digit cut and owned the guest relationship. The resort's own site could not take a date range.",
    solution:
      "WebMakers built an atmospheric site with a persistent availability widget, clear rate presentation and a booking enquiry flow connected to the property management system.",
    result:
      "Direct bookings now make up a meaningful share of occupancy, and the resort keeps the guest data it used to hand to marketplaces.",
    metrics: [
      { label: "Direct bookings", value: "+41%" },
      { label: "Commission saved", value: "15%" },
      { label: "Avg. session time", value: "3m 40s" },
    ],
  },
  {
    slug: "agritech-platform",
    name: "AgriSmart Platform",
    industry: "Agriculture / AgriTech",
    summary:
      "A farmer network needed one place to track production and reach buyers. We built a dashboard-driven platform that connects farm records to a live marketplace.",
    image: agritech,
    alt: "AgriTech farmer dashboard and marketplace platform built by WebMakers",
    tech: ["React", "Python", "PostgreSQL", "REST APIs", "Chart.js"],
    features: [
      "Farmer dashboard with yield and revenue tracking",
      "Marketplace listings with live market prices",
      "Weather and advisory panel",
      "Order management for buyers and sellers",
      "Community and resource library",
    ],
    challenge:
      "Farmers sold through brokers with no price transparency, and the organisation had no aggregate view of production across its member network.",
    solution:
      "We designed a role-based platform: farmers log harvests and list produce, buyers browse and order, and administrators see production and sales data across the whole network.",
    result:
      "Members negotiate from real market data instead of rumour, and the organisation reports on production without collecting paper forms.",
    metrics: [
      { label: "Farmers onboarded", value: "1,200+" },
      { label: "Broker markup removed", value: "18%" },
      { label: "Reporting time", value: "-90%" },
    ],
  },
  {
    slug: "corporate-website",
    name: "Apex Consulting Group",
    industry: "Professional Services",
    summary:
      "A consulting firm's credibility gap was its own website. We rebuilt it as a proof-driven corporate presence with services, case studies and a clean lead path.",
    image: corporate,
    alt: "Corporate consulting company website built by WebMakers",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    features: [
      "Company profile and positioning",
      "Structured service lines",
      "Case study library",
      "Team and leadership profiles",
      "Lead generation and contact routing",
    ],
    challenge:
      "The firm won work on reputation but lost tenders on first impression. Prospects could not see what the team had delivered or who they would be working with.",
    solution:
      "WebMakers built a restrained, confident corporate site with a case study system, service detail pages and partner profiles — designed for procurement teams doing due diligence.",
    result:
      "The site is now sent ahead of pitches instead of avoided, and inbound enquiries reference specific case studies.",
    metrics: [
      { label: "Inbound enquiries", value: "+90%" },
      { label: "Lighthouse performance", value: "98" },
      { label: "Case studies published", value: "24" },
    ],
  },
  {
    slug: "restaurant-ordering",
    name: "Grill House Kitchen",
    industry: "Food & Hospitality",
    summary:
      "A busy restaurant was losing delivery orders to aggregator apps. We built a branded ordering site with a digital menu, cart and checkout they control end to end.",
    image: restaurant,
    alt: "Restaurant website with digital menu and online food ordering built by WebMakers",
    tech: ["React", "Node.js", "PostgreSQL", "M-Pesa API", "Tailwind CSS"],
    features: [
      "Photo-led digital menu with categories",
      "Cart with quantity and item options",
      "Delivery and pickup checkout",
      "Order notifications to the kitchen",
      "Locations, hours and contact",
    ],
    challenge:
      "Aggregator commissions ate the margin on every plate, and phone orders were misheard during peak service.",
    solution:
      "We built an ordering experience that looks like the restaurant, not a marketplace, with an itemised cart and kitchen-side order notifications that removed the phone from the loop.",
    result:
      "The kitchen now receives accurate, itemised tickets and keeps the full margin on every direct order.",
    metrics: [
      { label: "Commission-free orders", value: "100%" },
      { label: "Order errors", value: "-75%" },
      { label: "Avg. order value", value: "+22%" },
    ],
  },
  {
    slug: "property-management-system",
    name: "Property Manager Pro",
    industry: "Business Systems",
    summary:
      "A property manager ran 24 buildings on spreadsheets. We built an operational system covering units, tenants, leases, rent collection and reporting.",
    image: pms,
    alt: "Property management system dashboard built by WebMakers",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Recharts"],
    features: [
      "Portfolio dashboard with occupancy metrics",
      "Property, unit and tenant records",
      "Lease tracking with renewal alerts",
      "Rent collection and arrears status",
      "Maintenance requests and financial reports",
    ],
    challenge:
      "Rent status lived across a dozen spreadsheets. Arrears were discovered late, lease renewals were missed, and owner reports took days to assemble each month.",
    solution:
      "WebMakers built a role-based management system with a single source of truth for units, tenants and payments, plus automated arrears flags and one-click owner reports.",
    result:
      "Month-end reporting dropped from days to minutes, and arrears are caught in the week they occur rather than the quarter.",
    metrics: [
      { label: "Units managed", value: "168" },
      { label: "Collection rate", value: "93.5%" },
      { label: "Reporting time", value: "-95%" },
    ],
  },
  {
    slug: "fintech-business-platform",
    name: "Finexus Business",
    industry: "FinTech",
    summary:
      "A financial services startup needed a product-grade dashboard for business customers: accounts, transactions, analytics and secure access.",
    image: fintech,
    alt: "FinTech business dashboard platform with analytics built by WebMakers",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    features: [
      "Multi-account balance overview",
      "Transaction history with search and filters",
      "Cash-flow and income analytics",
      "Role-based user accounts",
      "Secure authentication and audit logging",
    ],
    challenge:
      "The team had a working API and no interface a business customer would trust with money. Investor demos relied on imagination.",
    solution:
      "We designed and built a dark, data-dense product UI with charting, filtering and role-based permissions, engineered for clarity under real transaction volume.",
    result:
      "The platform became the company's primary demo asset and shipped to production customers with authentication and audit logging in place.",
    metrics: [
      { label: "Transactions rendered", value: "50k+" },
      { label: "Dashboard load", value: "<1s" },
      { label: "Uptime", value: "99.9%" },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

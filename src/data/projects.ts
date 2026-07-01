export type Project = {
  title: string;
  slug: string;
  category: string;
  role: string;
  description: string;
  overview: string;
  technologies: string[];
  features: string[];
  images?: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "SELECT",
    slug: "select",
    category: "Mobile Development",
    role: "Mobile Developer / Team Contributor",
    description:
      "A mobile electronic rental application with smart availability, identity verification, payment simulation, and admin management.",
    overview:
      "SELECT (Sewa Electronic) is a mobile application for electronic device rental. The application helps customers browse electronic products, save favorite items, make bookings, verify identity using KTP and GPS location, perform payment simulation, and monitor rental status. On the admin side, the system supports dashboard summary, item management, rental order management, identity verification approval, location verification through map, and rental process control.",
    technologies: [
      "Flutter",
      "Dart",
      "Riverpod",
      "Dio",
      "Supabase",
      "REST API",
      "Midtrans",
      "OpenStreetMap",
    ],
    features: [
      "Customer and admin role-based interface",
      "Login, register, and Google Login",
      "Electronic product catalog",
      "Favorite item management",
      "Booking and rental status tracking",
      "KTP verification with photo and GPS location",
      "Payment simulation using Midtrans WebView",
      "Admin dashboard and item management",
      "Location-aware verification using OpenStreetMap",
    ],
    images: [
      "/projects/select/1.png",
      "/projects/select/2.png",
      "/projects/select/3.png",
    ],
    github: "",
    demo: "",
    featured: true,
  },
  {
    title: "PurePond",
    slug: "purepond",
    category: "IoT & Mobile Application",
    role: "Programmer",
    description:
      "An IoT-based mobile system for monitoring ammonia and turbidity levels in catfish ponds and automating water replacement.",
    overview:
      "PurePond is an IoT and mobile-based system designed to help catfish farmers monitor pond water quality in real time. The system monitors ammonia and turbidity levels, sends notifications when water parameters exceed safe thresholds, records water replacement history, and supports automatic water replacement using IoT devices. In this project, I contributed as a programmer by developing the mobile application using Flutter and supporting notification features using Firebase.",
    technologies: [
      "Flutter",
      "Dart",
      "Firebase",
      "Firebase Cloud Messaging",
      "ESP32",
      "MQTT",
      "IoT Sensors",
      "Mobile App",
    ],
    features: [
      "Mobile dashboard for pond monitoring",
      "Real-time ammonia monitoring",
      "Real-time turbidity monitoring",
      "Water quality notification system",
      "Firebase-based notification support",
      "Automatic water replacement control",
      "Drain history tracking",
      "IoT device integration with ESP32 and sensors",
    ],
    images: [
      "/projects/purepond/1.png",
      "/projects/purepond/2.png",
      "/projects/purepond/3.png",
    ],
    github: "",
    demo: "",
    featured: true,
  },
  {
    title: "Car Rental Mobile App",
    slug: "car-rental-mobile-app",
    category: "Mobile Development",
    role: "Mobile Developer",
    description:
      "A Flutter-based car rental application integrated with REST API, authentication, booking, payment, and user management.",
    overview:
      "Car Rental Mobile App is an individual mobile application project built using Flutter with REST API integration. The application manages the car rental process from authentication, car listing, car detail, booking, payment, profile management, and admin/user role-based navigation. The code structure separates model, service, screen, and widget layers to make the application easier to maintain and develop.",
    technologies: [
      "Flutter",
      "Dart",
      "REST API",
      "Shared Preferences",
      "Token Authentication",
      "Service Layer",
    ],
    features: [
      "Register, login, logout, and token-based session",
      "Role-based navigation for admin and user",
      "Car list and car detail screen",
      "Car availability checking",
      "Booking creation and booking management",
      "Payment creation and payment history",
      "User and profile management",
      "Reusable widgets and separated service layer",
    ],
    images: [
      "/projects/car-rental/1.png",
      "/projects/car-rental/2.png",
      "/projects/car-rental/3.png",
    ],
    github:
      "https://github.com/AdenAlexandriaSyaifulPerdana/PAA_Pertemuan6_CarRentalApp",
    demo: "",
    featured: true,
  },
  {
    title: "HopeBlood",
    slug: "hopeblood",
    category: "Web Development",
    role: "Web Developer",
    description:
      "A blood donor information system designed to simplify donor data management, search, and matching.",
    overview:
      "HopeBlood is a web-based blood donor information system designed to simplify the process of collecting donor data, searching available donors, and matching blood donors with patients or recipients who need blood. This project was developed using Laravel and PostgreSQL through pgAdmin as part of a web programming course project.",
    technologies: ["Laravel", "Blade", "PostgreSQL", "pgAdmin", "PHP"],
    features: [
      "Donor data management",
      "Patient or recipient data management",
      "Blood type search",
      "Donor and recipient matching",
      "Web-based information system",
      "Structured database design",
    ],
    images: [
      "/projects/hopeblood/1.png",
      "/projects/hopeblood/2.png",
      "/projects/hopeblood/3.png",
    ],
    github: "",
    demo: "",
    featured: true,
  },
  {
    title: "LATAH",
    slug: "latah",
    category: "Web Development",
    role: "Frontend Developer",
    description:
      "A web-based civic reporting platform for public issue submission and monitoring.",
    overview:
      "LATAH is a web-based civic reporting platform designed to help people submit public issue reports in a more structured, transparent, and accessible way. This project focuses on user interface design, report submission flow, public interaction, and data-based issue monitoring.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Vercel",
    ],
    features: [
      "Public issue reporting",
      "Report category management",
      "Image and location support",
      "Report status monitoring",
      "Public comments and support",
      "Smart mapping concept",
      "AI classification concept",
    ],
    images: [
      "/projects/latah/1.png",
      "/projects/latah/2.png",
      "/projects/latah/3.png",
    ],
    github:
      "https://github.com/AdenAlexandriaSyaifulPerdana/latah-frontend-new",
    demo: "",
    featured: true,
  },
  {
    title: "Bus Connect",
    slug: "bus-connect",
    category: "Algorithm & CLI",
    role: "Python Developer",
    description:
      "A command-line bus ticket ordering information system built using Python.",
    overview:
      "Bus Connect is a console-based bus ticket ordering system developed using Python. The application supports user registration, login, bus route display, ticket ordering, voucher claim, payment flow, and e-ticket report generation. The project focuses on algorithmic thinking, structured data processing, command-line interaction, and local file storage using CSV.",
    technologies: ["Python", "CLI", "CSV", "Pandas", "Algorithm"],
    features: [
      "User registration and login",
      "Admin login and admin menu",
      "Bus route and ticket availability display",
      "Regular and round-trip ticket ordering",
      "Voucher claim and discount calculation",
      "Payment input validation",
      "E-ticket generation",
      "CSV-based data storage",
    ],
    images: [
      "/projects/bus-connect/1.png",
      "/projects/bus-connect/2.png"
    ],
    github: "",
    demo: "",
    featured: false,
  },
  {
    title: "Network Simulation",
    slug: "network-simulation",
    category: "Networking",
    role: "Network Designer",
    description:
      "A computer network simulation project using VLAN, routing, WLAN, and troubleshooting concepts.",
    overview:
      "This project focuses on computer network design and simulation using Cisco Packet Tracer. It includes network segmentation, routing configuration, wireless network setup, and troubleshooting scenarios. This project reflects my TKJ background and Junior Technical Support foundation.",
    technologies: [
      "Cisco Packet Tracer",
      "VLAN",
      "Routing",
      "WLAN",
      "DHCP",
      "Troubleshooting",
    ],
    features: [
      "VLAN configuration",
      "Inter-VLAN routing",
      "Wireless network setup",
      "DHCP configuration",
      "Network troubleshooting",
      "Network topology design",
    ],
    images: [
      "/projects/network-simulation/1.png",
      "/projects/network-simulation/2.png",
    ],
    github: "",
    demo: "",
    featured: false,
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const featuredProjects = projects.filter((project) => project.featured);

export const otherProjects = projects.filter((project) => !project.featured);
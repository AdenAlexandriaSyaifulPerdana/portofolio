export type Experience = {
  title: string;
  organization: string;
  type: string;
  description: string;
  image: string;
};

export const experiences: Experience[] = [
  {
    title: "Laboratory Assistant",
    organization: "Faculty of Computer Science, Universitas Jember",
    type: "Academic Experience",
    description:
      "Infrastructure Technology Laboratory Assistant with responsibilities related to supporting practicum activities, assisting students, and helping laboratory learning processes.",
    image: "/experiences/lab-assistant.png",
  },
  {
    title: "Teaching Assistant",
    organization: "Operating System Practicum",
    type: "Academic Experience",
    description:
      "Teaching Assistant for Operating System Practicum, supporting learning activities, practicum guidance, and student assistance during practical sessions.",
    image: "/experiences/teaching-assistant.png",
  },
  {
    title: "LSP Junior Technical Support",
    organization: "Professional Certification",
    type: "Certification",
    description:
      "Certified Junior Technical Support with vocational school background in TKJ, covering basic computer support, troubleshooting, and networking fundamentals.",
    image: "/experiences/lsp-certificate.png",
  },
  {
    title: "Chief Marketing Officer",
    organization: "Makaronich Entrepreneurship Project",
    type: "Leadership & Business",
    description:
      "Contributed as Chief Marketing Officer in an entrepreneurship project by supporting product positioning, marketing strategy, promotion planning, target market analysis, and business pitch deck development.",
    image: "/experiences/makaronich.png",
  },
];
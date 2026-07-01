import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aden Alexandria | Web & Mobile Developer Portfolio",
  description:
    "Portfolio of Aden Alexandria, a Computer Science student interested in web development, mobile development, database integration, networking, and IoT-based systems.",
  keywords: [
    "Aden Alexandria",
    "Portfolio",
    "Web Developer",
    "Mobile Developer",
    "Flutter Developer",
    "Next.js",
    "Laravel",
    "Supabase",
    "Networking",
    "IoT",
  ],
  authors: [
    {
      name: "Aden Alexandria",
    },
  ],
  openGraph: {
    title: "Aden Alexandria | Web & Mobile Developer Portfolio",
    description:
      "Computer Science student with interests in web development, mobile development, database integration, networking, and IoT-based systems.",
    type: "website",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Aden Alexandria Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
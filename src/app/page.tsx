"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ProjectImageSlider from "../components/ProjectImageSlider";
import { featuredProjects, otherProjects } from "../data/projects";
import { experiences } from "../data/experiences";

const roles = [
  "Junior Web Developer",
  "Junior Mobile Developer",
  "Database Integration Learner",
  "Networking Background",
];

const skills = [
  {
    title: "Web Development",
    desc: "Next.js, Laravel, Tailwind CSS, HTML, CSS, JavaScript Basic",
  },
  {
    title: "Mobile Development",
    desc: "Flutter, Dart, REST API, Firebase, Supabase Integration",
  },
  {
    title: "Database",
    desc: "Supabase, PostgreSQL, MySQL, pgAdmin, Database Design",
  },
  {
    title: "Networking & IoT",
    desc: "Technical Support, Troubleshooting, ESP32, Firebase Notification, Cisco Packet Tracer",
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbarSolid, setNavbarSolid] = useState(false);
  const [typingText, setTypingText] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setNavbarSolid(window.scrollY > 50);

      const revealElements = document.querySelectorAll("[data-reveal]");

      revealElements.forEach((element) => {
        const rect = element.getBoundingClientRect();

        if (rect.top < window.innerHeight - 100) {
          element.classList.remove("opacity-0", "translate-y-8");
          element.classList.add("opacity-100", "translate-y-0");
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const typeEffect = () => {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        setTypingText(currentRole.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setTypingText(currentRole.substring(0, charIndex + 1));
        charIndex++;
      }

      let speed = isDeleting ? 60 : 100;

      if (!isDeleting && charIndex === currentRole.length) {
        speed = 1500;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 400;
      }

      timeoutId = setTimeout(typeEffect, speed);
    };

    typeEffect();

    return () => clearTimeout(timeoutId);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      {/* Navbar */}
      <header
        className={`fixed left-0 top-0 z-50 w-full border-b border-white/10 backdrop-blur transition-all duration-300 ${
          navbarSolid
            ? "bg-slate-950/95 shadow-lg shadow-cyan-500/5"
            : "bg-slate-950/80"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#home" className="text-lg font-bold tracking-wide text-white">
            Aden Alexandria Syaiful Perdana<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-cyan-400">
              About
            </a>
            <a href="#skills" className="transition hover:text-cyan-400">
              Skills
            </a>
            <a href="#projects" className="transition hover:text-cyan-400">
              Projects
            </a>
            <a href="#experience" className="transition hover:text-cyan-400">
              Experience
            </a>
            <a href="#contact" className="transition hover:text-cyan-400">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="hidden rounded-full border border-cyan-400/60 px-5 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950 md:inline-flex"
          >
            Hire Me
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex rounded-lg border border-white/10 p-2 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300 md:hidden"
            aria-label="Open mobile menu"
          >
            ☰
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="border-t border-white/10 bg-slate-950 px-4 py-4 sm:px-6 md:hidden">
            <div className="flex flex-col gap-4 text-sm text-slate-300">
              <a onClick={closeMobileMenu} href="#about">
                About
              </a>
              <a onClick={closeMobileMenu} href="#skills">
                Skills
              </a>
              <a onClick={closeMobileMenu} href="#projects">
                Projects
              </a>
              <a onClick={closeMobileMenu} href="#experience">
                Experience
              </a>
              <a onClick={closeMobileMenu} href="#contact">
                Contact
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-4 pt-24 sm:px-6"
      >
        <div className="absolute left-1/2 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-20 right-20 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />

        <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div
            data-reveal
            className="translate-y-8 opacity-0 transition-all duration-700"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
              Portfolio
            </p>

            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              Hi, I&apos;m Aden Alexandria
            </h1>

            <p className="mt-5 text-xl font-medium text-slate-300 md:text-2xl">
              <span className="text-cyan-300">{typingText}</span>
              <span className="animate-pulse text-cyan-400">|</span>
            </p>

            <p className="mt-5 max-w-xl leading-8 text-slate-400">
              Computer Science student with interests in web development, mobile
              development, database integration, networking, and IoT-based
              application development.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-300"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-300"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div
            data-reveal
            className="flex translate-y-8 justify-center opacity-0 transition-all delay-100 duration-700 md:justify-end"
          >
            <div className="relative h-72 w-72 max-w-full rounded-full border border-cyan-400/30 bg-slate-900 p-4 shadow-2xl shadow-cyan-500/10 sm:h-80 sm:w-80 md:h-96 md:w-96">
              <div className="h-full w-full overflow-hidden rounded-full bg-slate-800">
                <img
                  src="/profile.png"
                  alt="Aden Alexandria"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-cyan-400/40 bg-slate-950 px-5 py-2 text-sm font-medium text-cyan-300 shadow-lg shadow-cyan-500/10">
                Web & Mobile Developer
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
        <div
          data-reveal
          className="translate-y-8 opacity-0 transition-all duration-700"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            About Me
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Developer with infrastructure background.
          </h2>

          <p className="mt-6 max-w-3xl leading-8 text-slate-400">
            I am a Computer Science student who is interested in web
            development, mobile development, database integration, networking,
            and IoT-based systems. I have a vocational school background in TKJ
            and an LSP Junior Technical Support certification, which helps me
            understand both software and infrastructure fundamentals.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
              <p className="text-3xl font-bold text-cyan-400">Web</p>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Interested in building responsive and structured websites using
                modern web technologies.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
              <p className="text-3xl font-bold text-cyan-400">Mobile</p>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Interested in developing mobile applications using Flutter with
                API and database integration.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
              <p className="text-3xl font-bold text-cyan-400">Network</p>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Has a TKJ background and technical support foundation in
                troubleshooting, networking, and IoT integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-slate-900/50 px-4 py-24 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <div
            data-reveal
            className="translate-y-8 opacity-0 transition-all duration-700"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Skills
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Technologies I work with.
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill) => (
              <div
                key={skill.title}
                data-reveal
                className="translate-y-8 rounded-2xl border border-white/10 bg-slate-950 p-6 opacity-0 transition-all duration-700 hover:-translate-y-2 hover:border-cyan-400/60"
              >
                <h3 className="font-semibold text-white">{skill.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
        <div
          data-reveal
          className="translate-y-8 opacity-0 transition-all duration-700"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Projects
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Featured technical projects.
          </h2>
          <p className="mt-5 max-w-2xl leading-8 text-slate-400">
            Selected projects that represent my learning journey in web
            development, mobile development, database integration, algorithm,
            networking, and IoT.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <article
              key={project.slug}
              data-reveal
              className="group w-full max-w-full translate-y-8 rounded-2xl border border-white/10 bg-slate-900 p-5 opacity-0 transition-all duration-700 hover:-translate-y-2 hover:border-cyan-400/60"
            >
              <ProjectImageSlider
                title={project.title}
                images={project.images}
                className="mb-5 aspect-video w-full rounded-xl"
              />

              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                  {project.category}
                </span>
                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                  {project.technologies[0]}
                </span>
              </div>

              <h3 className="text-xl font-bold">{project.title}</h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {project.description}
              </p>

              <Link
                href={`/projects/${project.slug}`}
                className="mt-5 inline-flex text-sm font-semibold text-cyan-400 group-hover:text-cyan-300"
              >
                View Detail →
              </Link>
            </article>
          ))}
        </div>

        {otherProjects.length > 0 && (
          <div className="mt-20">
            <div
              data-reveal
              className="translate-y-8 opacity-0 transition-all duration-700"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                Other Projects
              </p>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Additional works.
              </h2>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              {otherProjects.map((project) => (
                <article
                  key={project.slug}
                  data-reveal
                  className="group w-full max-w-full translate-y-8 rounded-2xl border border-white/10 bg-slate-900 p-5 opacity-0 transition-all duration-700 hover:-translate-y-2 hover:border-cyan-400/60"
                >
                  <ProjectImageSlider
                    title={project.title}
                    images={project.images}
                    className="mb-5 aspect-video w-full rounded-xl"
                  />

                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                      {project.category}
                    </span>
                    <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                      {project.technologies[0]}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold">{project.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {project.description}
                  </p>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="mt-5 inline-flex text-sm font-semibold text-cyan-400 group-hover:text-cyan-300"
                  >
                    View Detail →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Experience */}
      <section id="experience" className="bg-slate-900/50 px-4 py-24 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <div
            data-reveal
            className="translate-y-8 opacity-0 transition-all duration-700"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Experience
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Experience, certification, and leadership.
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-slate-400">
              A collection of academic experience, certification, and leadership
              activities that support my growth as a web and mobile developer.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {experiences.map((item) => (
              <article
                key={`${item.title}-${item.organization}`}
                data-reveal
                className="group w-full max-w-full translate-y-8 overflow-hidden rounded-2xl border border-white/10 bg-slate-950 opacity-0 transition-all duration-700 hover:-translate-y-2 hover:border-cyan-400/60"
              >
                <div className="aspect-[5/3] w-full overflow-hidden bg-slate-800">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-contain p-2 transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <div className="mb-4 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                      {item.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white">{item.title}</h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {item.organization}
                  </p>

                  <p className="mt-4 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
        <div
          data-reveal
          className="translate-y-8 opacity-0 transition-all duration-700"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Let&apos;s connect.
          </h2>
          <p className="mt-6 max-w-2xl leading-8 text-slate-400">
            I am open to internship opportunities, collaboration, and project
            discussion related to web development, mobile development, database,
            networking, IoT, or IT support.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:adenperdana1477@gmail.com"
              className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-300"
            >
              Email Me
            </a>

            <a
              href="https://github.com/AdenAlexandriaSyaifulPerdana"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-300"
            >
              GitHub
            </a>

            <a
              href="#"
              className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-300"
            >
              LinkedIn
            </a>

            <a
              href="/cv.pdf"
              download="CV_Aden_Alexandria.pdf"
              className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-300"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Aden Alexandria Syaiful Perdana. All rights reserved.
      </footer>
    </main>
  );
}
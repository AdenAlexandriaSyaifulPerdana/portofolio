import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectImageSlider from "../../../components/ProjectImageSlider";
import { getProjectBySlug, projects } from "../../../data/projects";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - Aden Portfolio`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-bold tracking-wide text-white">
            Aden<span className="text-cyan-400">.</span>
          </Link>

          <Link
            href="/#projects"
            className="rounded-full border border-cyan-400/60 px-5 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
          >
            Back to Projects
          </Link>
        </nav>
      </header>

      <section className="px-6 pb-24 pt-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-sm text-slate-400">
            <Link href="/" className="transition hover:text-cyan-300">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/#projects" className="transition hover:text-cyan-300">
              Projects
            </Link>
            <span className="mx-2">/</span>
            <span className="text-cyan-300">{project.title}</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
                {project.category}
              </div>

              <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
                {project.title}
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-400">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-300"
                  >
                    View GitHub
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-300"
                  >
                    Live Demo
                  </a>
                )}

                <Link
                  href="/#contact"
                  className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-300"
                >
                  Discuss Project
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900 p-4 shadow-2xl shadow-cyan-500/10">
              <ProjectImageSlider
                title={project.title}
                images={project.images}
                className="h-80 w-full rounded-2xl"
                showDots
              />
            </div>
          </div>

          <div className="mt-20 grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="rounded-3xl border border-white/10 bg-slate-900 p-8">
                <h2 className="text-2xl font-bold text-white">
                  Project Overview
                </h2>

                <p className="mt-5 leading-8 text-slate-400">
                  {project.overview}
                </p>
              </div>

              <div className="mt-8 rounded-3xl border border-white/10 bg-slate-900 p-8">
                <h2 className="text-2xl font-bold text-white">
                  Main Features
                </h2>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {project.features.map((feature) => (
                    <div
                      key={feature}
                      className="rounded-2xl border border-white/10 bg-slate-950 p-4"
                    >
                      <p className="text-sm leading-6 text-slate-300">
                        <span className="mr-2 text-cyan-400">✓</span>
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="space-y-8">
              <div className="rounded-3xl border border-white/10 bg-slate-900 p-8">
                <h2 className="text-xl font-bold text-white">My Role</h2>
                <p className="mt-4 text-slate-400">{project.role}</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-slate-900 p-8">
                <h2 className="text-xl font-bold text-white">Technologies</h2>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-slate-900 p-8">
                <h2 className="text-xl font-bold text-white">Navigation</h2>

                <div className="mt-5 flex flex-col gap-3">
                  <Link
                    href="/#projects"
                    className="rounded-xl border border-white/10 px-4 py-3 text-sm text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300"
                  >
                    Back to All Projects
                  </Link>

                  <Link
                    href="/#contact"
                    className="rounded-xl border border-white/10 px-4 py-3 text-sm text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300"
                  >
                    Contact Me
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
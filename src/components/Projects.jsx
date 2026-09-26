import { projects } from "../data/project";

const Project = () => {
  return (
    <section id="projects" className="reveal py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-6 pb-16 lg:pb-20 border-b border-line-border">
        <div className="mb-12 md:mb-16">
          <span className="text-xs font-semibold tracking-wider text-brand uppercase">
            PROJECTS
          </span>
          <h2 className="mt-1 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-main-text">
            Featured Projects
          </h2>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {projects.map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={project.id || index}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
              >
                <div
                  className={`w-full overflow-hidden rounded-2xl border border-line-border bg-card-bg shadow-2xs ${
                    isEven ? "lg:order-last" : "lg:order-first"
                  }`}
                >
                  <div
                    className="flex h-9 items-center gap-2 border-b border-line-border bg-main-bg/50 px-4"
                    aria-hidden="true"
                  >
                    <span className="size-2.5 rounded-full border border-line-border bg-transparent" />
                    <span className="size-2.5 rounded-full border border-line-border bg-transparent" />
                    <span className="size-2.5 rounded-full border border-line-border bg-transparent" />
                  </div>

                  <img
                    src={project.image}
                    alt={`${project.name} interface`}
                    width="1600"
                    height="1008"
                    loading="lazy"
                    className="block h-auto w-full object-cover"
                  />
                </div>

                <div className="flex flex-col justify-center space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-main-text lg:text-3xl">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-text lg:text-base">
                      {project.tagline}
                    </p>
                  </div>

                  <ul className="space-y-2.5 text-sm lg:text-base text-muted-text">
                    {project.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.stack.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-line-border bg-badge-bg px-3 py-1 text-xs font-medium text-main-text"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-2xs transition-colors hover:bg-brand-hover"
                    >
                      Live App
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-lg border border-line-border bg-card-bg px-5 py-2.5 text-sm font-semibold text-main-text transition-colors hover:bg-main-bg"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Project;

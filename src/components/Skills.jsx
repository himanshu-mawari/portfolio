import { stack } from "../data/stack";

const Skills = () => {
  return (
    <section id="skills" className="reveal py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-6 pb-16 lg:pb-20 border-b border-line-border">
        <div className="mb-8 md:mb-10">
          <span className="text-xs font-semibold tracking-wider text-brand uppercase">
            SKILLS
          </span>
          <h2 className="mt-1 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-main-text">
            Technical Stack
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {stack.map((category) => (
            <div
              key={category.title}
              className="rounded-3xl border border-line-border bg-card-bg p-6 sm:p-8 shadow-2xs transition-colors hover:border-brand/40"
            >
              <h3 className="mb-4 text-lg font-semibold text-main-text">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-line-border bg-badge-bg px-3.5 py-1.5 text-xs font-medium text-main-text"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

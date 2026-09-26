import { IoLocationOutline, IoSchoolOutline } from "react-icons/io5";

export default function AboutSection() {
  return (
    <section id="about" className="reveal py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 pb-16 lg:pb-24 border-b border-line-border">
        <div className="mb-12">
          <p className="text-sm text-brand  tracking-wider uppercase mb-2">
            About
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-main-text">
            A little about me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
          <div className="lg:col-span-2  border border-line-border text-lg text-muted-text p-8 space-y-4 rounded-3xl flex flex-col justify-center bg-card-bg shadow-xs">
            <p className="leading-relaxed ">
              I'm a full-stack developer working with React, Node.js, Express,
              and MongoDB, currently pursuing my BCA through IGNOU.
            </p>
            <p className="leading-relaxed ">
              I built and deployed{" "}
              <strong className="font-semibold text-main-text">
                DevTinder
              </strong>
              , a developer-matching platform with real-time chat, and{" "}
              <strong className="font-semibold text-main-text">Forever</strong>,
              a full-stack e-commerce platform with an admin panel and
              role-based access. Both projects are live and reflect my hands-on
              experience building core features across the full stack.
            </p>
          </div>

          <div className="lg:col-span-1 bg-card-bg border border-line-border p-8 rounded-3xl flex flex-col justify-between gap-6 shadow-xs">
            <div className="space-y-6 sm:flex lg:block sm:gap-12">
              <div>
                <div className="flex items-center gap-2 text-muted-text mb-1.5">
                  <IoLocationOutline className="size-4 text-brand" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-text">
                    Location
                  </span>
                </div>
                <p className="text-base font-semibold text-main-text">
                  New Delhi, India
                </p>
                <p className="text-xs text-muted-text mt-0.5">
                  Open to Gurugram & Noida
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-muted-text mb-1.5">
                  <IoSchoolOutline className="size-4 text-brand" />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    Education
                  </span>
                </div>
                <p className="text-base font-semibold text-main-text">
                  BCA (In Progress)
                </p>
                <p className="text-xs mt-0.5 text-muted-text">
                  IGNOU • 2024 – Present
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-line-border flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5 items-center justify-center shrink-0">
                <span className="relative  rounded-full h-2.5 w-2.5 bg-brand" />
              </span>
              <span className="text-xs font-medium text-brand">
                Open to work (Junior & Intern roles)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import {
  FiArrowUpRight,
  FiMail,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiFileText,
} from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="reveal py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-6 pb-16 lg:pb-20">
        <div className="mb-8 md:mb-10">
          <span className="text-xs font-semibold tracking-wider text-brand uppercase">
            CONTACT
          </span>
          <h2 className="mt-1 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-main-text">
            LET'S CONNECT
          </h2>
          <p className="mt-2 text-sm sm:text-base text-muted-text">
            Open to junior and internship opportunities in full-stack
            development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          <div className="rounded-3xl bg-card-bg border border-line-border p-6 sm:p-8 shadow-2xs flex flex-col justify-between gap-8">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-text block mb-1.5">
                  EMAIL
                </span>
                <a
                  href="mailto:mawrihimanshu83@gmail.com"
                  className="text-base sm:text-lg font-semibold text-main-text hover:text-brand transition-colors inline-flex items-center gap-2.5"
                >
                  <FiMail className="size-5 text-brand shrink-0" />
                  <span>mawrihimanshu83@gmail.com</span>
                </a>
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-text block mb-1.5">
                  LOCATION
                </span>
                <div className="flex items-center gap-2.5">
                  <FiMapPin className="size-5 text-brand mt-0.5 shrink-0" />
                  <div>
                    <p className="text-base font-semibold text-main-text">
                      New Delhi, India
                    </p>
                    <p className="text-xs text-muted-text mt-0.5">
                      Available in Gurugram · Noida
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-line-border flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-sm font-semibold text-main-text">
                <a
                  href="https://github.com/himanshu-mawari"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 hover:text-brand transition-colors"
                >
                  <FiGithub className="size-4" /> GitHub{" "}
                  <FiArrowUpRight className="size-3.5 text-muted-text" />
                </a>
                <a
                  href="https://linkedin.com/in/himanshu-mawari-79b621329"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 hover:text-brand transition-colors"
                >
                  <FiLinkedin className="size-4" /> LinkedIn{" "}
                  <FiArrowUpRight className="size-3.5 text-muted-text" />
                </a>
              </div>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-line-border bg-card-bg px-4 py-2 text-xs font-semibold text-main-text transition-colors hover:bg-main-bg"
              >
                <FiFileText className="size-3.5 text-brand" />
                <span>Resume</span>
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-card-bg border border-line-border p-6 sm:p-8 shadow-2xs flex flex-col justify-between gap-8">
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-main-text">
                Have something in mind?
              </h3>
              <p className="text-sm sm:text-base text-muted-text leading-relaxed">
                Whether you have an open role, a project idea, or just want to
                discuss web development, feel free to drop a message!
              </p>
            </div>

            <div className="pt-2">
              <a
                href="mailto:mawrihimanshu83@gmail.com?subject=Opportunity%20/%20Inquiry"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl bg-brand px-8 py-3.5 text-sm font-semibold text-white shadow-2xs transition-colors hover:bg-brand-hover"
              >
                <span>SAY HELLO</span>
                <FiArrowUpRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

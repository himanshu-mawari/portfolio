import { FaGithub } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { FaArrowDownLong } from "react-icons/fa6";
import DeveloperCard from "./DeveloperCard";

const Hero = () => {
  return (
    <section className="reveal min-h-screen pt-28 md:pt-56 lg:pt-28 ">
      <div className="max-w-6xl mx-auto px-6 border-b border-line-border pb-3 md:pb-7 lg:pb-5 xl:pb-6 2xl:pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 mb-12 md:mb-28 lg:mb-10 xl:mb-40 2xl:mb-32">
          <div className="w-full flex flex-col gap-2 items-center lg:items-start text-center lg:text-left">
            <p className="text-base md:text-lg text-brand md:mb-4 lg:mb-1">
              Hey I'm
            </p>

            <h1 className="text-5xl sm:text-6xl md:text-7xl 2xl:text-6xl text-main-text font-bold mb-2 md:mb-6 xl:whitespace-nowrap tracking-tight lg:mb-4 2xl:mb-2  ">
              Himanshu Mawari
            </h1>

            <p className="text-lg sm:text-xl text-muted-text md:text-2xl mb-2 md:mb-8 text-center   lg:mb-4 2xl:mb-2   font-medium">
              Full-Stack developer
            </p>

            <p className="text-lg text-muted-text max-w-2xl lg:max-w-3xl leading-relaxed mb-10 md:mb-12   lg:mb-8  ">
              I build full-stack web applications with React, Node.js, and
              MongoDB, working across the frontend and backend to build features
              like authentication, real-time functionality, and admin workflows.
            </p>

            <div className="flex gap-4 mb-8 md:mb-10   lg:mb-2    justify-start md:justify-center lg:justify-start">
              <a
                href="#projects"
                className="border border-line-border rounded-lg bg-brand text-white hover:bg-brand-hover px-6 py-3 font-medium cursor-pointer"
              >
                View Projects
              </a>

              <a className="border border-line-border rounded-lg bg-card-bg text-main-text px-6 py-3 cursor-pointer">
                Resume
              </a>
            </div>

            <div className="flex items-center justify-start md:justify-center lg:justify-start gap-5 mb-12 sm:mb-20 lg:mb-0">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-full border border-line-border bg-card-bg  text-muted-text hover:text-main-text  transition-all"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-full border border-line-border bg-card-bg text-muted-text hover:text-main-text  transition-all"
              >
                <BsLinkedin size={20} />
              </a>

              <a
                href="mailto:your.email@example.com"
                aria-label="Send Email"
                className="p-2.5 rounded-full border border-line-border bg-card-bg hover:text-brand transition-all"
              >
                <CiMail size={24} />
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <DeveloperCard />
          </div>
        </div>

        <div className="flex justify-center  text-muted-text animate-bounce">
          <FaArrowDownLong size={15} />
        </div>
      </div>
    </section>
  );
};

export default Hero;

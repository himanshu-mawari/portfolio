import { FaGithub } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="border-t border-line-border py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center md:flex-row justify-between gap-6">
          <a
            href="/"
            className="text-sm text-main-text font-semibold  transition-colors"
          >
            Himanshu Mawari
          </a>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/himanshu-mawari"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="text-muted-text hover:text-main-text transition-colors"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://linkedin.com/in/himanshu-mawari-79b621329"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="text-muted-text hover:text-main-text transition-colors"
            >
              <BsLinkedin size={18} />
            </a>
          </div>

          <p className="text-xs text-muted-text">
            © {new Date().getFullYear()} Himanshu Mawari. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

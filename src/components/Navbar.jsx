import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import MobileMenuOverlay from "./MobileMenuOverlay";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const onClose = () => {
    setIsMenuOpen(false);
  };
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line-border bg-main-bg/80 backdrop-blur-md transition-all">
        <nav className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
          <a
            href="/"
            className="text-sm md:text-base font-bold tracking-tight text-main-text hover:scale-110 transition-all duration-300"
          >
            Himanshu Mawari
          </a>

          <button
            type="button"
            aria-label="Toggle Navigation Menu"
            onClick={toggleMenu}
            className="md:hidden p-1.5 rounded-lg border border-line-border text-main-text hover:bg-card-bg transition-colors cursor-pointer"
          >
            {isMenuOpen ? <LuX size={20} /> : <LuMenu size={20} />}
          </button>

          <ul className="hidden md:flex items-center gap-1">
            <li>
              <a
                href="#about"
                className="relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-brand after:transition-all after:duration-300 hover:after:w-3/4 text-sm px-4 py-2  text-muted-text hover:text-main-text rounded-lg transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-brand after:transition-all after:duration-300 hover:after:w-3/4 text-sm px-4 py-2  text-muted-text hover:text-main-text rounded-lg transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-brand after:transition-all after:duration-300 hover:after:w-3/4 text-sm px-4 py-2  text-muted-text hover:text-main-text rounded-lg transition-colors"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-brand after:transition-all after:duration-300 hover:after:w-3/4 text-sm px-4 py-2  text-muted-text hover:text-main-text rounded-lg transition-colors"
              >
                Contact
              </a>
            </li>
            <li className="ml-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-sm px-4 py-2 font-semibold text-main-text border border-line-border bg-card-bg rounded-xl transition-colors hover:bg-main-bg"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <MobileMenuOverlay isOpen={isMenuOpen} onClose={onClose} />
    </>
  );
};

export default Navbar;

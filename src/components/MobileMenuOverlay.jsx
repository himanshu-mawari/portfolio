import { useEffect } from "react";

const MobileMenuOverlay = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 transition-opacity duration-300 md:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      <div
        className={`fixed top-16.25 left-0 right-0 z-40 bg-card-bg border-b border-line-border/40 shadow-2xl transition-all duration-300 ease-in-out md:hidden ${
          isOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center justify-center py-10 space-y-6">
          <a
            href="#about"
            onClick={onClose}
            className="text-muted-text hover:text-main-text transition-colors tracking-wide"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={onClose}
            className="text-muted-text hover:text-main-text transition-colors tracking-wide"
          >
            Projects
          </a>
          <a
            href="#skills"
            onClick={onClose}
            className="text-muted-text hover:text-main-text transition-colors tracking-wide"
          >
            Skills
          </a>
          <a
            href="#contact"
            onClick={onClose}
            className="text-muted-text hover:text-main-text transition-colors tracking-wide"
          >
            Contact
          </a>
        </nav>
      </div>
    </>
  );
};

export default MobileMenuOverlay;

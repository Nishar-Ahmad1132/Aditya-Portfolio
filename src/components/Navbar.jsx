import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Education", path: "/education" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300
    ${
      scrolled
        ? "bg-[#0b0f1a]/80 backdrop-blur-lg border border-white/10 shadow-lg"
        : "bg-[#0b0f1a]/60 backdrop-blur-md"
    }
  `}
    >
      <div
        className={`max-w-7xl mx-auto px-6 py-4 flex justify-between items-center
    ${scrolled ? "rounded-xl mx-2 md:mx-auto" : ""}
  `}
      >
        {/* Logo */}
        <Link to="/" className="text-lg font-bold tracking-wide text-gray-200">
          <span className="text-cyan-400">Aditya</span> Jha
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative pb-1 text-sm tracking-wide transition-all duration-200
                ${
                  isActive(link.path)
                    ? "text-cyan-400 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-cyan-400"
                    : "text-gray-300 hover:text-cyan-400"
                }
              `}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0b0f1a]/95 backdrop-blur-xl border-t border-white/10">
          <div className="flex flex-col items-center py-10 space-y-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`relative text-lg transition-all
  ${
    isActive(link.path)
      ? "text-cyan-400 font-semibold after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-cyan-400"
      : "text-gray-400 hover:text-cyan-400"
  }
`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

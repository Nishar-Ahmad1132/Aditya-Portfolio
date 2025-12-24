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

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300
        ${scrolled ? "bg-white/70 backdrop-blur-md shadow-sm" : "bg-white"}
      `}
    >
      <div
        className={`max-w-7xl mx-auto px-6 py-4 flex justify-between items-center
          ${scrolled ? "rounded-none md:rounded-md mx-2 md:mx-auto" : ""}
        `}
      >
        {/* Logo */}
        <Link
          to="/"
          className="text-lg font-bold"
          onClick={() => setMenuOpen(false)}
        >
          Aditya Jha
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative pb-1 transition-all duration-200
                ${
                  isActive(link.path)
                    ? "text-black after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-black"
                    : "text-gray-600 hover:text-black"
                }
              `}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Hamburger Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
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
        <div className="md:hidden bg-white/80 backdrop-blur-md border-t">
          <div className="flex flex-col items-center py-8 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`relative text-lg pb-1 transition-all
                  ${
                    isActive(link.path)
                      ? "font-semibold after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-black"
                      : "text-gray-700 hover:text-black"
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

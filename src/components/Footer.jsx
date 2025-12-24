import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0b0f1a] border-t border-white/10 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand */}
          <div>
            <h2 className="text-lg font-bold text-gray-200">
              <span className="text-cyan-400">Aditya</span> Jha
            </h2>
            <p className="mt-3 text-sm">
              Business Analyst passionate about data-driven decision making,
              analytics, and impactful dashboards.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-cyan-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-cyan-400 transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-cyan-400 transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cyan-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider">
              Connect
            </h3>
            <div className="mt-4 flex justify-center md:justify-start space-x-5">
              <a
                href="https://www.linkedin.com/in/aditya-jha-471b06248/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/adityajha123"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition"
              >
                GitHub
              </a>
              <a
                href="mailto:aj6513702@gmail.com"
                className="hover:text-cyan-400 transition"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center text-sm">
          © {year} Aditya Kumar Jha. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

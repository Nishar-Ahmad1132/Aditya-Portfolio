const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Aditya Kumar Jha. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

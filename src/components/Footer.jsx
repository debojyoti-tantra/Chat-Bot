const Footer = () => {
  return (
    <footer className="text-center py-4 mt-8">
      <p className="text-sm sm:text-base">
        &copy; {new Date().getFullYear()} by <span className="font-semibold">Debojyoti Tantra</span> || All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
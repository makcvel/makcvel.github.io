
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Главная", path: "/" },
    { name: "Услуги", path: "/services" },
    { name: "О нас", path: "/about" },
    { name: "Врачи", path: "/doctors" },
    { name: "Клиника", path: "/clinic" },
    { name: "Контакты", path: "/contacts" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 shadow-md backdrop-blur-sm py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-medical-600 font-display font-bold text-2xl">МАК-МЕД</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  className="text-foreground hover:text-medical-600 transition-colors font-medium"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Button className="bg-medical-600 hover:bg-medical-700 gap-2">
            <Phone size={16} />
            <span className="hidden lg:inline">+7 (123) 456-7890</span>
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-foreground focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-foreground hover:text-medical-600 transition-colors font-medium block py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Button className="bg-medical-600 hover:bg-medical-700 w-full gap-2">
                  <Phone size={16} />
                  <span>+7 (123) 456-7890</span>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

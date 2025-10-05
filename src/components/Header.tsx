import { Coffee, UtensilsCrossed, Image, MessageCircle, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("home")}
            className="text-2xl font-retro text-primary hover:opacity-80 transition-opacity tracking-wider"
          >
            MELOS CAFÉ
          </button>
          
          <div className="flex items-center gap-6">
            <button
              onClick={() => scrollToSection("home")}
              className="flex flex-col items-center gap-1 text-foreground hover:text-primary transition-colors group"
              aria-label="Home"
            >
              <Coffee className="w-6 h-6" />
              <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Home
              </span>
            </button>
            
            <button
              onClick={() => scrollToSection("menu")}
              className="flex flex-col items-center gap-1 text-foreground hover:text-primary transition-colors group"
              aria-label="Menu"
            >
              <UtensilsCrossed className="w-6 h-6" />
              <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Menu
              </span>
            </button>
            
            <button
              onClick={() => scrollToSection("gallery")}
              className="flex flex-col items-center gap-1 text-foreground hover:text-primary transition-colors group"
              aria-label="Gallery"
            >
              <Image className="w-6 h-6" />
              <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Gallery
              </span>
            </button>
            
            <button
              onClick={() => scrollToSection("reviews")}
              className="flex flex-col items-center gap-1 text-foreground hover:text-primary transition-colors group"
              aria-label="Reviews"
            >
              <MessageCircle className="w-6 h-6" />
              <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Reviews
              </span>
            </button>
            
            <button
              onClick={() => scrollToSection("contact")}
              className="flex flex-col items-center gap-1 text-foreground hover:text-primary transition-colors group"
              aria-label="Contact"
            >
              <MapPin className="w-6 h-6" />
              <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Contact
              </span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

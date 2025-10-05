import { Button } from "@/components/ui/button";
import { Music2, Disc3 } from "lucide-react";
import heroImage from "@/assets/hero-cafe.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
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
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-4 text-center z-10">
        <div className="flex items-center justify-center gap-4 mb-6 animate-fade-in">
          <Music2 className="w-12 h-12 md:w-16 md:h-16 text-primary-foreground animate-pulse" />
          <h1 className="text-6xl md:text-8xl font-retro text-primary-foreground tracking-wider">
            MELOS CAFÉ
          </h1>
          <Disc3 className="w-12 h-12 md:w-16 md:h-16 text-primary-foreground animate-spin" style={{ animationDuration: '8s' }} />
        </div>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-light animate-fade-in">
          Where aroma meets ambience.
        </p>
        <Button
          onClick={scrollToContact}
          size="lg"
          variant="secondary"
          className="animate-fade-in hover:scale-105 transition-transform"
        >
          Visit Us
        </Button>
      </div>
    </section>
  );
};

export default Hero;

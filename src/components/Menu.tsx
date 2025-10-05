import { useInView } from "react-intersection-observer";
import espressoImage from "@/assets/menu-espresso.jpg";
import cappuccinoImage from "@/assets/menu-cappuccino.jpg";
import croissantImage from "@/assets/menu-croissant.jpg";
import sandwichImage from "@/assets/menu-sandwich.jpg";

const menuItems = [
  {
    name: "Espresso",
    price: "$3.50",
    image: espressoImage,
  },
  {
    name: "Cappuccino",
    price: "$4.50",
    image: cappuccinoImage,
  },
  {
    name: "Croissant",
    price: "$4.00",
    image: croissantImage,
  },
  {
    name: "Gourmet Sandwich",
    price: "$8.50",
    image: sandwichImage,
  },
];

const Menu = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="menu" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2
          ref={ref}
          className={`text-4xl md:text-5xl font-bold text-center mb-12 text-primary transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Our Menu
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {menuItems.map((item, index) => (
            <div
              key={item.name}
              className={`bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">{item.name}</h3>
                <p className="text-2xl font-bold text-primary">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;

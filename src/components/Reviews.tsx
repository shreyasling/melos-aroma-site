import { useInView } from "react-intersection-observer";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah Johnson",
    rating: 5,
    text: "The best coffee in town! The atmosphere is so cozy and welcoming. I come here every morning before work.",
  },
  {
    name: "Michael Chen",
    rating: 5,
    text: "Amazing latte art and the croissants are to die for. The staff is incredibly friendly and knowledgeable about their coffee.",
  },
  {
    name: "Emily Rodriguez",
    rating: 5,
    text: "Perfect spot for work or catching up with friends. Great WiFi, comfortable seating, and excellent coffee.",
  },
  {
    name: "David Thompson",
    rating: 5,
    text: "I've been to many cafés, but Melos stands out. The attention to detail in every cup is remarkable.",
  },
];

const Reviews = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="reviews" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2
          ref={ref}
          className={`text-4xl md:text-5xl font-bold text-center mb-12 text-primary transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Customer Reviews
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              className={`bg-card p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-card-foreground mb-4 leading-relaxed">{review.text}</p>
              
              <p className="font-semibold text-primary">— {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

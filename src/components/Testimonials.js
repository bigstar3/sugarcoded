// src/components/Testimonials.js
export default function Testimonials() {
    const testimonials = [
      {
        name: "Jessica T.",
        feedback:
          "Sugarcoded brought our brand to life! The process was seamless, and the results exceeded our expectations. Highly recommend!",
        image: "/images/jessica.jpg", // Placeholder image
      },
      {
        name: "Mike R.",
        feedback:
          "From concept to execution, the team at Sugarcoded nailed it. Our site is sleek, modern, and functional. Couldn’t be happier!",
        image: "/images/mike.jpg", // Placeholder image
      },
      {
        name: "Taylor L.",
        feedback:
          "The level of detail and professionalism was incredible. They turned our vision into reality. Absolutely worth it!",
        image: "/images/taylor.jpg", // Placeholder image
      },
    ];
  
    return (
      <section className="py-16 px-6 bg-gray-800 text-white text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Testimonials</h2>
          <p className="text-lg leading-relaxed mb-12">
            Hear what our clients have to say about working with Sugarcoded.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-700 p-6 rounded shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 mx-auto rounded-full mb-4 object-cover"
                />
                <p className="italic text-gray-300 mb-4">"{testimonial.feedback}"</p>
                <p className="font-bold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
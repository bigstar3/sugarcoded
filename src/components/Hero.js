// src/components/Hero.js
export default function Hero() {
    return (
      <section className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('/path-to-your-background.gif')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-white px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Welcome to Sugarcoded
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Designing websites that bring your vision to life.
          </p>
          <a href="/contact" className="px-8 py-3 text-lg bg-pink-500 hover:bg-pink-600 text-white rounded-lg transition-all duration-300">
            Get a Quote
          </a>
        </div>
      </section>
    );
  }
  
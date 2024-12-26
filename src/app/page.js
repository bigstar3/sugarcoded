import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section id="hero" className="min-h-screen">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen bg-gray-100">
        <About />
      </section>

      {/* Services Section */}
      <section id="services" className="min-h-screen bg-gray-200">
        <Services />
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="min-h-screen bg-gray-300">
        <Portfolio />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="min-h-screen bg-gray-50">
        <Testimonials />
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-gray-400">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

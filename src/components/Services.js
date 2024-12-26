// src/components/Services.js
export default function Services() {
    return (
      <section className="py-16 px-6 bg-white text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Services</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-12">
            Whether you need a sleek budget-friendly site or a full-service custom-built web app, Sugarcoded has you covered.
            Explore our wide range of offerings designed to suit your needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 shadow rounded">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Budget Websites</h3>
              <p className="text-gray-600">
                Affordable websites on platforms like Squarespace or Wix that you can easily maintain yourself.
              </p>
            </div>
            <div className="p-6 bg-gray-50 shadow rounded">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Custom-Built Websites</h3>
              <p className="text-gray-600">
                Fully custom web designs tailored to your brand with advanced functionality and unique aesthetics.
              </p>
            </div>
            <div className="p-6 bg-gray-50 shadow rounded">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Web Hosting</h3>
              <p className="text-gray-600">
                Reliable and secure hosting solutions to keep your site running smoothly.
              </p>
            </div>
            <div className="p-6 bg-gray-50 shadow rounded">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Consulting</h3>
              <p className="text-gray-600">
                Expert advice to help you optimize your website and achieve your business goals.
              </p>
            </div>
            <div className="p-6 bg-gray-50 shadow rounded">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Graphics Design</h3>
              <p className="text-gray-600">
                Eye-catching graphics to enhance your website's visual appeal and branding.
              </p>
            </div>
            <div className="p-6 bg-gray-50 shadow rounded">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Full-Service Maintenance</h3>
              <p className="text-gray-600">
                Let us handle the updates and upkeep while you focus on growing your business.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
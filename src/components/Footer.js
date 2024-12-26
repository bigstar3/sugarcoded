export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 tracking-wider">Sugarcoded Design</h3>
            <p className="leading-relaxed">
              Crafting websites that inspire, connect, and deliver exceptional user experiences. Let’s build something
              amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="hover:underline hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:underline hover:text-white transition">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline hover:text-white transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 tracking-wider">Follow Us</h3>
            <div className="flex space-x-5">
              <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-white transition"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M22 12a10 10 0 10-11.63 9.87v-6.99H8.07v-2.88h2.3V9.78c0-2.27 1.36-3.52 3.44-3.52.998 0 2.04.178 2.04.178v2.24h-1.15c-1.13 0-1.48.7-1.48 1.42v1.7h2.51l-.4 2.88h-2.11V21.9A10.01 10.01 0 0022 12z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-white transition"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.35 4.35 0 001.92-2.4c-.82.5-1.74.85-2.7 1.04a4.36 4.36 0 00-7.41 3.97A12.37 12.37 0 013 5.15a4.37 4.37 0 001.35 5.83 4.35 4.35 0 01-1.97-.54v.05a4.36 4.36 0 003.5 4.27 4.36 4.36 0 01-1.96.07 4.36 4.36 0 004.07 3.02A8.75 8.75 0 013 19.54a12.32 12.32 0 006.69 1.96c8.02 0 12.42-6.65 12.42-12.42 0-.19 0-.37-.01-.56a8.87 8.87 0 002.2-2.25z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-400 hover:text-white transition"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M19.5 3A2.5 2.5 0 0122 5.5v13a2.5 2.5 0 01-2.5 2.5h-15A2.5 2.5 0 012 18.5v-13A2.5 2.5 0 014.5 3h15zm-9.5 8h-3v7h3v-7zm-1.5-2.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM20 16.82V17h-3v-4c0-1.12-.34-1.88-1.2-1.88-.65 0-1.09.44-1.27.87-.06.14-.08.34-.08.54v4.47h-3v-7h3v1c.4-.65 1.12-1.28 2.4-1.28 1.76 0 3.15 1.15 3.15 3.62z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 border-t border-gray-700 pt-6">
          <p>&copy; {new Date().getFullYear()} Sugarcoded Design. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

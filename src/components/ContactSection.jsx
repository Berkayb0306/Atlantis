
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

function ContactSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-10 md:px-12 max-w-7xl mx-auto">
      {/* Sol Kısım */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-2">Contact Us</h3>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in touch today!</h2>
        <p className="text-gray-600 mb-6">
          We know how large objects will act, but things on a small scale.
        </p>
        <div className="mb-4">
          <p className="mb-1">Phone: +451 215 215</p>
          <p>Fax: +451 215 215</p>
        </div>
        <div className="flex space-x-4">
          <a
            href="#"
            aria-label="Twitter"
            className="text-gray-600 hover:text-blue-500 transition-colors"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="text-gray-600 hover:text-blue-700 transition-colors"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="text-gray-600 hover:text-pink-500 transition-colors"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Sağ Kısım (Görsel) */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="https://via.placeholder.com/400x400"
          alt="Family Shopping"
          className="max-w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}

export default ContactSection;

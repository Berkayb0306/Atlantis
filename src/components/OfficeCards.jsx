
// Lucide React ikonları
import { Phone, MapPin, Mail } from 'lucide-react';

function OfficeCards() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Üst Başlıklar */}
        <p className="text-gray-500 uppercase tracking-widest text-sm mb-2">
          VISIT OUR OFFICE
        </p>
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          We help small businesses
          <br />
          with big ideas
        </h2>

        {/* Kartlar */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Soldaki Kart (Telefon) */}
          <div className="p-6 border rounded-lg flex flex-col items-center">
            <div className="text-blue-500 mb-4">
              <Phone className="w-12 h-12" />
            </div>
            <p className="text-gray-600 mb-4">
              georgia.young@example.com
              <br />
              georgia.young@sample.com
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors mb-2">
              Get Support
            </button>
            <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition-colors">
              Submit Request
            </button>
          </div>

          {/* Ortadaki Kart (Konum) */}
          <div className="p-6 bg-blue-900 text-white rounded-lg flex flex-col items-center">
            <div className="mb-4">
              <MapPin className="w-12 h-12" />
            </div>
            <p className="mb-4">
              georgia.young@example.com
              <br />
              georgia.young@sample.com
            </p>
            <button className="bg-white text-blue-900 px-4 py-2 rounded hover:bg-gray-100 transition-colors mb-2">
              Get Support
            </button>
            <button className="border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-blue-900 transition-colors">
              Submit Request
            </button>
          </div>

          {/* Sağdaki Kart (Mesaj) */}
          <div className="p-6 border rounded-lg flex flex-col items-center">
            <div className="text-blue-500 mb-4">
              <Mail className="w-12 h-12" />
            </div>
            <p className="text-gray-600 mb-4">
              georgia.young@example.com
              <br />
              georgia.young@sample.com
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors mb-2">
              Get Support
            </button>
            <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition-colors">
              Submit Request
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OfficeCards;

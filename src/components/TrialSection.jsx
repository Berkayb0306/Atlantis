import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

const TrialSection = () => {
  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Start your 14 days free trial
        </h2>

        {/* Subheading */}
        <p className="text-gray-500 text-base mb-6">
          Met minim Mollie non deserunt Amet est cliquey dolor do met sent.
          RELIT official consequent.
        </p>

        {/* Button */}
        <button className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
          Try it free now
        </button>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mt-8">
          <a href="#" className="text-blue-500 hover:text-blue-600">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="#" className="text-blue-600 hover:text-blue-700">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="text-pink-500 hover:text-pink-600">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="text-blue-700 hover:text-blue-800">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TrialSection;
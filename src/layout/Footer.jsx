
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        
      
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">Consulting Agency For Your Business</h2>
            <p className="text-gray-400 text-sm">The quick fox jumps over the lazy dog</p>
          </div>
          <button className="mt-4 md:mt-0 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md">
            Contact Us
          </button>
        </div>

      
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-sm text-gray-400 mb-10">
          <div>
            <h3 className="text-white font-semibold mb-2">Company Info</h3>
            <p>About Us</p>
            <p>Carrier</p>
            <p>We are hiring</p>
            <p>Blog</p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-2">Legal</h3>
            <p>About Us</p>
            <p>Carrier</p>
            <p>We are hiring</p>
            <p>Blog</p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-2">Features</h3>
            <p>Business Marketing</p>
            <p>User Analytic</p>
            <p>Live Chat</p>
            <p>Unlimited Support</p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-2">Resources</h3>
            <p>iOS & Android</p>
            <p>Watch a Demo</p>
            <p>Customers</p>
            <p>API</p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-2">Get in Touch</h3>
            <div className="flex items-center">
              <Phone size={16} className="mr-2 text-blue-400" />
              <p>(480) 555-0103</p>
            </div>
            <div className="flex items-center">
              <MapPin size={16} className="mr-2 text-blue-400" />
              <p>4517 Washington Ave.</p>
            </div>
            <div className="flex items-center">
              <Mail size={16} className="mr-2 text-blue-400" />
              <p>debra.holt@example.com</p>
            </div>
          </div>
        </div>

       
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>Made With Love By Finland All Rights Reserved</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Facebook size={20} className="cursor-pointer hover:text-blue-400" />
            <Instagram size={20} className="cursor-pointer hover:text-pink-400" />
            <Twitter size={20} className="cursor-pointer hover:text-blue-300" />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

import { CreditCard } from "lucide-react";

const AboutHeader = () => {
  return (
    <div
      className="relative bg-white min-h-[60vh] flex items-center justify-between overflow-hidden px-4"
      style={{
        backgroundImage: "url('https://source.unsplash.com/1600x900/?shopping')", // Placeholder background
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white opacity-70"></div>

      {/* Left Content (Text and Button) */}
      <div className="relative z-10 text-left max-w-md">
        {/* Breadcrumb */}
        <p className="text-gray-600 text-sm mb-2">ABOUT COMPANY</p>

        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          ABOUT US
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-lg mb-6">
          We know how large objects will act, but things on a small scale.
        </p>

        {/* Button */}
        <button className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
          Get Quote Now
        </button>
      </div>

      {/* Right Image (Woman with Shopping Bags) */}
      <div className="relative z-10">
        <img
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500" // Placeholder image
          alt="Woman with shopping bags"
          className="h-[60vh] object-contain"
        />
      </div>

      {/* Decorative Elements (e.g., Credit Card Icon and Badge) */}
      <div className="absolute top-1/4 right-10 flex space-x-2">
        <CreditCard className="w-8 h-8 text-blue-500" />
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
          GS
        </div>
      </div>

      {/* Background Circles (Decorative) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 bg-pink-200 rounded-full opacity-50 blur-md"></div>
        <div className="absolute w-24 h-24 bg-purple-200 rounded-full opacity-50"></div>
        <div className="absolute w-16 h-16 bg-purple-200 rounded-full opacity-50 top-10 right-10"></div>
      </div>
    </div>
  );
};

export default AboutHeader;
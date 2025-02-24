import  { useState, useEffect } from "react";
import images from "../assets/images";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-lg flex items-center">
   
      <button 
        onClick={prevSlide} 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full cursor-pointer z-10">
        <ChevronLeft size={32} />
      </button>

    
      <div 
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)`, width: `${images.length * 100}%` }}
      >
        {images.map(({ imgURL, imgAlt }, index) => (
          <div key={index} className="relative w-full h-96 flex-shrink-0">
            <img
              src={imgURL}
              alt={imgAlt}
              loading="lazy"
              className="w-full h-full object-cover rounded-lg"
            />
           
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white font-bold">
              <h2 className="text-xl md:text-2xl mb-2">GROCERIES DELIVERY</h2>
              <p className="text-sm md:text-base max-w-md">
                We know how large objects will act, but things on a small scale just do not act that way.
              </p>
              <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md">Start Now</button>
            </div>
          </div>
        ))}
      </div>

    
      <button 
        onClick={nextSlide} 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full cursor-pointer z-10">
        <ChevronRight size={32} />
      </button>

      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div 
            key={index} 
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              currentIndex === index ? "bg-white scale-125" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;

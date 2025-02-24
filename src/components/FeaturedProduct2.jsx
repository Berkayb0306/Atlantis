import { useState } from "react";

export default function FeaturedProduct2() {
  const [selectedColor, setSelectedColor] = useState("blue");

  const colors = ["blue", "green", "red", "black"];

  return (
    <div className="max-w-screen-xl mx-auto p-4">
   
      <div className="flex flex-col md:flex-row-reverse items-start gap-8">
        
  
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://picsum.photos/400/600?random=1" 
            alt="Person with Food"
            className="rounded max-w-full h-auto"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-start">
          <h2 className="text-2xl font-bold mb-2">MOST POPULAR</h2>
          <p className="text-gray-700 mb-4 text-sm">
            We focus on ergonomics and meeting you where you work. 
            It’s only a keystroke away.
          </p>

        
          <div className="border rounded p-4 flex flex-col items-center">
          
            <img
              src="https://picsum.photos/300/200?random=2"
              alt="Popular Product"
              className="rounded max-w-full h-auto mb-4"
            />

          
            <p className="text-gray-900 font-medium">English Department</p>
            <p className="text-gray-500 text-sm flex items-center mt-1">📦 15 Sales</p>
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-red-500 line-through">$16.48</span>
              <span className="text-green-600 font-semibold">$6.48</span>
            </div>

          
            <div className="flex space-x-2 mt-4">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-4 h-4 rounded-full border-2 ${
                    selectedColor === color ? "border-black" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

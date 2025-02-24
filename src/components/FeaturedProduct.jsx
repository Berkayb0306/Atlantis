export default function FeaturedProduct() {
  return (
    <div className="max-w-screen-xl mx-auto p-4">
  
      <div className="flex flex-col md:flex-row items-start gap-8">
       
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://picsum.photos/400/600?random=1" 
            alt="Person on Scooter"
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
              alt="Meat Product"
              className="rounded max-w-full h-auto mb-4"
            />

        
            <p className="text-gray-900 font-medium">English Department</p>
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-red-500 line-through">$16.48</span>
              <span className="text-green-600 font-semibold">$6.48</span>
            </div>
          </div>
        </div>
      </div>

     
      <div className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
         
          <div className="text-center p-4 border rounded">
            <h3 className="text-3xl text-red-500 font-bold mb-2">1.</h3>
            <p className="text-gray-600">
              Things on a very small that you can have any direct.
            </p>
          </div>
         
          <div className="text-center p-4 border rounded">
            <h3 className="text-3xl text-red-500 font-bold mb-2">2.</h3>
            <p className="text-gray-600">
              Things on a very small that you can have any direct.
            </p>
          </div>
       
          <div className="text-center p-4 border rounded">
            <h3 className="text-3xl text-red-500 font-bold mb-2">3.</h3>
            <p className="text-gray-600">
              Things on a very small that you can have any direct.
            </p>
          </div>
        
          <div className="text-center p-4 border rounded">
            <h3 className="text-3xl text-red-500 font-bold mb-2">4.</h3>
            <p className="text-gray-600">
              Things on a very small that you can have any direct.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

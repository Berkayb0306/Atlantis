
const ProductShowcase2 = () => {
  return (
    <div className="container mx-auto px-6 py-12">
     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
      
        <div className="flex flex-col">
         
          <div className="flex justify-between items-center border-b pb-3 mb-4">
            <h2 className="text-lg font-bold text-gray-800">BESTSELLER PRODUCTS</h2>
            <div className="flex space-x-6 text-gray-500 font-medium">
              <button className="text-blue-600">Men</button>
              <button>Women</button>
              <button>Accessories</button>
            </div>
          
            <div className="flex space-x-2">
              <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">←</button>
              <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">→</button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <div key={index} className="flex flex-col items-center bg-white p-4 rounded-lg shadow">
                <img
                  src="https://images.pexels.com/photos/5946093/pexels-photo-5946093.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                  alt="Product"
                  className="w-20 h-20 object-cover rounded-full"
                />
                <p className="text-gray-800 font-semibold mt-2">Graphic Design</p>
                <p className="text-gray-500 text-sm">English Department</p>
                <p className="text-gray-400 line-through">$16.48 <span className="text-green-600 font-bold ml-2">$6.48</span></p>
              </div>
            ))}
          </div>
        </div>

       
       
        <div className="flex justify-center">
          <img
            src="https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            alt="Promotional Image"
            className="w-full max-w-lg rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase2;

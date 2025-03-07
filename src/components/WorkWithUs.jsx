/* eslint-disable react/no-unescaped-entities */
const WorkWithUs = () => {
    return (
      <div className="flex flex-col md:flex-row min-h-[400px]">
        {/* Left Side - Text and Button */}
        <div className="md:w-3/5 bg-blue-500 text-white flex items-center justify-center py-16 px-8">
          <div className="max-w-lg text-left">
            <p className="text-white text-sm uppercase tracking-wider mb-3 opacity-80">
              Work with us
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Now Let's grow Yours
            </h2>
            <p className="text-white text-lg mb-8 opacity-90">
              The gradual accumulation of information about atomic and small-scale
              behaviour during the first quarter of the 20th
            </p>
            <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-md hover:bg-white hover:text-blue-700 transition duration-300 text-base">
              Button
            </button>
          </div>
        </div>
  
        {/* Right Side - Image */}
        <div className="md:w-2/5">
          <img
            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=250" // Direct Unsplash image
            alt="Woman in fashion pose"
            className="w-full h-full object-cover"
            onError={(e) => {
              console.error("Image failed to load:", e.target.src);
              e.target.src = "https://via.placeholder.com/600x400?text=Image+Not+Found"; // Fallback image
            }}
          />
        </div>
      </div>
    );
  };
  
  export default WorkWithUs;
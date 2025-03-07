const AboutContent = () => {
    return (
      <div className="bg-white py-12 px-4">
        <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Column - Text Content */}
          <div className="md:w-1/2 text-left">
            {/* Problem Statement */}
            <p className="text-red-500 text-sm mb-2">Problems trying</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Met minim Mollie non deserunt Alamo est sit cliquey dolor do met
              sent.
            </h2>
  
            {/* Description */}
            <p className="text-gray-600 text-base mb-6">
              Problems trying to resolve the conflict between the two major realms
              of Classical physics: Newtonian mechanics
            </p>
          </div>
  
          {/* Right Column - Statistics */}
          <div className="md:w-1/2 grid grid-cols-2 gap-8 text-center">
            {/* Statistic 1 */}
            <div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">15K</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            {/* Statistic 2 */}
            <div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">150K</h3>
              <p className="text-gray-600">Monthly Visitors</p>
            </div>
            {/* Statistic 3 */}
            <div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">15</h3>
              <p className="text-gray-600">Countries Worldwide</p>
            </div>
            {/* Statistic 4 */}
            <div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">100+</h3>
              <p className="text-gray-600">Top Partners</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutContent;
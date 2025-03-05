
function BookAppointment() {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded shadow-lg overflow-hidden max-w-4xl mx-auto">
      {/* Sol Kısım (Görsel) */}
      <div className="md:w-1/2">
        <img
          src="https://via.placeholder.com/600x600?text=Appointment+Image"
          alt="Appointment"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Sağ Kısım (Form) */}
      <div className="md:w-1/2 p-6 md:p-10">
        <h2 className="text-2xl font-bold mb-6">Book Appointment</h2>

        <form className="space-y-5">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              placeholder="Full Name *"
              className="block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className="block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
          {/* Department */}
          <div>
            <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
              Department <span className="text-red-500">*</span>
            </label>
            <select
              id="department"
              className="block w-full border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            >
              <option value="">Please Select</option>
              <option value="marketing">Marketing</option>
              <option value="sales">Sales</option>
              <option value="support">Support</option>
              <option value="development">Development</option>
            </select>
          </div>
          {/* Time */}
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
              Time <span className="text-red-500">*</span>
            </label>
            <select
              id="time"
              className="block w-full border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            >
              <option value="4:00">4:00 Available</option>
              <option value="5:00">5:00 Available</option>
              <option value="6:00">6:00 Available</option>
            </select>
          </div>

          {/* Buton */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition-colors"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookAppointment;

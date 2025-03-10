

const MainContactPage = () => {
  return (
    <div
      className="relative w-full min-h-[500px] bg-gradient-to-r from-teal-600 to-blue-500 flex items-center justify-between overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')", // Model ve çantalar içeren arka plan
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Arka plan resmi üstüne koyu overlay (metinlerin okunabilirliği için) */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* İçerik */}
      <div className="relative z-10 flex flex-col md:flex-row items-start justify-between w-full max-w-7xl px-4 py-12 md:px-8">
        {/* Sol Taraf: Başlık, Açıklama ve Buton */}
        <div className="text-white mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">CONTACT US</h2>
          <p className="text-sm md:text-base mb-6 max-w-md">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
          <button className="bg-blue-400 text-white px-6 py-3 rounded-full hover:bg-blue-500 transition duration-300">
            CONTACT US
          </button>
        </div>

        {/* Sağ Taraf: Şehir Bilgileri (İki Sütun) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white text-sm md:text-base">
          {/* Sol Sütun: Paris ve Berlin */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">PARIS</h3>
              <p>1901 Thorn ridge Cir.</p>
              <p>75000 Paris</p>
              <p>Phone: +451 215 215</p>
              <p>Fax: +451 215 215</p>
            </div>
            <div>
              <h3 className="font-semibold">BERLIN</h3>
              <p>4140 Parker Rd.</p>
              <p>75000 Paris</p>
              <p>Phone: +451 215 215</p>
              <p>Fax: +451 215 215</p>
            </div>
          </div>

          {/* Sağ Sütun: New York ve London */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">NEW YORK</h3>
              <p>2719 Ash Dr. San Jose.</p>
              <p>75000 Paris</p>
              <p>Phone: +451 215 215</p>
              <p>Fax: +451 215 215</p>
            </div>
            <div>
              <h3 className="font-semibold">LONDON</h3>
              <p>3517 W Gray St. Utica,</p>
              <p>75000 Paris</p>
              <p>Phone: +451 215 215</p>
              <p>Fax: +451 215 215</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContactPage;
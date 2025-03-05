/* eslint-disable react/no-unescaped-entities */
import  { useState } from 'react';
import BookAppointment from './BookAppointment';

function LetsTalkSection() {
  const [showModal, setShowModal] = useState(false);

  // Modal'ı açmak için
  const handleOpenModal = () => {
    setShowModal(true);
  };

  // Modal'ı kapatmak için (arka plana tıklayınca veya kapatma butonuna)
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {/* Ana "Let's Talk" İçeriği */}
      <section className="w-full flex flex-col items-center justify-center text-center py-16 px-4">
        <div className="mb-4">
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-blue-500 mx-auto"
          >
            <path d="M40 10 C 0 30, 80 30, 40 50" />
            <path d="M40 50 L 35 45" />
            <path d="M40 50 L 45 45" />
          </svg>
        </div>
        <p className="text-gray-500 uppercase tracking-widest text-sm mb-2">
          WE CAN'T WAIT TO MEET YOU
        </p>
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Let’s Talk</h2>
        <button
          className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition-colors"
          onClick={handleOpenModal}
        >
          Try it free now
        </button>
      </section>

      {/* Modal - BookAppointment pop-up */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Modal arkaplanı */}
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={handleCloseModal}
          ></div>

          {/* Modal içeriği */}
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl mx-4">
            {/* Kapatma Butonu */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={handleCloseModal}
            >
              &#x2715;
            </button>

            {/* BookAppointment bileşeni */}
            <BookAppointment />
          </div>
        </div>
      )}
    </>
  );
}

export default LetsTalkSection;

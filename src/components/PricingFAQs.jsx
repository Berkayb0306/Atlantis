/* eslint-disable react/no-unescaped-entities */
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const PricingFAQs = () => {
  const faqs = [
    {
      question: "The quick fox jumps over the lazy dog",
      answer:
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie, Exclution venial consequent sent nostrum met.",
    },
    {
      question: "The quick fox jumps over the lazy dog",
      answer:
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie, Exclution venial consequent sent nostrum met.",
    },
    {
      question: "The quick fox jumps over the lazy dog",
      answer:
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie, Exclution venial consequent sent nostrum met.",
    },
    {
      question: "The quick fox jumps over the lazy dog",
      answer:
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie, Exclution venial consequent sent nostrum met.",
    },
    {
      question: "The quick fox jumps over the lazy dog",
      answer:
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie, Exclution venial consequent sent nostrum met.",
    },
    {
      question: "The quick fox jumps over the lazy dog",
      answer:
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie, Exclution venial consequent sent nostrum met.",
    },
  ];

  return (
    <div className="flex flex-col items-center p-6 sm:p-8 bg-gray-100 min-h-screen">
      {/* Başlık ve Açıklama */}
      <h1 className="text-2xl sm:text-3xl font-bold mb-2">Pricing FAQs</h1>
      <p className="text-gray-600 text-center mb-6 max-w-lg">
        Problems trying to resolve the conflict between the two major realms of Classical physics
      </p>

      {/* FAQ Listesi */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        {faqs.map((faq, index) => (
          <div key={index} className="flex gap-3 items-start">
            <span className="text-blue-500 text-lg">➤</span>
            <div>
              <p className="font-bold">{faq.question}</p>
              <p className="text-gray-600 text-sm">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Ortadaki Metin */}
      <p className="text-gray-700 text-center mt-8 text-sm sm:text-base">
        Haven't got your answer? <span className="text-blue-600 cursor-pointer">Contact our support</span>
      </p>

      {/* Ücretsiz Deneme Kısmı */}
      <div className="text-center mt-12">
        <h2 className="text-xl sm:text-2xl font-bold">Start your 14 days free trial</h2>
        <p className="text-gray-600 mt-2 max-w-md mx-auto">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.
        </p>
        <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
          Try it free now
        </button>
      </div>

      {/* Sosyal Medya Butonları */}
      <div className="flex gap-6 mt-6 justify-center">
        <Facebook className="text-gray-600 hover:text-blue-500 cursor-pointer" size={24} />
        <Twitter className="text-gray-600 hover:text-blue-400 cursor-pointer" size={24} />
        <Instagram className="text-gray-600 hover:text-pink-500 cursor-pointer" size={24} />
        <Linkedin className="text-gray-600 hover:text-blue-700 cursor-pointer" size={24} />
      </div>
    </div>
  );
};

export default PricingFAQs;

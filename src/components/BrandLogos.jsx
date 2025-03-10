export default function BrandLogos() {
  const brands = [
    {
      name: "Hooli",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Hooli_logo.svg/2560px-Hooli_logo.svg.png",
    },
    {
      name: "Lyft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Lyft_logo.svg/1920px-Lyft_logo.svg.png",
    },
    {
      name: "Leaf",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Leaf_icon.svg/1920px-Leaf_icon.svg.png",
    },
    {
      name: "Stripe",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png",
    },
    {
      name: "AWS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    },
    {
      name: "Reddit",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/82/Reddit_logo_and_wordmark.svg/1920px-Reddit_logo_and_wordmark.svg.png",
    },
  ];

  return (
    <div className="max-w-screen-2xl mx-auto py-10 px-6">
      {/* Desktop için logoları büyütülmüş ve genişletilmiş */}
      <div className="hidden md:flex justify-center items-center gap-12">
        {brands.map((brand, index) => (
          <img
            key={index}
            src={brand.logo}
            alt={brand.name}
            className="h-20 md:h-24 w-auto grayscale hover:grayscale-0 transition"
          />
        ))}
      </div>

      {/* Mobil için daha büyük ve kaydırılabilir logolar */}
      <div className="md:hidden overflow-x-auto flex space-x-8 scrollbar-hide py-4">
        {brands.map((brand, index) => (
          <img
            key={index}
            src={brand.logo}
            alt={brand.name}
            className="h-16 w-auto grayscale hover:grayscale-0 transition"
          />
        ))}
      </div>
    </div>
  );
}

export default function BrandLogos() {
    const brands = [
      { name: "Hooli", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Hooli_logo.svg/2560px-Hooli_logo.svg.png" },
      { name: "Lyft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Lyft_logo.svg/1920px-Lyft_logo.svg.png" },
      { name: "Leaf", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Leaf_icon.svg/1920px-Leaf_icon.svg.png" },
      { name: "Stripe", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png" },
      { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
      { name: "Reddit", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/82/Reddit_logo_and_wordmark.svg/1920px-Reddit_logo_and_wordmark.svg.png" }
    ];
  
    return (
      <div className="max-w-screen-xl mx-auto py-8">
        <div className="flex justify-center items-center space-x-8">
          {brands.map((brand, index) => (
            <img 
              key={index}
              src={brand.logo} 
              alt={brand.name} 
              className="h-12 grayscale hover:grayscale-0 transition"
            />
          ))}
        </div>
      </div>
    );
  }
  
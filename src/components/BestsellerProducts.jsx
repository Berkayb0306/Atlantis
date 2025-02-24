import ProductCard from "./ProductCard";

const products = [
  { 
    id: 1, 
    title: "Graphic Design", 
    department: "English Department", 
    price: 16.48, 
    discountPrice: 6.48, 
    image: "https://images.pexels.com/photos/3182754/pexels-photo-3182754.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" 
  },
  { 
    id: 2, 
    title: "Graphic Design", 
    department: "English Department", 
    price: 16.48, 
    discountPrice: 6.48, 
    image: "https://images.pexels.com/photos/7210773/pexels-photo-7210773.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" 
  },
  { 
    id: 3, 
    title: "Graphic Design", 
    department: "English Department", 
    price: 16.48, 
    discountPrice: 6.48, 
    image: "https://images.pexels.com/photos/4255701/pexels-photo-4255701.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" 
  },
  { 
    id: 4, 
    title: "Graphic Design", 
    department: "English Department", 
    price: 16.48, 
    discountPrice: 6.48, 
    image: "https://images.pexels.com/photos/4041694/pexels-photo-4041694.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" 
  }
];

export default function BestsellerProducts() {
  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <h2 className="text-xl font-bold mb-6">BESTSELLER PRODUCTS</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            image={product.image} 
            title={product.title} 
            price={product.discountPrice} 
          />
        ))}
      </div>
    </div>
  );
}

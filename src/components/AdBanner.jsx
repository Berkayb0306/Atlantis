const adItems = [
  {
    id: 1,
    title: "Unique Life",
    subtitle: "Your Space",
    image: "https://images.pexels.com/photos/4110004/pexels-photo-4110004.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    id: 2,
    title: "Elements Style",
    subtitle: "Ends Today",
    image: "https://images.pexels.com/photos/5946093/pexels-photo-5946093.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    id: 3,
    title: "Elements Style",
    subtitle: "Ends Today",
    image: "https://images.pexels.com/photos/3298640/pexels-photo-3298640.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
];

const AdBanner = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {adItems.map((item) => (
          <div key={item.id} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
            <p className="text-gray-500">{item.subtitle}</p>
            <h2 className="text-xl font-bold text-gray-900">{item.title}</h2>
            <img src={item.image} alt={item.title} className="w-40 h-40 object-cover my-4 rounded-full" />
            <a href="#" className="text-blue-500 hover:underline">Explore Items</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdBanner;

import { MessageCircle, Calendar } from "lucide-react";

const posts = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
    category: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'intégral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
    category: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'intégral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/3255763/pexels-photo-3255763.jpeg",
    category: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'intégral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/3255763/pexels-photo-3255763.jpeg",
    category: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'intégral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/3255763/pexels-photo-3255763.jpeg",
    category: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'intégral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
  },
  {
    id: 6,
    image: "https://images.pexels.com/photos/3255763/pexels-photo-3255763.jpeg",
    category: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'intégral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
  },
  {
    id: 7,
    image: "https://images.pexels.com/photos/3255763/pexels-photo-3255763.jpeg",
    category: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'intégral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
  },
  {
    id: 8,
    image: "https://images.pexels.com/photos/3255763/pexels-photo-3255763.jpeg",
    category: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'intégral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
  },
  {
    id: 9,
    image: "https://images.pexels.com/photos/3255763/pexels-photo-3255763.jpeg",
    category: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'intégral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
  },
];

export default function FeaturedPosts() {
  return (
    <div className="max-w-screen-xl mx-auto px-6 py-12">
     
      <div className="text-center">
        <p className="text-blue-500 font-medium">Practice Advice</p>
        <h2 className="text-3xl font-bold text-gray-800 mt-2">Featured Posts</h2>
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {posts.map((post) => (
          <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden">
           
            <div className="relative">
              <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">NEW</span>
            </div>

            
            <div className="p-4">
              <div className="text-sm text-gray-500 flex space-x-2">
                {post.category.map((cat, index) => (
                  <span key={index} className="text-blue-500 cursor-pointer">{cat}</span>
                ))}
              </div>

              
              
              <h3 className="text-lg font-semibold text-gray-800 mt-2">{post.title}</h3>
              
             
              <p className="text-gray-600 text-sm mt-2">{post.description}</p>

            
              <div className="flex justify-between items-center text-gray-500 text-sm mt-4">
                <div className="flex items-center space-x-1">
                  <Calendar size={16} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MessageCircle size={16} />
                  <span>{post.comments} comments</span>
                </div>
              </div>

             
              <div className="mt-4">
                <a href="#" className="text-blue-500 font-semibold flex items-center">
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

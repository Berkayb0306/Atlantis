import { Facebook, Instagram, Twitter } from "lucide-react";
import gokhan from "../assets/images2/gokhan.jpeg";
import berkay from "../assets/images2/berkay.jpeg";

const teamMembers = [
  {
        name: "Gökhan Özdemir",
        role: "Project Manager",
        image: gokhan,
      },
      {
        name: "Berkay Soysal",
        role: "Full Stack Developer",
        image: berkay,
      },
      {
        name: "Alice Johnson",
        role: "UI/UX Designer",
        image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=250",
      },
];

const AboutTeam = () => {
  return (
    <div className="bg-white py-12 px-4">
      <div className="container mx-auto max-w-7xl text-center">
        {/* Heading and Description */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Meet Our Team
        </h2>
        <p className="text-gray-600 text-base mb-12 max-w-2xl mx-auto">
          Problems trying to resolve the conflict between the two major realms of
          Classical physics: Newtonian mechanics
        </p>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Member Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-64 h-80 object-cover rounded-lg mb-4"
              />

              {/* Member Info */}
              <h3 className="text-lg font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-600 text-sm mb-3">{member.position}</p>

              {/* Social Media Icons */}
              <div className="flex space-x-3">
                <a href="#" className="text-blue-600 hover:text-blue-700">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-pink-500 hover:text-pink-600">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-blue-500 hover:text-blue-600">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
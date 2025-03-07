import PropTypes from "prop-types";
import gokhan from "../assets/images2/gokhan.jpeg";
import berkay from "../assets/images2/berkay.jpeg";

// Team members data
const teamMembersData = [
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
    {
      name: "Bob Smith",
      role: "Backend Developer",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=250",
    },
    {
      name: "Emma Davis",
      role: "Frontend Developer",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=250",
    },
    {
      name: "Liam Carter",
      role: "DevOps Engineer",
      image:   "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=250",
    },
    {
        name: "Bob Smith",
        role: "Backend Developer",
        image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=250",
      },
      {
        name: "Emma Davis",
        role: "Frontend Developer",
        image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=250",
      },
      {
        name: "Liam Carter",
        role: "DevOps Engineer",
        image:   "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=250",
      },
  ];

const TeamMember = ({ image, name, username, role }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg">
      <div className="w-48 h-48 bg-blue-200 flex items-center justify-center rounded-lg overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mt-4">{name}</h3>
      <p className="text-gray-600 text-sm">{role}</p>
      <p className="text-gray-600 text-sm">@{username}</p>
      <div className="flex space-x-2 mt-2">
        <a href="#" className="text-blue-500 hover:text-blue-700">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.733-.666 1.586-.666 2.489 0 1.712.87 3.228 2.188 4.11-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.112-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.396 0-.788-.023-1.175-.068 2.187 1.402 4.782 2.223 7.569 2.223 8.967 0 13.875-7.437 13.875-13.875 0-.21-.005-.42-.014-.63.954-.69 1.783-1.556 2.437-2.54z" />
          </svg>
        </a>
        <a href="#" className="text-blue-700 hover:text-blue-900">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.255-2.453-1.763-2.453-1.012 0-1.837.701-2.137 1.206-.111.223-.145.532-.145.843v6.008h-3v-11h2.875v1.369h.039c.388-.739 1.338-1.516 2.754-1.516 2.954 0 3.5 1.952 3.5 4.484v6.663z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

const TeamMembers = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembersData.map((member, index) => (
          <TeamMember
            key={index}
            image={member.image}
            name={member.name}
            role={member.role}
            username={member.name.toLowerCase().replace(" ", "_")}
          />
        ))}
      </div>
    </div>
  );
};

// Prop türlerini tanımlama
TeamMember.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

export default TeamMembers;
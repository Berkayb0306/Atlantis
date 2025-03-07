import ImageGrid from "../../components/ImageGrid";
import TeamMembers from "../../components/TeamMembers";
import TrialSection from "../../components/TrialSection";

// Team images data
const teamImages = [
  "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500",
  "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=250",
  "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=250",
  "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=250",
  "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=250",
];

function TeamPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Başlık */}
      <div className="text-center mb-12">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
          WHAT WE DO
        </p>
        <h1 className="text-4xl font-bold text-gray-900 mt-2">
          Innovation tailored for you
        </h1>
      </div>

      {/* Image Grid Bileşeni */}
      <ImageGrid images={teamImages} />

      {/* Takım Üyeleri Bileşeni */}
      <TeamMembers />

      <TrialSection />
    </div>
  );
}

export default TeamPage;
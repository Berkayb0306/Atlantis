import ContactSection from "../../components/ContactSection";
import OfficeCards from "../../components/OfficeCards";
import LetsTalkSection from "../../components/LetsTalkSection";

const ContactPage = () => {
  return (
    <div>

      {/* İletişim Bilgileri ve Kartlar */}
      <ContactSection />
      <OfficeCards />
      <LetsTalkSection />   
    </div>
  );
};

export default ContactPage;

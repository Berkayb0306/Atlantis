import { useSelector } from "react-redux";

const UserProfile = () => {
  // Redux Store'dan kullanıcı bilgilerini al
  const user = useSelector((state) => state.client.user);
  const theme = useSelector((state) => state.client.theme);

  return (
    <div className={`p-4 rounded-lg ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
      <h2 className="text-lg font-bold">Kullanıcı Profili</h2>
      {user?.name ? (
        <p>Merhaba, {user.name}!</p>
      ) : (
        <p>Kullanıcı bilgisi bulunamadı.</p>
      )}
    </div>
  );
};

export default UserProfile;

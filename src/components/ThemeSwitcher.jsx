import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../redux/actions/clientActions";

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.client.theme);

  const toggleTheme = () => {
    dispatch(setTheme(theme === "dark" ? "light" : "dark"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 border rounded bg-blue-500 text-white hover:bg-blue-700 transition"
    >
      Tema Değiştir ({theme})
    </button>
  );
};

export default ThemeSwitcher;

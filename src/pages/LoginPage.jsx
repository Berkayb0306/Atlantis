// src/pages/LoginPage.jsx
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux"; // useSelector eklendi
import { useHistory, useLocation } from "react-router-dom";
import { loginUser } from "../redux/actions/clientActions";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const LoginPage = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [rememberedEmail, setRememberedEmail] = useState("");
  const isAuthenticated = useSelector((state) => state.client.isAuthenticated); // Login durumu

  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberedEmail"); // Son başarılı giriş yapan kullanıcının emailini al
    if (savedEmail) {
      setRememberedEmail(savedEmail);
      setValue("email", savedEmail); // Formda email alanına otomatik yaz
    }
  }, [setValue]);

  // Login durumu değiştiğinde yönlendirme yap
  useEffect(() => {
    if (isAuthenticated) {
      const { from } = location.state || { from: null };
      if (from === "cart") {
        // Eğer sepetten geliyorsa, checkout sayfasına yönlendir
        history.replace("/checkout");
      } else if (from) {
        // Eğer başka bir sayfadan yönlendirme varsa, oraya git
        history.replace(from);
      } else {
        // Aksi halde ana sayfaya yönlendir
        history.replace("/");
      }
    }
  }, [isAuthenticated, history, location]);

  const onSubmit = async (data) => {
    const result = await dispatch(loginUser(data.email, data.password, data.rememberMe));

    if (result.success) {
      toast.success("Başarıyla giriş yaptınız!");

      if (data.rememberMe) {
        localStorage.setItem("rememberedEmail", data.email); // Emaili kaydet
      } else {
        localStorage.removeItem("rememberedEmail"); // Beni Hatırla seçili değilse emaili kaldır
      }
    } else {
      toast.error(result.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800 dark:text-white">Giriş Yap</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input 
              {...register("email", { 
                required: "Email zorunludur.", 
                pattern: { 
                  value: /^\S+@\S+\.\S+$/, 
                  message: "Geçerli bir email adresi girin." 
                }
              })} 
              type="email"
              placeholder="Email"
              defaultValue={rememberedEmail} // Son başarılı giriş yapan kullanıcının emaili burada otomatik görünecek
              className="p-2 w-full border rounded-md bg-gray-50 dark:bg-gray-700 text-black dark:text-white" 
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Şifre</label>
            <input 
              {...register("password", { required: "Şifre zorunludur." })} 
              type="password" 
              placeholder="Şifre"
              className="p-2 w-full border rounded-md bg-gray-50 dark:bg-gray-700 text-black dark:text-white" 
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          {/* Beni Hatırla (Remember Me) */}
          <div className="flex items-center">
            <input 
              type="checkbox" 
              {...register("rememberMe")} 
              className="mr-2"
            />
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Beni Hatırla</label>
          </div>

          {/* Giriş Yap Butonu */}
          <button type="submit" className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 dark:hover:bg-blue-600">
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
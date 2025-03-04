import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router-dom";

const api = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
});

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();
  const watchPassword = watch("password");
  const history = useHistory();
  const [roles, setRoles] = useState([]);
  const [selectedRole, setSelectedRole] = useState("1");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    api.get("/roles")
      .then((response) => {
        setRoles(response.data);
        const defaultRole = response.data.find(role => role.code === "customer");
        if (defaultRole) {
          setSelectedRole(defaultRole.id.toString());
        }
      })
      .catch((error) => console.error("Error fetching roles:", error));
  }, []);

  const onSubmit = async (data) => {
    setErrorMessage("");
    setSuccessMessage("");
    setIsLoading(true);

    const requestData = {
      name: data.name,
      email: data.email,
      password: data.password,
      role_id: data.role_id,
      ...(data.role_id === "2" && {
        store: {
          name: data.store_name,
          phone: data.store_phone,
          tax_no: data.store_tax_no,
          bank_account: data.store_bank_account,
        },
      }),
    };

    try {
      const response = await api.post("/signup", requestData);
      setSuccessMessage(response.data.message);
      reset();
      setTimeout(() => history.push("/"), 3000);
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

        <label className="block text-gray-700">Name</label>
        <input {...register("name", { required: true, minLength: 3 })} type="text" placeholder="Enter your name"
          className={`w-full p-2 border rounded mb-2 ${errors.name ? "border-red-500" : "border-gray-300"}`} />
        {errors.name && <p className="text-red-500 text-sm">Name must be at least 3 characters</p>}

        <label className="block text-gray-700">Email</label>
        <input {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} type="email" placeholder="Enter your email"
          className={`w-full p-2 border rounded mb-2 ${errors.email ? "border-red-500" : "border-gray-300"}`} />
        {errors.email && <p className="text-red-500 text-sm">Invalid email format</p>}

        <label className="block text-gray-700">Password</label>
        <input {...register("password", { required: true, minLength: 8, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!\-./]).{8,}$/ })} type="password" placeholder="Enter a strong password"
          className={`w-full p-2 border rounded mb-2 ${errors.password ? "border-red-500" : "border-gray-300"}`} />
        <p className="text-gray-500 text-xs">Must be at least 8 characters, include uppercase, lowercase, number, and special characters (-./)</p>
        {errors.password && <p className="text-red-500 text-sm">Password must meet criteria</p>}

        <label className="block text-gray-700">Confirm Password</label>
        <input {...register("confirm_password", { validate: (value) => value === watchPassword })} type="password" placeholder="Confirm your password"
          className={`w-full p-2 border rounded mb-2 ${errors.confirm_password ? "border-red-500" : "border-gray-300"}`} />
        {errors.confirm_password && <p className="text-red-500 text-sm">Passwords must match</p>}

        <label className="block text-gray-700">Role</label>
        <select {...register("role_id")} value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)} className="w-full p-2 border rounded mb-2">
          {roles.length > 0 ? (
            roles.map((role) => (
              <option key={role.id} value={role.id}>{role.name}</option>
            ))
          ) : (
            <option value="">Loading roles...</option>
          )}
        </select>

        {successMessage && <p className="text-green-500 text-sm text-center mt-4">{successMessage}</p>}
        {errorMessage && <p className="text-red-500 text-sm text-center mt-4">{errorMessage}</p>}

        <button type="submit" disabled={isLoading} className="w-full bg-blue-500 text-white py-2 rounded mt-4 disabled:bg-gray-400 flex items-center justify-center">
          {isLoading ? <svg className="animate-spin h-5 w-5 mr-2 border-t-2 border-white rounded-full" viewBox="0 0 24 24"></svg> : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default Signup;

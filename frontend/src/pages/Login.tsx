import { useState } from "react";
import { login } from "../services/auth.service";
import useToast from "../hooks/useToast";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { setUser } = useAuth();
  const navigator = useNavigate();
  const { showToast } = useToast();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    if (!email) {
      showToast({ type: "error", message: "Enter email" });
      return;
    }

    if (!password) {
      showToast({ type: "error", message: "Enter password" });
      return;
    }
    try {
      setLoading(true);
      const data = await login(email, password);
      localStorage.setItem("access_token", data.token);
      setUser(data.user);
      showToast({ type: "success", message: "User login successfully" });
      navigator("/home");
    } catch (error: any) {
      console.error(error.response.data);
      showToast({ type: "error", message: error.response.data.message });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className=" w-full h-screen">
      <div className=" w-130 h-fit p-4 rounded-lg text-center mt-9 ml-9">
        <h1 className="font-bold mb-3 text-2xl">Login Page </h1>
        <div className="text-left">
          <label htmlFor="email" className="block">
            Enter Email
          </label>
          <input
            type="text"
            placeholder="test123@gmail.com"
            className=" border outline-0 p-3 w-full rounded-lg mb-4"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <label htmlFor="email" className="block">
            Enter password
          </label>
          <input
            type="text"
            placeholder="ahemd13324"
            className=" border outline-0 p-3 w-full rounded-lg"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <button
          onClick={handleLogin}
          className={`mt-4 p-3 w-full mb-5 text-white 
        rounded-2xl ${loading ? "bg-gray-700" : "bg-blue-600 hover:bg-blue-900"} duration-150 cursor-pointer`}
        >
          {loading ? "loading..." : "Login Now"}
        </button>

        <Link to={"/register"} className="text-blue-700 underline">
          create account
        </Link>
      </div>
    </div>
  );
};

export default Login;

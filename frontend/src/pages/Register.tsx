import { useState } from "react";
import useToast from "../hooks/useToast";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../services/auth.service";
import useAuth from "../hooks/useAuth";

const Register = () => {
  const { showToast } = useToast();
  const { setUser } = useAuth();
  const navigator = useNavigate();
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleRegister = async () => {
    if (!username) {
      showToast({ type: "error", message: "Enter the username" });
      return;
    }
    if (!email) {
      showToast({ type: "error", message: "Enter the Email" });
      return;
    }
    if (!password) {
      showToast({ type: "error", message: "Enter the password" });
      return;
    }

    setLoading(true);

    try {
      const data = await register(username, email, password);
      setUser(data.user);
      showToast({
        type: "success",
        message: "Create New Account successfully",
      });
      navigator("/home");
    } catch (error: any) {
      showToast({ type: "error", message: error.response.data.message });
      console.error(error.response);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className=" w-full h-screen">
      <div className=" w-130 h-fit p-4 rounded-lg text-center mt-9 ml-9">
        <h1 className="font-bold mb-3 text-2xl">Register Page </h1>
        <div className="text-left">
          <label htmlFor="email" className="block">
            Enter username
          </label>
          <input
            type="text"
            placeholder="Ahmed Farag..."
            className=" border outline-0 p-3 w-full rounded-lg mb-4"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
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
        disabled={loading}
          onClick={handleRegister}
          className={`mt-4 p-3 w-full mb-5 text-white 
        rounded-2xl ${loading ? "bg-gray-700" : "bg-blue-600 hover:bg-blue-900"} duration-150 cursor-pointer`}
        >
          {loading ? "loading..." : "Register Now"}
        </button>

        <Link to={"/"} className="text-blue-700 underline">
          login to my account
        </Link>
      </div>
    </div>
  );
};

export default Register;

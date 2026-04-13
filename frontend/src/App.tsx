import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Note from "./pages/Note";
import CreateNote from "./pages/CreateNote";
import Toast from "./components/Toast";
import useAuth from "./hooks/useAuth";
import { useEffect } from "react";
import { getMe } from "./services/user.service";
import AuthLayout from "./layouts/AuthLayout";
import ProtectedLayout from "./layouts/ProtectedLayout";

const App = () => {
  const { setUser } = useAuth();
  useEffect(() => {
    const fatchData = async () => {
      try {
        const data = await getMe();
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };
    fatchData();
  }, []);
  return (
    <>
      <Toast />

      <Routes>
        <Route element={<ProtectedLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/:id/note" element={<Note />} />
          <Route path="/note" element={<CreateNote />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

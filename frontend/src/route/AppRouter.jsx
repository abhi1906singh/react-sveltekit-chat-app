import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import PrivateRoute from "./PrivateRoute";
import LoginForm from "../pages/Login";

function AppRouter() {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />

      <Route element={<PrivateRoute />} >
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About />}/>
      </Route>
    
  </Routes>
  )
}

export default AppRouter
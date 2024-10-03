import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
  Navigate
} from "react-router-dom";

import PresentSimple from "/src/pages/Lessons/PresentSimple";
import FutureSimple from "/src/pages/Lessons/FutureSimple";
import PastSimple from "/src/pages/Lessons/PastSimple";
import AboutApp from "/src/pages/Another/AboutApp";
import Home from "../Home/Home";
import SignUp from "../../pages/SignUp && Login/SingUp";
import Login from "../../pages/SignUp && Login/Login";

function RoutesList() {
  return (
    <>
      <Routes>
        // Link to default page
        <Route path="/" element={<Navigate to="/home" />} />

        // Navbar
        <Route path="/about-app" element={<AboutApp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        // Sidebar
        <Route path="/present-simple" element={<PresentSimple />} />
        <Route path="/future-simple" element={<FutureSimple />} />
        <Route path="/past-simple" element={<PastSimple />} />

        // Footer

      </Routes>
    </>
  );
}

export default RoutesList;

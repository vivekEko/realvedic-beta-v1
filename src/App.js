// Components and Pages
import Header, { Hamburger, Header2 } from "./components/global/Header";
import Sidebar, { SidebarOverlay } from "./components/global/Sidebar";
import HomePage from "./pages/HomePage";

// Routing
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUsPage from "./pages/AboutUsPage";

// Routing
import { useLocation } from "react-router-dom";
import { useState } from "react";

function App() {
  // detecting current location
  const location = useLocation();
  const path = location.pathname;

  //   local variable
  const [homeIsActive] = useState(path == "/" ? true : false); // checking if current page is homepage
  return (
    <div className="cursor-default font-helveticaRegular relative">
      {/* Misc */}
      <SidebarOverlay />
      <Hamburger />

      {/* Main Components */}
      {homeIsActive ? <Header /> : <Header2 />}
      <Sidebar />

      {/* Routes */}
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about_us" element={<AboutUsPage />} />
      </Routes>
    </div>
  );
}

export default App;

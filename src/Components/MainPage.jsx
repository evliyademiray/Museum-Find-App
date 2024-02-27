/* eslint-disable no-unused-vars */
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Map from "./Map";
const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="main">
      <input type="checkbox" id="checkbox" />
      <label
        htmlFor="checkbox"
        onClick={() => handleClick()}
        className="toggle"
      >
        <div className="bars" id="bar1"></div>
        <div className="bars" id="bar2"></div>
        <div className="bars" id="bar3"></div>
      </label>
      {isOpen && (
        <div className=" d-flex flex-column g-3">
          <NavLink to={"/map"}>Harita Görünümü</NavLink>
          <NavLink to={"/searchCity"}>Şehir Aratarak</NavLink>
        </div>
      )}
    </div>
  );
};

export default MainPage;

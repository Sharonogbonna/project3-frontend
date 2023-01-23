import React from 'react'
import { useState } from "react";
import { HiMinus } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";

const ToggleCreate = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };
  return (
    <div>
        <div className="navBar" id="navBar-create">
        <button onClick={handleToggle}>
        {navbarOpen ? (
          <HiMinus style={{ color: "#fff", width: "25px", height: "25px" }} />
        ) : (
          <AiOutlinePlus
            style={{ color: "#1da5be", width: "25px", height: "25px" }}
          />
        )}
      </button>
        </div>
    </div>
  )
}

export default ToggleCreate
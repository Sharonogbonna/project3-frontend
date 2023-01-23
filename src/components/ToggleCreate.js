import React from 'react'
import { useState } from "react";
import { HiMinus } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";

const ToggleCreate = () => {
  const [createButton, setCreateButton] = useState(false)
  const handleToggle = () => {
    setCreateButton((prev) => !prev)
  }
  
  return (
    <div>
         <div className="create-button">
      <button onClick={handleToggle}>
        {createButton ? (
          <HiMinus style={{ color: "#1da5be", width: "25px", height: "25px" }} />
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
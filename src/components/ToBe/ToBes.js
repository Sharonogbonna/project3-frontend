import React from "react";
import { useState, useEffect } from "react";
import { getToBes } from "../../services/toBe-api";
import CreateToBe from "./CreateToBe";
import { Link } from "react-router-dom";
import { HiMinus } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";

const ToBes = () => {
  //state to hold data
  const [toBeList, setToBeList] = useState([]);
  const [createButton, setCreateButton] = useState(false);
  const handleToggle = () => {
    setCreateButton((prev) => !prev);
  };

  useEffect(() => {
    getToBes()
      //.then is the promise, the data we get back
      //once we get the data back 'then what'
      .then((res) => setToBeList(res.data));
  }, []);
  return (
    <div id="page">
      <div className="create-button">
        <button onClick={handleToggle}>
          {createButton ? (
            <HiMinus
              style={{ color: "#1da5be", width: "25px", height: "25px" }}
            />
          ) : (
            <AiOutlinePlus
              style={{ color: "#1da5be", width: "25px", height: "25px" }}
            />
          )}
        </button>
      </div>
      <h1 className="title" id="tbr-list">
        To Be Read & Watched
      </h1>
      <div className={createButton ? "" : "hidden"}>
        <CreateToBe />
      </div>
      
      <div className="tobes">
        <ul>
          {toBeList.map((toBe) => {
            return (
              <div>
                <li>
                  <Link to={`/this-tbr/${toBe._id}`}>
                    <h3 className={`tobes-titles${toBe.done ? " completed" : ""}`}>
                      {toBe.title}
                    </h3>
                  </Link>
                 <div className="tobes-details">
                 <h5>
                    A <span className="tobes-category">{toBe.category}</span> recommended by <span className="tobes-recommender">{toBe.recommender}</span>
                  </h5>
                 </div>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ToBes;

import { useState, useEffect } from "react";
import { getGroceries } from "../../services/groceries.api";
import CreateGrocery from "./CreateGrocery";
import { HiMinus } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";


export default function Groceries() {
  //state to hold data
  const [groceryList, setGroceryList] = useState([]);
  const [createButton, setCreateButton] = useState(false)
  const handleToggle = () => {
    setCreateButton((prev) => !prev)
  }
  useEffect(() => {
    getGroceries()
      //.then is the promise, the data we get back
      //once we get the data back 'then what'
      .then((res) => setGroceryList(res.data));
  }, []);
 
  return (
    <div className="all-groceries-page">
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
        <h1 className="title" id="my-grocery-list">My Grocery List</h1>
        <div className={createButton ? "" : "hidden"}>
        <CreateGrocery />
        </div>
        <div className="groceries">
        <ul>
        {groceryList.map((grocery) => {
          return (
            <div>
              <li>
              <div>
              <Link to={`/this-grocery/${grocery._id}`}>
                  <h3 className={`groceries-titles ${grocery.isPurchased ? " completed" : ""}`}>
                    {grocery.item}
                  </h3>
                </Link>
                <div className="groceries-details">
                {grocery.brand ? <h4>Brand: <span>{grocery.brand}</span></h4> : <h4></h4>} 
                {grocery.store ? <h4>From: <span>{grocery.store}</span></h4> : <h4></h4>}
                {grocery.unit ? <h4>Units: <span>{grocery.unit}</span></h4> : <h4></h4>}
                {grocery.quantity ? <h4>Quantity: <span>{grocery.quantity}</span></h4> : <h4></h4>}
                </div>
                </div>
              </li>
            </div>
          );
        })}
      </ul>
        </div>
    </div>
  );
}

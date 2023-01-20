import { useState, useEffect } from "react";
import { getGroceries } from "../../services/groceries.api";
import CreateGrocery from "./CreateGrocery";

export default function Groceries() {
  //state to hold data
  const [groceryList, setGroceryList] = useState([]);
  
  useEffect(() => {
    getGroceries()
      //.then is the promise, the data we get back
      //once we get the data back 'then what'
      .then((res) => setGroceryList(res.data));
  }, []);

  return (
    <div>
        <h1>My Grocery List</h1>
      <CreateGrocery />
      <ul>
        {groceryList.map((grocery) => {
          return (
            <div>
              <li>
              <div className="item-card">
                <a href={`/this-grocery/${grocery._id}`}>
                  <h1 className={`${grocery.isPurchased ? "completed" : ""}`}>
                    {grocery.item}
                  </h1>
                </a>
                <h3>Brand: {grocery.brand}</h3>
                <h3>{grocery.store}</h3>
                <h3>Units: {grocery.unit}</h3>
                <h3>Quantity: {grocery.quantity}</h3>
                </div>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

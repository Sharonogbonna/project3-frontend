import { useState, useEffect } from "react";
import { getGroceries } from "../../services/groceries.api";

export default function ListOfGroceries() {
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
      <ul>
        {groceryList.map((grocery) => {
          return (
            <div>
              <li>
                  <h3 className={`${grocery.isPurchased ? "completed" : ""}`}>
                    {grocery.item}
                  </h3>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

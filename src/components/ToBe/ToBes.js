import React from 'react'
import { useState, useEffect } from 'react';
import { getToBes } from '../../services/toBe-api';


const ToBes = () => {
  //state to hold data
  const [toBeList, setToBeList] = useState([]);
  
  useEffect(() => {
    getToBes()
      //.then is the promise, the data we get back
      //once we get the data back 'then what'
      .then((res) => setToBeList(res.data));
  }, []);
  return (
    <div>
      <ul>
        {toBeList.map((toBe) => {
          return (
            <div>
              <li>
                  <h3 className={`${toBe.done ? "completed" : ""}`}>
                    {toBe.category} called {toBe.title} recommended by {toBe.recommender}
                  </h3>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}


export default ToBes
import React from 'react'
import { useState, useEffect } from 'react';
import { getToBes } from '../../services/toBe-api';
import CreateToBe from './CreateToBe';
import { Link } from 'react-router-dom'


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
        <div>
            <CreateToBe/>
        </div>
      <ul>
        {toBeList.map((toBe) => {
          return (
            <div>
              <li><Link to={`/this-tbr/${toBe._id}`}>
                  <h3 className={`${toBe.done ? "completed" : ""}`}>
                   {toBe.title}
                  </h3></Link>
                  <h5>A {toBe.category} recommended by {toBe.recommender}</h5>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}


export default ToBes
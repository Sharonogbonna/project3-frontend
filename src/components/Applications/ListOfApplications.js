import React from 'react'
import { useState, useEffect } from 'react';
import { getApplications } from '../../services/application-api';

const ListOfApplications = () => {
  //state to hold data
  const [appList, setAppList] = useState([]);
  
  useEffect(() => {
    getApplications()
      //.then is the promise, the data we get back
      //once we get the data back 'then what'
      .then((res) => setAppList(res.data));
  }, []);
  return (
    <div>
      <ul>
        {appList.map((app) => {
          return (
            <div>
              <li>
                  <h3 className={`${app.isPurchased ? "completed" : ""}`}>
                    {app.position} at {app.company}
                  </h3>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default ListOfApplications
import React from 'react'
import { useState, useEffect } from 'react';
import { getApplications } from '../../services/application-api';
import { Link } from 'react-router-dom';
import CreateApp from './CreateApp';

const Applications = () => {
  const [appList, setAppList] = useState([]);
  
  useEffect(() => {
    getApplications()
      .then((res) => setAppList(res.data));
  }, []);
  return (
    <div>
      <div>
        <CreateApp/>
      </div>
      <ul>
        {appList.map((app) => {
          return (
            <div>
              <li>
                  <Link to={`/this-app/${app._id}`}><h3 className={`${app.isPurchased ? "completed" : ""}`}>
                    {app.company}</h3></Link>
                    Position: {app.position}  
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Applications
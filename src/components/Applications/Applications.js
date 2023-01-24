import React from 'react'
import { useState, useEffect } from 'react';
import { getApplications } from '../../services/application-api';
import { Link } from 'react-router-dom';
import CreateApp from './CreateApp';
import { HiMinus } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";

const Applications = () => {
  const [appList, setAppList] = useState([]);
  const [toBeList, setToBeList] = useState([]);
  const [createButton, setCreateButton] = useState(false);
  const handleToggle = () => {
    setCreateButton((prev) => !prev);
  };

  useEffect(() => {
    getApplications()
      .then((res) => setAppList(res.data));
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
      <h1 className='title' id='my-application-tracker'>Application Tracker</h1>
      <div className={createButton ? "" : "hidden"}>
        <CreateApp/>
      </div>
      <div className='apps'>
      <ul>
        {appList.map((app) => {
          return (
            <div>
              <li>
                  <Link to={`/this-app/${app._id}`}><h3 className='apps-titles'>
                    {app.company}</h3></Link>
                    <h4>{app.position}</h4>  
              </li>
            </div>
          );
        })}
      </ul>
      </div>
    </div>
  );
}

export default Applications
import React from 'react'
import { useState, useEffect } from 'react';
import { getLogs } from '../../services/bookLog-api';
import { Link } from 'react-router-dom'
import CreateLog from './CreateLog';

const ListOfLogs = () => {
  //state to hold data
  const [logList, setLogList] = useState([]);
  
  useEffect(() => {
    getLogs()
      //.then is the promise, the data we get back
      //once we get the data back 'then what'
      .then((res) => setLogList(res.data));
  }, []);
  return (
    <div>
        <div>
        <CreateLog/>
        </div>
        
      <ul>
       
        {logList.map((log) => {
          return (
            
            <div>
              <li>
                <Link to={`/this-book/${log._id}`}>
                  <h3>
                    {log.title} by {log.author}
                  </h3>
                  </Link>
                  {log.startDate && log.endDate ? <h5>Read {new Date(log.startDate).toDateString()} to {new Date(log.endDate).toDateString()}</h5> : <h5></h5> }
                  
                  <h3>Rating: {log.rating}/5 stars</h3>
                  <p>{log.summary}</p>
                  <p>"{log.quotes[Math.floor(Math.random() * log.quotes.length)].trim()}"</p>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default ListOfLogs
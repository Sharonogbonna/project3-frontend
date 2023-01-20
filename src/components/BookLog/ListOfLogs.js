import React from 'react'
import { useState, useEffect } from 'react';
import { getLogs } from '../../services/bookLog-api';

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
      <ul>
        {logList.map((log) => {
          return (
            <div>
              <li>
                  <h3>
                    {log.title} by {log.author}
                  </h3>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default ListOfLogs
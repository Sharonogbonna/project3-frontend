import React from "react";
import { useState, useEffect } from "react";
import { getLogs } from "../../services/bookLog-api";
import { Link } from "react-router-dom";
import CreateLog from "./CreateLog";
import { HiMinus } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";

const ListOfLogs = () => {
  //state to hold data
  const [logList, setLogList] = useState([]);
  const [createButton, setCreateButton] = useState(false);
  const handleToggle = () => {
    setCreateButton((prev) => !prev);
  };

  useEffect(() => {
    getLogs()
      //.then is the promise, the data we get back
      //once we get the data back 'then what'
      .then((res) => setLogList(res.data));
  }, []);
  return (
    <div>
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
        <h1 className="title" id="my-book-log">
          {" "}
          My Book Log
        </h1>
      </div>
      <div className={createButton ? "" : "hidden"}>
        <CreateLog />
      </div>
      <div className="logs">
      <ul>
        {logList.map((log) => {
          return (
            <div>
              <li>
                <Link to={`/this-book/${log._id}`}>
                  <h3 className="logs-titles">
                    {log.title} <span>by {log.author}</span> 
                  </h3>
                </Link>
                {log.startDate && log.endDate ? (
                  <h5>
                    Read {new Date(log.startDate).toDateString()} to{" "}
                    {new Date(log.endDate).toDateString()}
                  </h5>
                ) : (
                  <h5></h5>
                )}

                <h3>Rating: {log.rating}/5 stars</h3>
                <p className="logs-summary">{log.summary}</p>
                <p className="logs-quotes">
                  "
                  {log.quotes[
                    Math.floor(Math.random() * log.quotes.length)
                  ].trim()}
                  "
                </p>
              </li>
            </div>
          );
        })}
      </ul>
      </div>
      
    </div>
  );
};

export default ListOfLogs;

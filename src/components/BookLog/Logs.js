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
    <div className="all-logs-page">
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
        <h1 className="title" id="my-book-log">
          {" "}
          My Book Log
        </h1>
      
      <div className="logs">
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
                    {log.title} <p className="logs-author">by {log.author}</p> 
                  </h3>
                </Link>
                <div className="logs-details">
                {log.startDate && log.endDate ? (
                  <h5 className="logs-dates">
                    Read {new Date(log.startDate).toDateString()} to{" "}
                    {new Date(log.endDate).toDateString()}
                  </h5>
                ) : (
                  <h5></h5>
                )}

                <h3 className="logs-ratings">Rating: {log.rating}/5 stars</h3>
                <p className="logs-summary"><span>Summary: </span>{log.summary}</p>
                <p className="logs-quotes">
                  "
                  {log.quotes[
                    Math.floor(Math.random() * log.quotes.length)
                  ].trim()}
                  "
                </p>
                </div>
              </li>
            </div>
          );
        })}
      </ul>
      </div>
      </div>
      
    </div>
  );
};

export default ListOfLogs;

import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { deleteLog, getLog } from "../../services/bookLog-api";
const Log = () => {
  //setting up the return to main page
  const nav = useNavigate();
  //desturturing the id parameter for use. this is a method and must have pramerters
  const { id } = useParams();
  //setting up our state
  const [log, setLog] = useState({});
  useEffect(() => {
    //getting the one ToDo from the API
    getLog(id).then((res) => setLog(res.data));
  });

  const deleteTheLog = () => {
    deleteLog(id).then(() => nav("/booklog"));
  };
  return (
    <div className="log-card">
      <h3 className="log-title">
        {log.title}
      </h3>
      <p className="log-author">by {log.author}</p>
      {log.startDate && log.endDate ? <h5 className="log-dates">Read {new Date(log.startDate).toDateString()} to {new Date(log.endDate).toDateString()}</h5> : <h5></h5> }
      <div className="log-details">
      <p
      className="log-summary"><span>Summary:</span> {log.summary}</p>
      <h3 className="log-rating">Rating: {log.rating}/5 stars</h3>
      <p className="log-opinion"><span>My opinion:</span> {log.opinion}</p>
      {log.quotes ? <div className="log-quotes">
        <h4>Favorite Lines</h4>
        {log.quotes.map(quote =>{
            return(
                <p>"{quote.trim()}"</p>
            )
        })}
      </div> : <div></div>}
      </div>
      <div className="log-buttons">
      <button
        onClick={() => {
          nav(`/edit-this-book/${id}/edit`);
        }}
      >
        Edit
      </button>
      <button onClick={deleteTheLog}>Delete</button>
      <button
        onClick={() => {
          nav("/booklog");
        }}
      >
        Main
      </button>
      </div>
    </div>
  );
};

export default Log;

import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { deleteApp, getApp } from "../../services/application-api";

const AppDisplay = () => {
  const nav = useNavigate();
  const { id } = useParams();
  
  const [app, setApp] = useState({});
  useEffect(() => {
    
    getApp(id).then((res) => setApp(res.data));
  });

  const deleteTheApp = () => {
    deleteApp(id);
    nav("/apptracker");
  };
  return (
    <div>
      <h3>
        {app.interviewDate.toDateString()}
      </h3>
      {/* {log.startDate && log.endDate ? <h5>Read {new Date(log.startDate).toDateString()} to {new Date(log.endDate).toDateString()}</h5> : <h5></h5> }
      <p>Summary: {log.summary}</p>
      <h3>Rating: {log.rating}/5 stars</h3>
      <p>My opinion: {log.opinion}</p> */}
    
      <button
        onClick={() => {
          nav(`/edit-this-app/${id}/edit`);
        }}
      >
        Edit
      </button>
      <button onClick={deleteTheApp}>Delete</button>
      <button
        onClick={() => {
          nav("/apptracker");
        }}
      >
        Main
      </button>
    </div>
  );
};


export default AppDisplay
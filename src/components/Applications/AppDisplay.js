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

  const renderDescription = () => {
    if (!app.description) {
      return (
        <div>
          <h4>No Description Provided</h4>
        </div>
      );
    } else if (
      app.description.includes("http") ||
      app.description.includes("www")
    ) {
      return (
        <a href={app.description} target="_blank">
          <h4>Link to Job Description</h4>
        </a>
      );
    } else {
      return (
        <div>
          <h4>Job Description:</h4>
          <p>{app.description}</p>
        </div>
      );
    }
  };
  const renderResponse = () => {
    if (!app.response) {
      return (
        <div>
          <p>You have not heard back from them yet</p>
        </div>
      );
    } else if (app.interview && app.response) {
      return (
        <p>
          {" "}
          They responded on {new Date(app.responseDate).toDateString()}. The
          interview is scheduled for{" "}
          {new Date(app.interviewDate).toDateString()}
        </p>
      );
    } else if (app.response) {
      return (
        <p>
          They responded on {new Date(app.responseDate).toDateString()}. They
          did not invite you to interview.
        </p>
      );
    }
  };
  return (
    <div className="app-display">
      <h2>
        <a href={app.appLink} target="_blank">
          {app.position}
        </a>{" "}
        at {app.company}
      </h2>
      {!app.dateApplied ? (
        <h5>You haven't applied yet</h5>
      ) : (
        <h5>
          You submitted your application on{" "}
          {new Date(app.dateApplied).toDateString()}
        </h5>
      )}
      <h3>Location: {app.location}</h3>
      <div>
        {app.stillInterested ? (
          <div>
            {app.offer ? <h2>They offered you ${app.offer}k!</h2> : <h2></h2>}
            <div>{renderDescription()}</div>
            {!app.compensation ? (
              <p>There was no pay range stated.</p>
            ) : (
              <p>Pay range is typically {app.compensation}</p>
            )}
            {app.benefits ? (
              <p>They offer good benefits!</p>
            ) : (
              <p>
                There were no benefits listed or they were not what you were
                looking for.
              </p>
            )}
            {renderResponse()}
          </div>
        ) : (
          <h3>You are no longer interested in this position</h3>
        )}
      </div>
      {/* {app.offer ? <h2>They offered you ${app.offer}k!</h2> : <h2></h2>}
      <div>{renderDescription()}</div>
      {!app.compensation ? <p>There was no pay range stated.</p> : <p>Pay range is typically {app.compensation}</p>}
      {app.benefits ? <p>They offer good benefits!</p> : <p>There were no benefits listed or they were not what you were looking for.</p>}
      {renderResponse()} */}
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

export default AppDisplay;

import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editLog, getLog } from "../../services/bookLog-api";

const EditLog = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    getLog(id) // getting the todo that matches this id
      .then((res) => setData(res.data));
  }, []);

  const editTheLog = (e) => {
    e.preventDefault();
    const updatedLog = {
      title: e.target.title.value,
      author: e.target.author.value,
      startDate: e.target.startDate.value,
      endDate: e.target.endDate.value,
      rating: e.target.rating.value,
      summary: e.target.summary.value,
      opinion: e.target.opinion.value,
      quotes: e.target.quotes.value.split("#"),
    };
    editLog(id, updatedLog);
    nav(`/this-book/${id}`);
  };
  return (
    <div id="form">
      {data ? (
        <div>
          <form onSubmit={editTheLog} className="log-form">
            <h4 className="form-title" id="log-form-title">
              Edit This Review
            </h4>
            <div id="title-input">
              Title:{" "}
              <input
                type="text"
                name="title"
                placeholder="title"
                defaultValue={data.title}
              />
            </div>
            <div id="author-input">
              Author:{" "}
              <input
                type="text"
                name="author"
                placeholder="author"
                defaultValue={data.author}
              />
            </div>
            <div id="startdate-inputs">
              Start Date:{" "}
              <p>
                (your start date was {new Date(data.startDate).toDateString()})
              </p>{" "}
              <input type="date" name="startDate" defaultValue={data.startDate}/> <br />
            </div>
            <div id="enddate-inputs">
              End Date:{" "}
              <p>
                (your end date was {new Date(data.endDate).toDateString()})
              </p>
              <input type="date" name="endDate" defaultValue={data.endDate}/>
            </div>
            <div id="rating-input">
              Rating:{" "}
              <input
                type="number"
                name="rating"
                placeholder="# out of 5"
                defaultValue={data.rating}
              />
            </div>
            <div id="summary-input">
              Summary:{" "}
              <textarea
                type="text"
                name="summary"
                placeholder="summary"
                id="summary"
                defaultValue={data.summary}
              />
            </div>
            <div id="opinion-input">
              Opinion:{" "}
              <textarea
                type="text"
                name="opinion"
                placeholder="opinion"
                id="opinion"
                defaultValue={data.opinion}
              />
            </div>
            <div id="quote-input">
              Favorite Quotes: <p>(use # to separate quotes)</p>
              <textarea
                type="text"
                name="quotes"
                placeholder="quotes"
                id="quotes"
                defaultValue={data.quotes.join("#")}
              />
            </div>
            <div id="submit">
              <input type="submit" value={`Edit Log`} />
            </div>
          </form>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default EditLog;

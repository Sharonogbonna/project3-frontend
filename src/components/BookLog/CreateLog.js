import React from "react";
import { useNavigate } from "react-router-dom";
import { createLog } from "../../services/bookLog-api";
import { useState } from "react";

const CreateLog = () => {
  const nav = useNavigate();
  const [createButton, setCreateButton] = useState(false);

  const closeMenu = () => {
    setCreateButton(false);
  };

  const createTheLog = (e) => {
    e.preventDefault()
    const log = {
      title: e.target.title.value,
      author: e.target.author.value,
      startDate: e.target.startDate.value,
      endDate: e.target.endDate.value,
      rating: e.target.rating.value,
      summary: e.target.summary.value,
      opinion: e.target.opinion.value,
      quotes: e.target.quotes.value.split("#"),
    };
    createLog(log).then(() => nav("/booklog"));
  };

  return (
    <div id="form">
      <form onSubmit={createTheLog} className="log-form">
        <h4 className="form-title" id="log-form-title">
          Review A Book
        </h4>
        <div id="startdate-inputs">
          Start Date: <input type="date" name="startDate" />
        </div>
        <div id="enddate-inputs">
          End Date: <input type="date" name="endDate" />
        </div>
        <div id="title-input">
          Title: <input type="text" name="title" placeholder="title" />
        </div>
        <div id="author-input">
          Author: <input type="text" name="author" placeholder="author" />
        </div>
        <div id="rating-input">
          Rating: <input type="number" name="rating" placeholder="# out of 5" />
        </div>
        <div id="summary-input">
          Summary: <textarea type="text" name="summary" placeholder="summary" />
        </div>
        <div id="opinion-input">
          Personal Thoughts/Opinions: <textarea type="text" name="opinion" placeholder="opinion" />
        </div>
        <div id="quote-input">
          Favorite Quotes: <p>(use # to separate quotes)</p>
          <textarea type="text" name="quotes" placeholder="quotes separated by #" />
        </div>
        <div id="submit">
          <input
            type="submit"
            name="submit"
            value={`create`}
            onClick={closeMenu}
          />
        </div>
      </form>
    </div>
  );
};

export default CreateLog;

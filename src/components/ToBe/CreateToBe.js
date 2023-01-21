import React from "react";
import { useNavigate } from "react-router-dom";
import { createToBe } from "../../services/toBe-api";
const CreateToBe = () => {
  const nav = useNavigate();

  const createTheToBe = (e) => {
    const tobe = {
      title: e.target.title.value,
      author: e.target.author.value,
      platform: e.target.platform.value,
      category: e.target.category.value,
      recommender: e.target.recommender.value,
      done: false
    };
    createToBe(tobe);
    nav("/tbr-w");
  };

  return (
    <div>
      <form onSubmit={createTheToBe} className="tobe-form">
        <h4>Add to TBR/TBW</h4>
        Category: <select name="category">
        <option value="" disabled selected hidden>Select a Category...</option>
        <option value="Book">Book</option>
        <option value="Series">Series</option>
        <option value="Movie">Movie</option>
        </select> <br />
        Title: <input type="text" name="title" placeholder="title" /> <br />
        Author: <input type="text" name="author" placeholder="author" /> <br />
        Platform: <input type={'text'} name="platform" placeholder="e.g. HBOMax, Netflix, etc."/> <br/>
        Recommended by: <input type="text" name="recommender" placeholder="recommended by"/><br/>
        <input type="submit" value={`create`} />
      </form>
    </div>
  );
};

export default CreateToBe;

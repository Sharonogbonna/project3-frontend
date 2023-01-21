import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { deleteToBe, getToBe } from "../../services/toBe-api";

const ToBe = () => {

  const nav = useNavigate();
  
  const { id } = useParams();
  
  const [tobe, setToBe] = useState({});
  useEffect(() => {

    getToBe(id).then((res) => setToBe(res.data));
  });

  const deleteTheToBe = () => {
    deleteToBe(id);
    nav("/tbr-w");
  };

  return (
    <div className="tbr-card">
      <h1>{tobe.title}</h1>{`${tobe.category}` === 'Book' ? <h3>{tobe.category} by {tobe.author}</h3> : <h3>{tobe.category} on {tobe.platform}</h3>}
      <h5>{tobe.recommender} recommended this</h5>
      <h4>{`${tobe.category}`==="Book" ? "Read?" : "Watched?"} {`${tobe.done ? "Yes" : "No"}`}</h4>
      <button className={`${tobe.category}`=== "Book" ? '' : 'hidden'} onClick={() => {nav('/booklog')}}>Log This Book</button>
      <button
        onClick={() => {
          nav(`/edit-this-tbr/${id}/edit`);
        }}
      >
        Edit
      </button>
      <button onClick={deleteTheToBe}>Delete</button>
      <button
        onClick={() => {
          nav("/tbr-w");
        }}
      >
        Main
      </button>
    </div>
  );
}




export default ToBe
import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { deleteGrocery, getGrocery } from "../../services/groceries.api";

export default function Grocery() {
  //setting up the return to main page
  const nav = useNavigate();
  //desturturing the id parameter for use. this is a method and must have pramerters
  const { id } = useParams();
  //setting up our state
  const [grocery, setGrocery] = useState({});
  useEffect(() => {
    //getting the one ToDo from the API
    getGrocery(id).then((res) => setGrocery(res.data));
  });

  const deleteTheGrocery = () => {
    deleteGrocery(id);
    nav("/grocerylist");
  };

  return (
    <div className="grocery-card">
      <h2>{grocery.item}</h2>
      <div id="grocery-details">
      {grocery.brand ? <h3>Brand: {grocery.brand}</h3> : <h3></h3>}
      {grocery.store ? <h3>From: {grocery.store}</h3> : <h3></h3>}
      {grocery.unit ? <h3>Units: {grocery.unit}</h3> : <h3></h3>}
      {grocery.quantity ? <h3>Quantity: {grocery.quantity}</h3> : <h3></h3>}
      </div>
      <h4>Purchased: {`${grocery.isPurchased ? "Yes" : "No"}`}</h4>
      <div className="buttons">
      <button
        onClick={() => {
          nav(`/edit-this-grocery/${id}/edit`);
        }}
      >
        Edit
      </button>
      <button onClick={deleteTheGrocery}>Delete</button>
      <button
        onClick={() => {
          nav("/grocerylist");
        }}
      >
        Main
      </button>
    </div>
      </div>
  );
}

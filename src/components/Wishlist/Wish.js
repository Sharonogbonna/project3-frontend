import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { deleteWish, getWish } from "../../services/wishlist-api";

const Wish = () => {

  const nav = useNavigate();
  const { id } = useParams();
  const [wish, setWish] = useState({});
  useEffect(() => {

    getWish(id).then((res) => setWish(res.data));
  });

  const deleteTheWish = () => {
    deleteWish(id).then(() => nav("/wishlist"));
  };

  return (
    <div className="wish-card">
      <h1 className="wish-title">{wish.name}</h1>
      <a href={wish.link} target="_blank"><p className="wish-link">from {wish.store}</p></a>
      <h3 className="wish-price">${wish.price}</h3>
      <p className="wish-reason">Why? {wish.reason}</p>
      <h4>Received? {`${wish.done ? "Yes" : "No"}`}</h4>
      <div>
      <button
        onClick={() => {
          nav(`/edit-this-wish/${id}/edit`);
        }}
      >
        Edit
      </button>
      <button onClick={deleteTheWish}>Delete</button>
      <button
        onClick={() => {
          nav("/wishlist");
        }}
      >
        Main
      </button>
      </div>
    </div>
  );
}


export default Wish
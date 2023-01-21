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
    deleteWish(id);
    nav("/wishlist");
  };

  return (
    <div className="wish-card">
      <h1>{wish.name}</h1>
      <a href={wish.link}><h3>from {wish.store}</h3></a>
      <h3>Price: ${wish.price}</h3>
      <p>Why? {wish.reason}</p>
      <h4>Received? {`${wish.done ? "Yes" : "No"}`}</h4>
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
  );
}


export default Wish
import React from "react";
import { useNavigate } from "react-router-dom";
import { createWish } from "../../services/wishlist-api";

const CreateWish = () => {
  const nav = useNavigate();

  const createTheWish = (e) => {
    const wish = {
      name: e.target.name.value,
      store: e.target.store.value,
      price: e.target.price.value,
      reason: e.target.reason.value,
      link: e.target.link.value,
      received: false
    };
    createWish(wish);
    nav("/wishlist");
  };

  return (
    <div>
      <form onSubmit={createTheWish} className="wish-form">
        <h4>Add to Wishlist</h4>
        Item: <input type="text" name="name"/> <br />
        Store: <input type="text" name="store" placeholder="store" /> <br />
        Price: <input type='number' name="price" /> <br/>
        Reason: <textarea name="reason" placeholder="Be honest with yourself"/><br/>
        Link: <input type="text" name="link"/>
        <input type="submit" value={`create`} />
      </form>
    </div>
  );
};


export default CreateWish
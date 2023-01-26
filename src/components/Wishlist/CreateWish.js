import React from "react";
import { useNavigate } from "react-router-dom";
import { createWish } from "../../services/wishlist-api";
import { useState } from "react";

const CreateWish = () => {
  const nav = useNavigate();
  const [createButton, setCreateButton] = useState(false);

  const closeMenu = () => {
    setCreateButton(false);
  };

  const createTheWish = (e) => {
    const wish = {
      name: e.target.name.value,
      store: e.target.store.value,
      price: e.target.price.value,
      reason: e.target.reason.value,
      link: e.target.link.value,
      received: false
    };
    createWish(wish).then(() => nav("/wishlist"));
  };

  return (
    <div id="form">
      <form onSubmit={createTheWish} className="wish-form">
        <h4 className="form-title">Add to Wishlist</h4>
        Item: <input type="text" name="name"/> <br />
        Store: <input type="text" name="store" placeholder="Amazon, Best Buy, etc." /> <br />
        Price: <input type='number' name="price" /> <br/>
        Reason: <textarea name="reason" placeholder="Be honest with yourself"/><br/>
        Link: <input type="text" name="link"/>
        <input type="submit" value={`Create`} name="submit" onClick={closeMenu} />
      </form>
    </div>
  );
};


export default CreateWish
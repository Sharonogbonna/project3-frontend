import React from 'react'
import { getWishes } from '../../services/wishlist-api';
import { useState, useEffect } from 'react';
import CreateWish from './CreateWish';
import { Link } from 'react-router-dom';
import { HiMinus } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";


const Wishes = () => {
  //state to hold data
  const [wishList, setWishList] = useState([]);
  const [createButton, setCreateButton] = useState(false);
  const handleToggle = () => {
    setCreateButton((prev) => !prev);
  };
  
  useEffect(() => {
    getWishes()
      //.then is the promise, the data we get back
      //once we get the data back 'then what'
      .then((res) => setWishList(res.data));
  }, []);
  return (
    <div id='page'>
      <div className="create-button">
        <button onClick={handleToggle}>
          {createButton ? (
            <HiMinus
              style={{ color: "#1da5be", width: "25px", height: "25px" }}
            />
          ) : (
            <AiOutlinePlus
              style={{ color: "#1da5be", width: "25px", height: "25px" }}
            />
          )}
        </button>
        </div>
      <div className={createButton ? "" : "hidden"}>
        <CreateWish/>
      </div>
      <h1 className='title' id='my-wishlist'>My Wishlist</h1>
      <div className='wishes'>
      <ul>
        {wishList.map((wish) => {
          return (
            <div>
              <li>
                  <Link to={`/this-wish/${wish._id}`}> <h3 className={`wishes-titles${wish.received ? " completed" : ""}`}>
                    {wish.name} </h3></Link>
                    <a href={wish.link} target="_blank"><h5 className='wishes-links'>from {wish.store}</h5></a>
                 
              </li>
            </div>
          );
        })}
      </ul>
      </div>
    </div>
  );
}



export default Wishes
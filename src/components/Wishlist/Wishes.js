import React from 'react'
import { getWishes } from '../../services/wishlist-api';
import { useState, useEffect } from 'react';
import CreateWish from './CreateWish';
import { Link } from 'react-router-dom';

const Wishes = () => {
  //state to hold data
  const [wishList, setWishList] = useState([]);
  
  useEffect(() => {
    getWishes()
      //.then is the promise, the data we get back
      //once we get the data back 'then what'
      .then((res) => setWishList(res.data));
  }, []);
  return (
    <div>
      <div>
        <CreateWish/>
      </div>
      <ul>
        {wishList.map((wish) => {
          return (
            <div>
              <li>
                  <Link to={`/this-wish/${wish._id}`}> <h3 className={`${wish.received ? "completed" : ""}`}>
                    {wish.name} </h3></Link>
                    <a href={wish.link} target="_blank"><h5>from {wish.store}</h5></a>
                 
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}



export default Wishes
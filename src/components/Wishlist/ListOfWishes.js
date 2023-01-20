import React from 'react'
import { getWishes } from '../../services/wishlist-api';
import { useState, useEffect } from 'react';

const ListOfWishes = () => {
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
      <ul>
        {wishList.map((wish) => {
          return (
            <div>
              <li>
                  <h3 className={`${wish.received ? "completed" : ""}`}>
                    {wish.name} from {wish.store} for ${wish.price}
                  </h3>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default ListOfWishes
import React from 'react'
import { Link } from 'react-router-dom'

const ListOfNav = () => {
  return (
    <div>
            <Link to="/">
                <div>Dashboard</div>
            </Link>
            <Link to="/todos">
                <div>To Do List</div>
            </Link>
            <Link to="/apptracker">
                <div>Application Tracker</div>
            </Link>
            <Link to="/booklog">
                <div>Book Log</div>
            </Link>
            <Link to="/grocerylist">
                <div>Grocery List</div>
            </Link>
            <Link to="/wishlist">
                <div>Wishlist</div>
            </Link>
            <Link to="/tbr-w">
                <div>To Be Read and Watched</div>
            </Link>
        </div>
  )
}

export default ListOfNav
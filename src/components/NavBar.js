import { useState } from "react";
import { Link } from "react-router-dom";
import { MdClose } from 'react-icons/md'
import { FiMenu } from "react-icons/fi"

export default function Nav() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setNavbarOpen(false)
  }
  return (
    <nav className="navBar">
      <button onClick={handleToggle}>
  {navbarOpen ? (
    <MdClose className="MdClose" style={{ color: "#fff", width: "25px", height: "25px" }} />
  ) : (
    <FiMenu className="FiMenu" style={{ color: "#1da5be", width: "25px", height: "25px" }} />
  )}
</button>
      <div className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
        <Link
          to="/"
          activeClassName="active-link"
          onClick={() => closeMenu()}
          exact
        >
          <div>Dashboard</div>
        </Link>
        <Link
          to="/todos"
          activeClassName="active-link"
          onClick={() => closeMenu()}
          exact
        >
          <div>To Do List</div>
        </Link>
        <Link
          to="/apptracker"
          activeClassName="active-link"
          onClick={() => closeMenu()}
          exact
        >
          <div>Application Tracker</div>
        </Link>
        <Link
          to="/booklog"
          activeClassName="active-link"
          onClick={() => closeMenu()}
          exact
        >
          <div>Book Log</div>
        </Link>
        <Link
          to="/grocerylist"
          activeClassName="active-link"
          onClick={() => closeMenu()}
          exact
        >
          <div>Grocery List</div>
        </Link>
        <Link
          to="/wishlist"
          activeClassName="active-link"
          onClick={() => closeMenu()}
          exact
        >
          <div>Wishlist</div>
        </Link>
        <Link
          to="/tbr-w"
          activeClassName="active-link"
          onClick={() => closeMenu()}
          exact
        >
          <div>To Be Read/Watched</div>
        </Link>
      </div>
    </nav>
  );
}

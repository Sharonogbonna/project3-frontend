import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMinus } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";

const CreateNavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };
  return (
    <nav className="navBar" id="navBar-create">
      <button onClick={handleToggle}>
        {navbarOpen ? (
          <HiMinus style={{ color: "#fff", width: "25px", height: "25px" }} />
        ) : (
          <AiOutlinePlus
            style={{ color: "#1da5be", width: "25px", height: "25px" }}
          />
        )}
      </button>
      <div className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
        <Link
          to="/create-todo"
          activeClassName="active-link"
          onClick={() => closeMenu()}
          exact
        >
          <div>Create a To Do</div>
        </Link>
        <Link
          to="/create-app"
          activeClassName="active-link"
          onClick={() => closeMenu()}
          exact
        >
          <div>Add an Application</div>
        </Link>
        <Link
          to="/create-log"
          activeClassName="active-link"
          onClick={() => closeMenu()}
          exact
        >
          <div>Log Your Latest Book</div>
        </Link>
        <Link
          to="/create-grocery"
          activeClassName="active-link"
          onClick={() => closeMenu()}
          exact
        >
          <div>Add Item to Grocery List</div>
        </Link>
        <Link
          to="/create-wish"
          activeClassName="active-link"
          onClick={() => closeMenu()}
          exact
        >
          <div>Add to Wishlist</div>
        </Link>
        <Link
          to="/create-tbr"
          activeClassName="active-link"
          onClick={() => closeMenu()}
          exact
        >
          <div>Add Something To Be Read/Watched</div>
        </Link>
      </div>
    </nav>
  );
};

export default CreateNavBar;

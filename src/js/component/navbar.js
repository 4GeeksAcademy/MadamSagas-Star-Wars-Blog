import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [deleteFavorite, setDeleteFavorite] = useState([]);

  return (
    <nav className="navbar navbar-light bg-dark mb-3 py-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1 ms-4">
          {" "}
          <img
            className="logo img-fluid"
            src="https://fbi.cults3d.com/uploaders/15465378/illustration-file/dd846224-57cc-46c0-961a-bf4a942a9149/swlogo.png"
          />{" "}
        </span>
      </Link>
      <div className="ml-auto boton-navbar">
        <div className="dropdown">
          <a
            className="btn btn-dark border-color btn-lg"
            dropdown-toggle=""
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites
          </a>
          <ul className="dropdown-menu dropdown-menu-end" style={{}}>
            {store.favorites.map((favorite, index) => {
              return (
                <li
                  className="d-flex dropdown-item align-items-center bg-dark"
                  key={index}
                >
                  <Link>{favorite.name}</Link>
                  <i
                    class="fa-solid fa-circle-xmark ms-3 fs-5 text btn-delete close-icon"
                    
                    onClick={() => actions.deleteFavorite(favorite.id)}
                  ></i>
                </li>
              );
            })}
            {/* map de los favoritos de la variable del flux retorna can elemento en <li></li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CardPeople = ({ name, uid }) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="col">
      <div class="card-group">
        <div className="card">
          <img
            width={"100px"}
            height={"100px"}
            lazy
            src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
            className="card-img-top img-fluid"
            alt=""
          />

          <div className="card-body">
            <h5 className="card-title">{name}</h5>

            <Link to={`/card-detail/${uid}`}>
              <a href="#" className="btn btn-white border-color me-2">
                Learn More
              </a>
            </Link>

            <button
              className="btn btn-danger border-color"
              onClick={() => {
                actions.addFavorite(uid, name);
              }}
            >
              <i
                className={
                  store.favorites.find((favorite) => favorite.id == uid)
                    ? "fa-solid fa-heart"
                    : "fa-regular fa-heart"
                }
              ></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPeople;

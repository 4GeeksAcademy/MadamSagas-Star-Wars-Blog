import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import CardPeople from "../component/CardPeople";
import CardDetailCharacters from "../component/CardDetail";
import CardPlanets from "../component/CardPlanets";
import CardStarships from "../component/CardStarships";
import CardDetailPlanets from "../component/CardDetailPlanets";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex">
        <h1 className="mt-5 text-h1 ms-2">Characters</h1>
          <div className="col-12 d-flex max-height mb-5 mt-1">
            
            {store.characters.map((character, index, array) => {
              return (
                <CardPeople
                  name={character.name}
                  uid={character.uid}
                  key={index}
                />
              );
            })}
          </div>
          <h1 className="mt-5 text-h1 ms-2">Planets</h1>
          <div className="col-12 d-flex max-height mb-5 mt-1">
            
            {store.planets.map((planet, index) => {
              return (
                <CardPlanets name={planet.name} uid={planet.uid} key={index} />
              );
            })}
          </div>
          <h1 className="mt-5 text-h1 ms-2">Starships</h1>
          <div className="col-12 d-flex max-height mb-5 mt-2">
            

            {store.starships.map((starship, index) => {
              return (
                <CardStarships
                  name={starship.name}
                  uid={starship.uid}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

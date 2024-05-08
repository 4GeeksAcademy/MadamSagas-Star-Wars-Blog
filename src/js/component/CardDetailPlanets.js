import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const CardDetailPlanets = (name, uid) => {
    const { store, actions} = useContext (Context);
    const params = useParams();
    useEffect (() => {
        actions.getDetailPlanets(params.uid)

    }, [])
    console.log("detalles planetas", store.detailPlanets.properties);
    return (
        <div className="container">
      <div className="card mb-3 mt-4 card-detail" style={{ maxWidth: "1200px" }}>
        <div className="row g-0 ">
          <div class="col-md-4">
            <img
              src={`https://starwars-visualguide.com/assets/img/planets/${params.uid}.jpg`}
              class="img-fluid rounded-end align-items-center"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body ms-5">
              <h1 className="card-title ms-2">
                {store.detailPlanets.properties?.name}
              </h1>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                Rotation Period: {store.detailPlanets.properties?.rotation_period}
                </li>
                <li className="list-group-item">
                Orbital period: {store.detailPlanets.properties?.orbital_period}
                </li>
                <li className="list-group-item">
                Diameter: {store.detailPlanets.properties?.diameter}
                </li>
                <li className="list-group-item">
                Climate: {store.detailPlanets.properties?.climate}
                </li>
                <li className="list-group-item">
                Gravity: {store.detailPlanets.properties?.gravity}
                </li>
                <li className="list-group-item">
                Terrain: {store.detailPlanets.properties?.terrain}
                </li>
                <li className="list-group-item">
                Surface water: {store.detailPlanets.properties?.surface_water}
                </li>
                <li className="list-group-item">
                Population: {store.detailPlanets.properties?.population}
                </li>
              </ul>

              <p className="card-text">
               
              </p>
            </div>
          </div>
        </div>
      </div>
      

      
    </div>

    );
}

export default CardDetailPlanets; 
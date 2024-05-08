import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const CardDetail = (name, uid) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  useEffect(() => {
    actions.getDetailsCharacterts(params.uid);
  }, []);
  console.log(store.detailCharacters.properties);

  return (
    <div className="container">
      <div className="card mb-3 mt-4 card-detail" style={{ maxWidth: "1000px" }}>
        <div className="row g-0 ">
          <div class="col-md-4 ">
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${params.uid}.jpg`}
              class="img-fluid rounded-end "
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body ms-5">
              <h1 className="card-title ms-2 ">
                {store.detailCharacters.properties?.name}
              </h1>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Birth year: {store.detailCharacters.properties?.birth_year}
                </li>
                <li className="list-group-item">
                  Eye color: {store.detailCharacters.properties?.eye_color}
                </li>
                <li className="list-group-item">
                  Gender: {store.detailCharacters.properties?.gender}
                </li>
                <li className="list-group-item">
                  Hair color: {store.detailCharacters.properties?.hair_color}
                </li>
                <li className="list-group-item">
                  Height: {store.detailCharacters.properties?.height}
                </li>
                <li className="list-group-item">
                  Skin color: {store.detailCharacters.properties?.skin_color}
                </li>
                <li className="list-group-item">
                  Mass: {store.detailCharacters.properties?.mass}
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
};
export default CardDetail;

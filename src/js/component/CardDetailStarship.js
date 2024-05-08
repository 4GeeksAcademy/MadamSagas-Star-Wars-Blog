import React, { useContext, useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import { Context } from "../store/appContext";

const CardDetailStarships = (name, uid) => {
    const { store, actions} = useContext(Context);
    const params = useParams();
    useEffect (() => {
        actions.getDetailStarships(params.uid)

    },[])
    console.log(store.CardDetailStarships);

    return (
        <div className="container">
        <div className="card mb-3 mt-4 card-detail" style={{ maxWidth: "1600px" }}>
          <div className="row g-0 d-flex ">
            <div class="col-md-4">
              <img
                src={`https://starwars-visualguide.com/assets/img/starships/${params.uid}.jpg`}
                class="img-fluid rounded-end"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h1 className="card-title mb-4 ms-3">
                  {store.detailStarships.properties?.name}
                </h1>
               
  
                
              </div>
            </div>
          </div>
        </div>
        
  
        
      </div>

    );
};

export default CardDetailStarships;
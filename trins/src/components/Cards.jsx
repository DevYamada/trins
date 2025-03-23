import { useState, useEffect } from "react";
function DisplayCards({ card }) {
  return (
    <div className="card">
      <div className="card-body">

        <div className="author">
          <img src={card.url} className="card-img-top" alt="..." />
          <h5 className="card-title">{card.title}</h5>
        </div>
        <p className="card-text">{card.subscription}</p>
        <div className="img-post-div">
            <img className="img-post" src={card.urlpost} alt="" />
        </div>
      </div>
    </div>
  );
}

export default DisplayCards;

import React from "react";

export default function CardContent(props) {
  return (
    <div>
      <div className="card">
        <img src={props.src} width="200px" height="200px" className="card-img-top" />
        <div className="card-body">

          <h5 className="card-title"> {props.name} </h5>
          <p className="card-text">
            Price: {props.price} <br/>
            {props.description}
          </p>
          <a href="#" className="btn btn-primary">
            Add to cart!
          </a>

        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function MyHome1() {
  return (
    <div>
      <div className="Myhomecss">
        <h1> Cherish Your Mood With Pizza Hut! </h1> 
        <div className="row">
          <div className="col-lg-5 col-md-5">
            <div className="left">
              <img src="pizzahut.jpg" width="530px" height="360px" />
            </div>
          </div>

          <div className="col-lg-7 col-md-7">
            <div className="right">
              <br />
              <br />
              <br />

              <h3 className="special"> Pizza's Online Delivering </h3>
              <h4 className="special">
                Yummy Pizzas delivered fast and fresh!
              </h4>
              <br />

              <div className="buttoncss">
                <button> ORDER NOW </button> 
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-4 col-md-4">
          <br />
          <p className="offer"> Today's Offer! </p>
        </div>

        <div className="col-lg-8 col-md-8"> <br/>
          <img
            className="todaysoffer"
            src="offer2.jpg"
            width="700px"
            height="380px"
          />
        </div>
      </div>
    </div>
  );
}

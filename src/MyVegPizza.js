import React, {Component} from "react";
import CardContent from "./CardContent";

export default function MyVegPizza() {
  return (
    <div>
      <div className="vegpizza" >
        <h2> Veg pizza </h2>
        <div className="row">

          <div className="col-lg-4 col-md-4">
            <CardContent src="chesse_pizza.jpg" name="Cheese Pizza" price="Rs 300" description="It should be no shocker that a classic is the statistical favorite. Cheese pizza is one of the most popular choices. It will always be a simple, unadorned masterpiece on its own." />
          </div>

          <div className="col-lg-4 col-md-4">
            <CardContent src="veggie_pizza.jpg" name="Veggie Pizza" price="Rs 250" description="When you want to jazz up your cheese pizza with color and texture, veggies are the perfect topping. And you're only limited by your imagination. Everything from peppers and mushrooms, to eggplant and onions make for an exciting and tasty veggie pizza."/>
          </div>

          <div className="col-lg-4 col-md-4">
            <CardContent src="pepperoni_pizza.jpg" name="Pepperoni Pizza" price="Rs 200" description="There's a reason this is one of the most popular types of pizza. Who doesn’t love biting into a crispy, salty round of pepperoni?"/>
          </div>

        </div>

      </div>
    </div>
  );
}

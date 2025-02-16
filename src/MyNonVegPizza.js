import React from 'react'
import CardContent from './CardContent'

export default function MyNonVegPizza() {
  return (
    <div>
      <div className="vegpizza" >
        <h2> Non-Veg pizza </h2>
        <div className="row">

          <div className="col-lg-4 col-md-4">
          <CardContent src="meat_pizza.jpg" name="Meat Pizza" price="Rs 400" description="If pepperoni just isn't enough, and you're looking for a pie with a bit more heft, a meat pizza is a perfect and popular choice. Pile on ground beef and sausage for a hearty meal." />
          </div>

          <div className="col-lg-4 col-md-4">
          <CardContent src="Classic_Chicken_Pizza.jpg" name="Classic Chicken Pizza" price="Rs 500" description="Craving chicken pizza but too lazy to cook one at home? Here's an easy recipe that takes just about 30 minutes to cook an aromatic classic chicken pizza! Explore the juiciness of meaty chicken chunks embedded in gooey cheesy pizza along with tangy tomato sauce and fiery chillies. Find the recipe here." />
          </div>
          
          <div className="col-lg-4 col-md-4">
          <CardContent src="Gamberi_Pizza.jpg" name="Gamberi Pizza" price="Rs 450" description="Love digging into prawns? This pizza is just the perfect one for you! Gamberi is an Italian word that refers to shrimp in English and is one of the most popular pizzas in the country. Prawns sautéed with garlic, mushrooms and parsley topped with cheese and sauces is a treat you wouldn't want to miss! Find the recipe here." />
          </div>
          
        </div>
      </div>
    </div>
  )
}

import React from 'react';
import CardContent from './CardContent';

export default function MealsCombos() {
  return (
    <div>
      <div className="vegpizza" >
        <h2> Our Desserts </h2>
        <div className="row">

          <div className="col-lg-4 col-md-4">
          <CardContent src="lava_cake.jpg" name="Choco Volcano Cake" price="Rs 150" description="Enjoy a little moment with something sweet! Choco Delight With A Gooey Chocolate Volcano Centre. Molten chocolate cake is a popular dessert that combines the elements of a chocolate cake and a souffle." />
          </div>

          <div className="col-lg-4 col-md-4">
          <CardContent src="cappuccino_coffee.png" name="Cappuccino Coffee" price="Rs 80" description="Forget everything and have a cup of coffee! A cappuccino is an Italian coffee drink that is traditionally prepared with equal parts double espresso, steamed milk, and steamed milk foam on top." />
          </div>
          
          <div className="col-lg-4 col-md-4">
          <CardContent src="red_velvet.jfif" name="Red Velvet Cafe" price="Rs 250" description="Red velvet cake is the queen of all layer cakes. The “I can't quite put my finger on the flavor” cake. It's the sweet marriage of buttermilk and vanilla with a little cocoa for good measure." />
          </div>
          
        </div>
      </div>
    </div>
  )
}

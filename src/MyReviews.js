import React from 'react';
import ReviewContent from "./ReviewContent";

export default function MyReviews() {
  return (
    <div>
      <div className="vegpizza" >
        <h2> Reviews </h2>
        <div className="row">

          <div className="col-lg-4 col-md-4">
          <ReviewContent src="Tanuja.jpg" name="Tanuja Kokitkar" description="So I ordered this pizza from Pizza Hut, man it was tasty as well as quick, within 33 mins it was there. Dude the guy who delivered me was like the most pleasing person I have ever met across. The delivery staff is really good, like they aren't rude or just having down the face with no words, they are like, Hi sir/mam. Here is your order, with such a big smile." />
          </div>

          <div className="col-lg-4 col-md-4">
          <ReviewContent src="Neelam.jpeg" name="Neelam Patil" description="Pizza Hut is changed now and this proved true to me..Pizza Hut's is my all time favourite for having pizzas..so coming to the food we ordered cheese and corn pizza and I was fully satisfied with my choice.the crust was super soft and it was so cheesy .the texture of pizza was too good loved it." />
          </div>

          <div className="col-lg-4 col-md-4">
          <ReviewContent src="Sanika.jpeg" name="Sanika Kadam" description="Just another good experience with the Pizza Hut store at Pune in Maharashtra, Ordered online, easy and seamless. Our two pizzas were perfectly baked and just...pretty, as if the pizza chef made it for his/her own family. Seriously. The packaged chicken Caesar salad looks good, it's for my sis's lunch tomorrow. This is not our first order from this location, and the team at this store has nailed it every time. Keep it up and we will be continuing customers." />
          </div>

        </div>
      </div>
    </div>
  )
}

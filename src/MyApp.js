import React from 'react';
import MyHome from './MyHome';
import MyNav from './MyNav';
import MyImageSlider from './MyImageSlider';

import MyVegPizza from './MyVegPizza';
import MyNonVegPizza from './MyNonVegPizza';
import MyDesserts from './MyDesserts';
import MyReviews from './MyReviews';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';
import MyOffer from './MyOffer';
import MyFooter from './MyFooter';
import MyHome1 from './MyHome1';

// import { BrowserRouter } from 'react-router-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default function MyApp() {
  return (
    <div>
        <MyHome/>
        <MyImageSlider/>
        <br/>
        <div className='row'>

          <BrowserRouter>
            <div className='col-lg-3 col-md-3'>
              <MyNav />
            </div>

            <div className='col-lg-9 col-md-9'>
              <Routes>
                <Route path='/' element={<MyHome1 />}> </Route>
                <Route path='about' element={<AboutUs />}> </Route>
                <Route path='vegpizza' element={<MyVegPizza />}> </Route>
                <Route path='nonveg' element={<MyNonVegPizza />}> </Route>
                <Route path='meals' element={<MyDesserts />}> </Route>
                <Route path='reviews' element={<MyReviews />}> </Route>
                <Route path='contact' element={<ContactUs />}> </Route>
              </Routes>
            </div>
          
          </BrowserRouter>
        </div>

        {/* <MyOffer /> */}
        <br/>
        <MyFooter />
    </div>
  )
}

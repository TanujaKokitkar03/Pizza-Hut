import React from 'react'

export default function MyFooter() {
  return (

    <div>
        <footer>
          <div className='row footer'>

            <div className='col-lg-4 col-md-4'>
              <h1> ©Pizza Hut! Company, Since 2005 </h1>
              <h2> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Website Created by TANUJA KOKITKAR </h2>
            </div>

            <div className='col-lg-4 col-md-4'>
              <br/><br/><br/>
              <h4> Follow Us On: </h4>
              <img src="whatsapp1.png" width="50px" height="50px" /> &nbsp;
              <img src="instagram1.png" width="50px" height="50px" /> &nbsp;
              <img src="facebook.png" width="50px" height="50px" />
            </div>

            <div className='col-lg-4 col-md-4'>
              <br/><br/><br/>
              <h4> DOWNLOAD APP </h4>
              <button> <img src="play_store1.jpg" width="70px" height="50px" /> Google Play </button>
            </div>

          </div>  
        </footer>
    </div>
  )
}

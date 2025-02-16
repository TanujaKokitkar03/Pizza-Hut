import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";

export default function MyImageSlider() {
    const images = [
        { url: "pizza1.jpg" },
        { url: "pizza3.jpg" },
        { url: "pizza2.jpg" },
        { url: "pizza4.jpg" },
        { url: "pizza5.jpg" },
        { url: "pizza6.jpg" },
       
      ];

    return (
      <div className='slider'>
        <SimpleImageSlider
        width={1510}
        height={600}
        images={images}
        showBullets={true}
        showNavs={true}
      />

      </div>
    )
}

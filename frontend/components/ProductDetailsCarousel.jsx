import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const ProductDetailsCarousel = ({ images }) => {
  console.log(images);
  return (
    <div className='text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]'>
      <Carousel
        showIndicators={true}
        infiniteLoop={true}
        thumbWidth={60}
        showStatus={false}
        className='productCarousel'
      >
        {images.map((image) => (
          <img
            key={image.id}
            src={image.attributes.url}
            alt={image.attributes.name} />
        ))}
      </Carousel>
    </div>
  )
}

export default ProductDetailsCarousel;
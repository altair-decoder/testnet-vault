import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../assets/styles.css";

const Carousel = ({ images }) => {
    const totalImg = images.length;
    // console.log(images.length)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 5000,
                settings: {
                    slidesToShow: Number(totalImg)?5:Number(totalImg),
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: Number(totalImg)?3:Number(totalImg),
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: Number(totalImg)?2:Number(totalImg),
                    slidesToScroll: 1,
                },
            },
                {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

  return (
    // <div className="carousel text-center">
    //     <h2 className="text-[#fff] font-900">Recent Minted</h2>
        <Slider {...settings} >
            {images.map((image, index) => (
                <div key={index} className="text-center">
                    <img 
                    src={image.uri} 
                    alt={`Slide ${index}`} 
                    className="item-img-hero"
                    />
                    <div className="mb-6 sm:text-sm md:text-sm lg:text-md"><h4 className="text-[#fff]">{image.nftName}</h4></div>
                </div>
            ))}
        </Slider>
    // </div>
  );
};

export default Carousel;
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import image1 from "../assets/images/image-product-1.jpg";
import image2 from "../assets/images/image-product-2.jpg";
import image3 from "../assets/images/image-product-3.jpg";
import image4 from "../assets/images/image-product-4.jpg";
import Description from "./Description";

const images = [image1, image2, image3, image4];


const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute 
    left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
  >
    <ChevronLeft size={28} />
  </button>
);


const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 transform 
    -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
  >
    <ChevronRight size={28} />
  </button>
);

function MobileProduct() {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="w-full md:hidden mx-auto p-4 flex flex-col items-center">
      <div className="w-full max-w-[400px] relative rounded-lg overflow-hidden">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={image}
                alt={`Product ${index + 1}`}
                className="w-full object-cover rounded-lg"
              />
            </div>
          ))}
        </Slider>
      </div>

      
      <div className="w-full mt-4 px-4">
        <Description />
      </div>
    </div>
  );
}

export default MobileProduct;

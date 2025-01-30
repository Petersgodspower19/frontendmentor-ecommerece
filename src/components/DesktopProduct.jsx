import React, { useState } from "react";
import image1 from "../assets/images/image-product-1.jpg";
import image2 from "../assets/images/image-product-2.jpg";
import image3 from "../assets/images/image-product-3.jpg";
import image4 from "../assets/images/image-product-4.jpg";
import Description from "./Description";

const images = [image1, image2, image3, image4];

function DesktopProduct() {
  const [mainPicture, setMainPicture] = useState(image1);

  return (
    <div className="hidden md:flex items-center justify-center gap-12 p-8 md:px-20 lg:px-32 mt-12">
      <div className="flex flex-col gap-4 w-[400px]">
        <img
          src={mainPicture}
          alt="Main Product"
          className="w-full rounded-lg object-cover shadow-md"
        />

        
        <div className="flex items-center gap-4 justify-center">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => setMainPicture(image)}
              className={`w-20 h-20 cursor-pointer rounded-lg border-2 transition-all duration-200
                ${
                  mainPicture === image
                    ? "border-orange-500 opacity-100"
                    : "border-transparent opacity-75 hover:opacity-100"
                }`}
            />
          ))}
        </div>
      </div>

     
      <div className="max-w-[500px]">
        <Description />
      </div>
    </div>
  );
}

export default DesktopProduct;

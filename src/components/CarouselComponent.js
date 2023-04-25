import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const CarouselComponent = () => {
  return (
    <Carousel swipeable={true} showArrows={true} autoPlay={true}>
      <div>
        <img src="https://assets.ajio.com/medias/sys_master/images/images/h75/h74/32014221639710/23042021-d-unisex-topcarousel-mainbanner-epicblowout-50to80.jpg" />
      </div>
      <div>
        <img src="https://assets.ajio.com/medias/sys_master/images/images/hbb/he1/11517027221534/12072018-D-SHP-TopBanner-MainBanner-Flat61on3490.jpg" />
      </div>
      <div>
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7557ee42151975.57c2e7c6577d5.jpg" />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;

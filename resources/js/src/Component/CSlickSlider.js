import Slider from "react-slick";

import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";

import '../../../css/component/slick-slider.css' ;

function CSlickSlider(props) {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        offset: 0,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplaySpeed: 2000,
        autoplay: true,
      };
      return (
        <Slider {...settings} >
            {props.children}
        </Slider>
      );
}
export default CSlickSlider ;
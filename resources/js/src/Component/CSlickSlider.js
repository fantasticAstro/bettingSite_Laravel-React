import Slider from "react-slick";

import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";


function CSlickSlider(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <Slider {...settings}>
            <div>
                <img src='images/user/dash-sliders/KajolNew.png'/>
            </div>
            <div>
                <img src='images/user/dash-sliders/KajolNew.png'/>
            </div>
        </Slider>
      );
}
export default CSlickSlider ;
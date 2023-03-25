import Slider from "react-slick";

import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";

import '../../../css/component/slick-slider.css' ;

function CSlickSlider(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        offset: 20,
        slidesToShow: 2,
        slidesToScroll: 2,
        cenderPadding: '20px'
      };
      return (
        <Slider {...settings} >
            <div style={{marginLeft: "20px"}}>
                <img src='images/user/dash-sliders/KajolNew.png' width='100%'/>
            </div>
            <div  style={{marginLeft: "20px"}}>
                <img src='images/user/dash-sliders/KajolNew.png' width='100%'/>
            </div>
            <div  style={{marginLeft: "20px"}}>
                <img src='images/user/dash-sliders/KajolNew.png' width='100%'/>
            </div>
            <div  style={{marginLeft: "20px"}}>
                <img src='images/user/dash-sliders/KajolNew.png' width='100%'/>
            </div>
            <div  style={{marginLeft: "20px"}}>
                <img src='images/user/dash-sliders/KajolNew.png' width='100%'/>
            </div>
            <div  style={{marginLeft: "20px"}}>
                <img src='images/user/dash-sliders/KajolNew.png' width='100%'/>
            </div>
            <div  style={{marginLeft: "20px"}}>
                <img src='images/user/dash-sliders/KajolNew.png' width='100%'/>
            </div>
        </Slider>
      );
}
export default CSlickSlider ;
import CSlickSlider from '../../../Component/CSlickSlider';
import LiveResult from './LiveResult' ;
import BetButtons from './BetButtons' ;

function DashBoard(props){

    return(
        <div className='dash-board'>
            <CSlickSlider>
                <div style={{marginLeft: "20px"}}>
                    <img src='images/user/dash-sliders/KajolNew.png' width='100%'/>
                </div>
                <div  style={{marginLeft: "20px"}}>
                    <img src='images/user/dash-sliders/KajolNew.png' width='100%'/>
                </div>
                <div  style={{marginLeft: "20px"}}>
                    <img src='images/user/dash-sliders/KajolNew.png' width='100%'/>
                </div>
            </CSlickSlider>
            <BetButtons />
            <LiveResult />
        </div>
    ) ;

}
export default DashBoard ;
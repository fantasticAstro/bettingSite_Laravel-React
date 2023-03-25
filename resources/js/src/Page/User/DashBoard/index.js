import CSlickSlider from '../../../Component/CSlickSlider';
import LiveResult from './LiveResult' ;
import BetButtons from './BetButtons' ;

function DashBoard(props){

    return(
        <div className='dash-board'>
            <CSlickSlider />
            <BetButtons />
            <LiveResult />
        </div>
    ) ;

}
export default DashBoard ;
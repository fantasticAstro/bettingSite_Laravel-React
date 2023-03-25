import CButton from '../../../Component/CButton' ;
import CSlickSlider from '../../../Component/CSlickSlider';
import LiveResult from './LiveResult' ;
function DashBoard(props){

    return(
        <div className='dash-board'>
            <CSlickSlider />
            <LiveResult />
        </div>
    ) ;

}
export default DashBoard ;
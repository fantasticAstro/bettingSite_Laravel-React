import CButton from '../../../Component/CButton' ;
import '../../../../../css/user/dashboard/bet_buttons.css' ;
function BetButtons(props){
    return (
        <>
            <div>
                <div className='bet-buttons'>
                    <div className='item' style={{width:'38%', backgroundImage: "url(images/user/dashboard/single_bet_btn_bg.png)"}} >
                        SINGLE
                    </div>
                    <div className='item' style={{width:'38%', backgroundImage: "url(images/user/dashboard/jodi_bet_btn_bg.png)"}}>
                        JODI
                    </div>
                    <div className='item' style={{width:'20%', backgroundImage: "url(images/user/dashboard/PATTI_bet_btn_bg.png)"}}>
                        PATTI
                    </div>
                </div>
            </div>
            <div>
                <div className='bet-buttons'>
                    <div className='item' style={{width:'48%', backgroundImage: "url(images/user/dashboard/single_bet_btn_bg.png)"}} >
                        SINGLE
                    </div>
                    <div className='item' style={{width:'48%', backgroundImage: "url(images/user/dashboard/single_bet_btn_bg.png)"}}>
                        JODI
                    </div>
                </div>
            </div>
        </>
        
    )
}
export default BetButtons ;
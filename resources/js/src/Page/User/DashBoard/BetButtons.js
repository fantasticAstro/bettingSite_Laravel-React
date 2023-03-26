import '../../../../../css/user/dashboard/bet_buttons.css' ;
import CSlickSlider from '../../../Component/CSlickSlider' ;
function BetButtons(props){
    return (
        <>
            <div>
                <div className='bet-buttons'>
                    <div className='item' style={{width:'30%', backgroundImage: "url(images/user/dashboard/single_bet_btn_bg.png)"}} >
                        SINGLE
                    </div>
                    <div className='item' style={{width:'30%', backgroundImage: "url(images/user/dashboard/jodi_bet_btn_bg.png)"}}>
                        JODI
                    </div>
                    <div className='item' style={{width:'30%', backgroundImage: "url(images/user/dashboard/PATTI_bet_btn_bg.png)"}}>
                        PATTI
                    </div>
                </div>
            </div>
            <CSlickSlider>
                <div className='bet-buttons'>
                    <div className='item' style={{width:'100%', backgroundImage: "url(images/user/dashboard/single_bet_btn_bg.png)"}} >
                        CREATE REATES
                    </div>
                </div>
                <div className='bet-buttons'>
                    <div className='item' style={{width:'100%', backgroundImage: "url(images/user/dashboard/single_bet_btn_bg.png)"}} >
                        HOW TO PLAY?
                    </div>
                </div>
                <div className='bet-buttons'>
                    <div className='item' style={{width:'100%', backgroundImage: "url(images/user/dashboard/single_bet_btn_bg.png)"}} >
                        SINGLE
                    </div>
                </div>
            </CSlickSlider>
        </>
        
    )
}
export default BetButtons ;
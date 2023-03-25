import '../../../../../css/user/dashboard/live_result.css' ;
function LiveResult(props){
    return(
        <div className='live-result'>
            <div className='title'>
                <div className='icon'>  
                    <img src='images/user/dashboard/live_result_title_icon.png' />
                </div>
                <div className='name'>
                    LIVE RESULT
                </div>
            </div>
            <div className='content'>
                <div className='item'>
                    <div className='name'>
                        MILAN MORNING
                    </div>
                    <div className='number'>
                        XXX-XX-XXX
                    </div>
                    <div className='setting'>

                    </div>
                </div>
            </div>
        </div>
    ) ;

}
export default LiveResult ;
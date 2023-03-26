import '../../../../../css/user/dashboard/live_result.css' ;
import CButton from '../../../Component/CButton' ;
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
                        {/* <CButton 
                            text='JODI'
                            background='#3F7E68'
                            color='white'
                            padding='7px 11px'
                            hoverBackground='rgb(24, 62, 49)'
                            hoverColor='white'
                            fontSize='12px'
                        />
                        <CButton 
                            text='PANEL'
                            background='#3F7E68'
                            color='white'
                            padding='7px 11px'
                            hoverBackground='rgb(24, 62, 49)'
                            hoverColor='white'
                            marginLeft='25px'
                            fontSize='12px'
                        /> */}
                    </div>
                </div>
                <div className='item'>
                    <div className='name'>
                        MADHURI
                    </div>
                    <div className='number'>
                        XXX-XX-XXX
                    </div>
                    <div className='setting'>
                        {/* <CButton 
                            text='JODI'
                            background='#3F7E68'
                            color='white'
                            padding='7px 11px'
                            hoverBackground='rgb(24, 62, 49)'
                            hoverColor='white'
                            fontSize='12px'
                        />
                        <CButton 
                            text='PANEL'
                            background='#3F7E68'
                            color='white'
                            fontSize='12px'
                            padding='7px 11px'
                            hoverBackground='rgb(24, 62, 49)'
                            hoverColor='white'
                            marginLeft='25px'
                        /> */}
                    </div>
                </div>
                <div className='item'>
                    <div className='name'>
                        SRIDEVI
                    </div>
                    <div className='number'>
                        XXX-XX-XXX
                    </div>
                    <div className='setting'>
                        {/* <CButton 
                            text='JODI'
                            background='#3F7E68'
                            color='white'
                            padding='7px 11px'
                            hoverBackground='rgb(24, 62, 49)'
                            hoverColor='white'
                            fontSize='12px'

                        />
                        <CButton 
                            text='PANEL'
                            background='#3F7E68'
                            color='white'
                            padding='7px 11px'
                            hoverBackground='rgb(24, 62, 49)'
                            hoverColor='white'
                            marginLeft='25px'
                            fontSize='12px'
                        /> */}
                    </div>
                </div>
            </div>
        </div>
    ) ;

}
export default LiveResult ;
import '../../../../../css/user/dashboard/live_result.css' ;
import CButton from '../../../Component/CButton' ;
import NoData from '../../../Component/NoData' ;
import { useState, useEffect } from 'react';
import api from '../../../../api/user/dashboard' ;

import BlockUi from 'react-block-ui';
import { Loader} from 'react-loaders';


import Config from '../../../../config' ;

function LiveResult(props){

    const [live_result, setData] = useState([]);
    const [blocking, setBlocking] = useState(false);
    
    useEffect(() => {
        setBlocking(true) ;
        api.get_liver_result().then(result =>{
            setData(result) ;
            setBlocking(false) ;
        }) ;
        return ;
    }, 1);
    
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
                <BlockUi tag="div" blocking={blocking} loader={<Loader active type={Config.blockingType} color={Config.blockingColor} />}>
                    {
                        live_result.length == 0 ?
                        <NoData />
                        :
                        live_result.map((item, index) =>
                            <div className='item'>
                                <div className='name'>
                                    MILAN MORNING
                                </div>
                                <div className='number'>
                                    XXX-XX-XXX
                                </div>
                                <div className='setting'>
                                    <CButton 
                                        text='PANEL'
                                        background='#3F7E68'
                                        color='white'
                                        padding='7px 11px'
                                        hoverBackground='rgb(24, 62, 49)'
                                        hoverColor='white'
                                        marginLeft='25px'
                                        fontSize='12px'
                                    />         
                                </div>
                            </div>
                        )
                    }
                </BlockUi>
            </div>
        </div>
    ) ;

}
export default LiveResult ;
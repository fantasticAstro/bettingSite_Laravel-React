import Config from '../../../../config' ;
function LeftPart(props) {
    return(
        <div className='left-part'>
            <div className="page-list">
            {
                Config.menuList.map((item, index) =>
                    <>
                        {
                             item.is_left ?
                             <div className='item'>
                                <div className='icon'>
                                    <img src={`images/user/menu-icons/${item.icon}.png`}/>
                                </div>
                                <div className='name'>
                                    {item.name}
                                </div>
                            </div>
                            :
                            <></>
                        }
                    </>
                )
            }
            </div>
            <div className='create-instant'>
                <div className='title'>
                    CREATE INSTANT I'D
                </div>
                <div className='content'>
             
                    <img src='images/user/whatsapp.png' width='50px'/>
                    <img src='images/user/telegram_1.png' width='37px' style={{marginLeft: '10px'}}/>
             
                </div>
            </div>
            <div className='google-play'>
                <img src='images/user/google_play.png'/>
            </div>
        </div>
    ) ;
}
export default LeftPart ;
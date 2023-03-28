import Config from '../../../../config' ;
function Menu(props) {
    return(
        <div className='page-menu'>
            <div className='page-container'>
                <div style={{display:'flex', 
                        justifyContent:'space-around',
                        alignItems:'center',
                        width: '90%',
                        margin: 'auto',
                        height: '35px'
                    }}
                >
                {
                    Config.userMenuList.map((item, index) =>
                        <div className='item'>
                            {item.name}
                        </div>
                    )
                }
                </div>
            </div>
            
        </div>
    ) ;
}
export default Menu ;
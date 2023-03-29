import { NavLink } from 'react-router-dom';
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
                        <NavLink to={item.url}>
                            <div className={`item ${document.location.pathname===item.url?'active':''}`} >
                                {item.name}
                            </div>
                        </NavLink>
                    )
                }
                </div>
            </div>
            
        </div>
    ) ;
}
export default Menu ;
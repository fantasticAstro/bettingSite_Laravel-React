import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import Config from '../../config' ;
import '../../../css/component/sidebar.css' ;
export default props => {
  return (
    <Menu>
        {
          Config.menuList.map((item, index) =>
            <a>
              <div className='menu-item'>
                <div className='icon'>
                  <img src={`images/user/menu-icons/${item.icon}.png`}/>
                </div>
                <div className='name'>
                  {
                    item.name
                  }
                </div>
              </div>
            </a>
          )
        }
    </Menu>
  );
};
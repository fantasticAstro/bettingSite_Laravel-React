import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../../../css/component/sidebar.css' ;
export default props => {
  return (
    <Menu>
        {
          props.children
        }
    </Menu>
  );
};
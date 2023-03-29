import React, { Component } from 'react';
import {Dropdown} from 'react-bootstrap';

import ChatList from './ChatList';
import Aux from "../../../../../../hoc/_Aux";
import DEMO from "../../../../../../store/constant";

import Avatar1 from '../../../../../../../images/admin/avatar-1.jpg';
import Avatar2 from '../../../../../../../images/admin/avatar-2.jpg';
import Avatar3 from '../../../../../../../images/admin/avatar-3.jpg';

class NavRight extends Component {
    state = {
        listOpen: false
    };

    render() {

        return (
            <Aux>
                <ul className="navbar-nav ml-auto">
                    
                    <li className={this.props.rtlLayout ? 'm-r-15' : 'm-l-15'}>
                        <a ><i className="fa fa-sign-out"/></a>
                    </li>
                </ul>
                <ChatList listOpen={this.state.listOpen} closed={() => {this.setState({listOpen: false});}} />
            </Aux>
        );
    }
}

export default NavRight;

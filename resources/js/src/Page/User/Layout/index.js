import React, { Component, Suspense } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Fullscreen from "react-full-screen";
import windowSize from 'react-window-size';

import Loader from "../Layout/Loader";
import routes from "../../../../routes";
import Aux from "../../../../hoc/_Aux";
import * as actionTypes from "../../../../store/actions";

import '../../../../../css/user/layout.css' ;

import Header from './Header' ;
import Footer from './Footer' ;
import UserMenu from './Menu' ;
import Content from './Content' ;
import ScrollToTop from '../Layout/ScrollToTop' ;

import Sidebar from '../../../Component/SideBar' ;
import Config from '../../../../config' ;

import '../../../../../../node_modules/loaders.css';
import '../../../../../../node_modules/react-block-ui/lib/style.css' ;

class UserLayout extends Component {

    fullScreenExitHandler = () => {
        if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
            this.props.onFullScreenExit();
        }
    };

    componentWillMount() {
        if (this.props.windowWidth > 992 && this.props.windowWidth <= 1024 && this.props.layout !== 'horizontal') {
            this.props.onComponentWillMount();
        }
    }

    mobileOutClickHandler() {
        if (this.props.windowWidth < 992 && this.props.collapseMenu) {
            this.props.onComponentWillMount();
        }
    }

    render() {
        const fullScreenExitHandler = () => {
            if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
                this.props.onFullScreenExit();
            }
        };
        
        /* full screen exit call */
        document.addEventListener('fullscreenchange', this.fullScreenExitHandler);
        document.addEventListener('webkitfullscreenchange', this.fullScreenExitHandler);
        document.addEventListener('mozfullscreenchange', this.fullScreenExitHandler);
        document.addEventListener('MSFullscreenChange', this.fullScreenExitHandler);
        
        const menu = routes.user.map((route, index) => {
            return (route.component) ? (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={props => (
                        <route.component {...props} />
                    )} />
            ) : (null);
        });

        return (
            <Aux>
                <ScrollToTop>
                    <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
                        {
                            Config.userMenuList.map((item, index) =>
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
                    </Sidebar>
                    <Fullscreen enabled={this.props.isFullScreen}>
                        <div className="app-user-page" onClick={() => this.mobileOutClickHandler}>
                            <Header />
                            
                            <UserMenu />
                            <Content >
                                <Suspense fallback={<Loader/>}>
                                    <Switch>
                                        {menu}
                                        <Redirect from="/" to={this.props.userDefaultPath} />
                                    </Switch>
                                </Suspense>
                            </Content>
                            <Footer />
                        </div>
                    </Fullscreen>
                </ScrollToTop>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        defaultPath: state.defaultPath,
        isFullScreen: state.isFullScreen,
        collapseMenu: state.collapseMenu,
        configBlock: state.configBlock,
        layout: state.layout
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFullScreenExit: () => dispatch({type: actionTypes.FULL_SCREEN_EXIT}),
        onComponentWillMount: () => dispatch({type: actionTypes.COLLAPSE_MENU})
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (windowSize(UserLayout));
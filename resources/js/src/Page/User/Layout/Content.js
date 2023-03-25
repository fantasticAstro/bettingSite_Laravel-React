import React, { Component, Suspense } from 'react';
import LeftPart from './LeftPart' ;
import RightPart from './RightPart' ;

class Content extends Component {
    render () {
        return(
            <div className='page-content page-container'>
                <LeftPart />
                <div className='main-content'>
                    {
                        this.props.children
                    }
                </div>
                <RightPart />
            </div>
        ) ;
    }
}
export default Content ;
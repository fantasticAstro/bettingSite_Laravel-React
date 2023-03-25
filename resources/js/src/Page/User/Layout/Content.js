import LeftPart from './LeftPart';
import RightPart from './RightPart';


function Content(props) {

    return (
        <div className='page-content page-container'>
            
            {/* <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} /> */}
            <LeftPart />
            <div className='main-content'>
                {
                    props.children
                }
            </div>
            <RightPart />

        </div>
    );
}
export default Content;
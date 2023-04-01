import { Tabs } from 'react-bootstrap';
import '../../../css/component/ctab.css' ;

function CTab(props) {    
    return (
        <div className='custom-tab'>
            <Tabs>
                {props.children}
            </Tabs>
        </div>
    )
}

export default CTab ;
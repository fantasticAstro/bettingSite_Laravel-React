import { Tabs, Tab } from 'react-bootstrap';
import '../../../css/component/ctab.css' ;

function CTab(props) {    
    return (
        <div className='custom-tab'>
            <Tabs defaultActiveKey={props.tabs[0].name}>
                {
                    props.tabs.map((tab,index) =>
                        <Tab eventKey={tab.name} title={tab.name} style={{padding: '57px 40px'}}>
                            {tab.content}
                        </Tab>
                    )
                }
            </Tabs>
        </div>
    )
}

export default CTab ;
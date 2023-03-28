import {useState} from 'react' ;
function CButton(props) {
    const [isHover, setIsHover] = useState(false);
    const style = {
        background: 
            isHover?
                props.hoverBackground?
                    props.hoverBackground:'white'
                :
                props.background?
                    props.background:'black', 
        borderRadius: props.radius?props.radius:'4px',
        padding: props.padding? props.padding:'14px 16px 14px 16px',
        textAlign: props.textAlign?props.textAlign:'center',
        fontSize: props.fontSize?props.fontSize:'16px',
        color: 
            isHover?
                props.hoverColor?
                    props.hoverColor:'black'
                :
                    props.color?props.color:'white',
        cursor: 'pointer',
        fontWeight: '700',
        border: props.border?props.border:'none',
        lineHeight:'100%',
        marginLeft: props.marginLeft?props.marginLeft: "0px",
        marginRight: props.marginRight?props.marginRight: "0px",

        // backgroundImage:
        //     isHover?
        //         props.hoverBackgroundImage?
        //             "url('"+props.hoverBackgroundImage+"')":'none'
        //         :
        //         props.backgroundImage?
        //             "url('"+props.backgroundImage+"')":'none',
        
        width: 
            props.width?props.width:'unset'

    }
    const handleMouseEnter = () => {
        setIsHover(true) ;
    }
    const handleMouseLeave = () => {
        setIsHover(false) ;
    }
    
    
    return(
            <button
                onClick={props.callBack} 
                style={style}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                {props.text}
                
            </button>
    )
    
}
export default CButton ;
function NoData(props) {
    const style = {
        color: props.color?props.color:'black',
        background: props.background?props.background:'white',
        fontSize: props.fontSize?props.fontSize:'12px',
        textAlign:props.textAlign?props.textAlign:'center',
        padding:props.padding?props.padding:'5px'
    } ;
    return (
        <div style = {style}>
            {
                props.text?props.text:'NO DATA' 
            }
        </div>
    ) ;
}
export default NoData ;
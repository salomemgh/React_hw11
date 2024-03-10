function Listitem (props) {
    return(
        <>
            {
                props.array.map (item => <li>{item}</li>)
            }
        </>
    )
}

export default Listitem;
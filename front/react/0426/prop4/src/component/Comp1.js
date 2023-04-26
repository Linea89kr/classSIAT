function Comp1({text}) {
    return (
        <h1>Hello {text}</h1>
    )
}

Comp1.defaultProps = {
    text: "Javascript"
}
export default Comp1
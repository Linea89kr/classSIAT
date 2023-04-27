import styled from "styled-components";

function Comp6() {

    const Input1 = styled.input.attrs({type:'text'})`
    background-color: cyan;`

    const Input2=styled.input.attrs({type:'number'})`
    background-color: yellow;`

    const Input3 =styled.input.attrs({type:'search'})`
    background-color: lightgreen`

    return(
        <div>
            <Input1 type="text"/>
            <Input2 type="number"/>
            <Input3 type="search"/>
        </div>
    )
}

export default Comp6
import styled from "styled-components";

function Comp7() {

    const Button = styled.button`
    color: blue;
    font-size: 1rem;
    margin: 1rem;
    padding: 0.25rem 1rem;
    border: 2px solid blue;
    border-radius: 3px;
    `
    const AbsButton = styled.button`color: red;
      border: 2px solid red;
    `

    return(
        <div>
            <Button>button2</Button>
            <AbsButton>Abstracted Button1</AbsButton>
        </div>
    )
}
export default Comp7
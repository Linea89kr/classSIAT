import styled from "styled-components";

function Comp8() {
    const Button = styled.button`
      color:blue;
      font-size: 1rem;
      margin: 1rem;
      border: 2px solid blue;
      border-radius: 3px;
      display: block;
    `

    return (
        <div>
            <Button as="a" href="https://www.google.com">Link Button</Button>
        </div>
    )
}

export default  Comp8
import styled from "styled-components";

// Color control based on number of cases.

function Comp5(){

    const StyledH1 = styled.h1`
    ${(props) => {
        switch (props.$mode) {
          case "red":
              return `
              color: red;
              `
          case "blue":
              return `
              color: blue;
              `
          case "green":
              return`
          color: green;
          `
          default :
              return `
              color: black;`
        }
    }}
    `

    return(
        <div>
            <StyledH1 $mode="red">This is H1 Tag1</StyledH1>
            <StyledH1 $mode="blue">This is H1 Tag2</StyledH1>
            <StyledH1 $mode="green">This is H1 Tag3</StyledH1>
        </div>
    )
}
export default Comp5
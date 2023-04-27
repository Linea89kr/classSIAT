import styled from "styled-components";

function Comp4() {

    const Thing = styled.div`
    color: blue;
      &:hover{
        color:red;
      }

      &~&{
background-color: tomato;
      }

      &+&{
        background-color: lime;
      }
      &.myname{
        background-color: magenta;
      }
      .innerThing & {
        border: 5px dotted green;
      }
    `

    // Inner is one of function. it points things in sth.

    return (
        <div>
            <Thing>Hello!</Thing>
            <Thing>Nice to meet you!</Thing>
            <div className="myname">
                <Thing>Inner Data</Thing>
            </div>

        </div>
    )
}

export default Comp4
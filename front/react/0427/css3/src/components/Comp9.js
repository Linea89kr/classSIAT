import styled from "styled-components";

function Comp9() {
    const Link = ({className, children}) => (
        <a className = {className}>
            {children}
        </a>
    )

    const StyleLink = styled(Link)`
    color: blue;
    font-weight: bold;`
    return(
        <div>
            <Link>basic link</Link>
            <br/><br/>
            <StyleLink>Styled Link</StyleLink>
        </div>
    )
}
export default Comp9
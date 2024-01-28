import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
            padding: 15 px;
            color: #8186a0;
            text-decoration: none;
            font-size: 30px;
`

function Header() {

    return (
        <nav> 
            <StyledLink to="/">Acceuil</StyledLink>
            <StyledLink to="/survey/1">Questionnaire</StyledLink>
            <StyledLink to="/freelances">Freelances</StyledLink>
        </nav>
    )
}

export default Header
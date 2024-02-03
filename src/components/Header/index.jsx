import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import { StyledLink } from '../../utils/style/Atoms'
import DarkLogo from '../../assets/dark-logo.png'

const HomeLogo = styled.img`
  height: 70px;
`

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

function Header() {
  return (
    <NavContainer>
      <Link to="/">
        <HomeLogo src={DarkLogo} />
      </Link>
      <div>
        <Link to="/">Accueil</Link>
        <Link to="/freelances">Profiles</Link>
        <Link to="/survey/1" $isFullLink>
          Faire le test
        </Link>
      </div>
    </NavContainer>
  )
}

export default Header
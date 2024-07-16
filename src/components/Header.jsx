import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faMagnifyingGlass, faArrowTrendUp, faRss } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  margin: 10px;
`;

const HeaderContent = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
`;

const NavLinksContainer = styled.nav`
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  width: 100%;
  max-width: 1000px;
`;

const LogoAndLogin = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;
  margin-bottom: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  padding-bottom: 0.5rem;

  &.logo {
    font-size: 1.5rem;
    font-weight: bold;
  }

  &.login {
    font-size: 0.8rem;
    background-color: #000;
    color: white;
    border-radius: 20px;
    padding: 0.35rem 0.8rem; 
    margin-left: 1rem;
  }

  &.nav-link {
    font-size: 1.2rem;
    color: #615a5a;
    display: flex;
    align-items: center;

    &:hover {
      color: #000;
    }
  }

  &.active {
    font-weight: bold;
    color: #000;
    border-bottom: 2px solid #000;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const NavLinks = ({ location }) => {
  return (
    <NavLinksContainer>
      <StyledLink className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">
        <FontAwesomeIcon icon={faArrowTrendUp} style={{ marginRight: '10px' }} />
        트렌딩
      </StyledLink>
      <StyledLink className={`nav-link ${location.pathname === '/latest' ? 'active' : ''}`} to="/latest">
        <FontAwesomeIcon icon={faClock} style={{ marginRight: '10px' }} />
        최신
      </StyledLink>
      <StyledLink className={`nav-link ${location.pathname === '/feed' ? 'active' : ''}`} to="/feed">
        <FontAwesomeIcon icon={faRss} style={{ marginRight: '10px' }} />
        피드
      </StyledLink>
    </NavLinksContainer>
  );
};

function Header() {
  const location = useLocation();
  const isDetailPage = location.pathname.startsWith('/detail');

  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoAndLogin>
          <StyledLink className="logo" to="/">velog</StyledLink>
          <IconWrapper>
            <FontAwesomeIcon icon={faBell} />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <StyledLink className="login" to="/login">로그인</StyledLink>
          </IconWrapper>
        </LogoAndLogin>
        {!isDetailPage && <NavLinks location={location} />}
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const HeaderWrapper = styled.header`
  padding: 30px;
  background-color: #f5f5f5;
`;

const Logo = styled.h1`
  font-size: 24px;
  margin: 0;
  text-decoration: none;
`;

const Navigation = styled.nav`
  margin-top: 20px;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 20px;
`;

const NavItem = styled.li`
  font-size: 16px;
  text-decoration: none;
`;
const NavLink = styled(Link)`
  text-decoration: none;
`;
function Header() {
    return (
      <HeaderWrapper>
        <Logo>
          <NavLink to="/">MY BLOG</NavLink>
        </Logo>
        <Navigation>
          <NavList>
            <NavItem>
              <NavLink to="/login">로그인</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/new">새 글 작성</NavLink>
            </NavItem>
          </NavList>
        </Navigation>
      </HeaderWrapper>
    );
  }
export default Header;

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderWrap = styled.header`
  display: grid;
  grid-template-columns: 1fr 100wh;
`;

export const NavWrap = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding-left: 30px;
  box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.3);
`;

export const Link = styled(NavLink)`
  font-size: 18px;
  padding: 3px;
  margin: 10px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &:hover,
  &.active {
    color: white;
    background-color: #999999;
    scale: 1.2;
  }
`;

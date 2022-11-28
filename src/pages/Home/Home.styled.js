import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const MainBox = styled.main`
  margin-top: 12px;
`;

export const Title = styled.h1`
  padding-left: 15px;
  font-weight: 700;
`;

export const List = styled.ul`
  display: inline-block;
  padding: 4px;
`;

export const LinkFilms = styled(Link)`
  display: flex;
  align-items: center;
  width: 100wh;
  padding: 1px 8px;
  color: black;
  text-decoration: none;
  border-radius: 8px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  font-weight: 400;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
  &.active {
    font-weight: 700;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

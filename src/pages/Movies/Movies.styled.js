import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainBox = styled.div`
  text-decoration: none;
`;

export const List = styled.ul`
  list-style-type: none;
  display: block;
`;

export const Item = styled.li`
  text-decoration: none;
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
    background-color: #ffcbcb;
  }
  &.active {
    font-weight: 700;
    background-color: #ffcbcb;
  }
`;

import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 30px);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
  margin: 10px auto;
`;

export const ListItem = styled.li`
  list-style: none;
  &:not(:last-child) {
    margin-right: 5px;
  }
`;

export const Avatar = styled.img`
  width: 100%;
  height: 300px;
`;

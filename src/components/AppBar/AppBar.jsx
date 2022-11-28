import { Link, HeaderWrap, NavWrap } from '../AppBar/AppBar.styled';

export const AppBar = () => {
  return (
    <HeaderWrap>
      <NavWrap>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/movies">Movies</Link>
      </NavWrap>
    </HeaderWrap>
  );
};

import { Link } from '../App/App.styled';

export const AppBar = () => {
  return (
    <header>
      <nav>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/movies">Movies</Link>
      </nav>
    </header>
  );
};

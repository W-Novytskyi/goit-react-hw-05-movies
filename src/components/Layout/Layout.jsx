import { Outlet } from 'react-router-dom';
import { Header, Link } from './Layout.styled';
import PropTypes from 'prop-types';

export const Layout = () => {
  return (
    <>
      <Header>
        <Link to="/">Home</Link>

        <Link to="/movies">Movies</Link>
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

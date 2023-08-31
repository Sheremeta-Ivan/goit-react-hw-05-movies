import Loader from 'components/Loader/Loader';
import React, { Suspense } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header className="bg-header-color  text-[30px] font-[700] ">
        <nav className="pl-6 pr-6 container ml-auto mr-auto h-[90px] flex justify-between text-center items-center">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="30"
              viewBox="0 0 32 26"
              fill="none"
              display="block"
            >
              <path
                d="M25.6 0L28.8 6.4H24L20.8 0H17.6L20.8 6.4H16L12.8 0H9.6L12.8 6.4H8L4.8 0H3.2C1.432 0 0.016 1.432 0.016 3.2L0 22.4C0 24.168 1.432 25.6 3.2 25.6H28.8C30.568 25.6 32 24.168 32 22.4V0H25.6Z"
                fill="#FC4747"
              />
            </svg>
          </Link>
          <div>
            <NavLink
              to="/"
              end
              className="mr-[80px] text-white [&.active]:text-acrive-link"
            >
              Home
            </NavLink>
            <NavLink
              to="/movies"
              className="text-white [&.active]:text-acrive-link"
            >
              Movie
            </NavLink>
          </div>
        </nav>
      </header>
      <div className="grow">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
      <footer>
        <p className="mt-10 text-xl font-thin tracking-tight text-center text-footer ">
          &copy; {new Date().getFullYear()}
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 mr-2"
          >
            TMDB Movie Search
          </a>
          <a
            href="https://github.com/Sheremeta-Ivan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            by IVAN SHEREMETA
          </a>
        </p>
      </footer>
    </>
  );
};

export default Layout;

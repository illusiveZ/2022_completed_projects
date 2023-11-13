import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  // const [isMenuOpened, setIsMenuOpened] = React.useState(false);

  // const toogleButton = () => {
  //   setIsMenuOpened(!isMenuOpened);
  // };

  return (
    <nav className="mb-4">
      <div className="2xl:max-w-6xl xl:max-w-4xl lg:max-w-4xl md:max-w-2xl mx-auto sm:px-6 md:px-0 lg:px-2 xl:px-0">
        <div className="relative flex items-center h-16">
          <div className="hidden md:contents">
            {/* Start of Sun and cloud logo */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="54px"
              height="54px"
              viewBox="0 0 64 64"
            >
              <defs>
                <linearGradient
                  y2="535.55"
                  x2="395.24"
                  y1="551.32"
                  x1="395.48"
                  gradientUnits="userSpaceOnUse"
                  id="0"
                  gradientTransform="matrix(2.07793 0 0 2.08909-503.11-599.88)"
                >
                  <stop stopColor="#ebebeb" />
                  <stop offset="1" stopColor="#fff" />
                </linearGradient>
                <linearGradient
                  id="1"
                  gradientUnits="userSpaceOnUse"
                  x1="305.68"
                  y1="541.42"
                  x2="304.72"
                  y2="511.03"
                >
                  <stop stopColor="#ff9300" />
                  <stop offset="1" stopColor="#ffd702" />
                </linearGradient>
              </defs>
              <g transform="matrix(1.08334 0 0 1.08334-307.62-542.03)">
                <circle cx="305.38" cy="526.52" r="15.881" fill="url(#1)" />
                <path
                  d="m311.11 530.14c-.874-.686-1.973-1.095-3.165-1.095-2.808 0-5.093 2.265-5.165 5.087-2.898 1.099-4.961 3.927-4.961 7.241 0 3.916 2.879 7.151 6.613 7.662v.07h26.451v-.013c3.688-.216 6.613-3.309 6.613-7.093 0-3.649-2.72-6.655-6.222-7.06.014-.222.022-.447.022-.673 0-5.655-4.719-10.239-10.539-10.239-4.308 0-8.01 2.512-9.647 6.11"
                  fill="url(#0)"
                />
              </g>
            </svg>
            {/* End of Sun and cloud logo */}
            <Link to="/">
              <h3 className="ml-1 text-xl font-semibold">Your Weather</h3>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

import React, { useEffect, useContext } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/applicationContext";

const Header = props => {
  const appContext = useContext(AppContext);

const logout = () => {
    appContext.logout();
};
  return (
    <>
      <header className="sticky top-0 z-50">
        <nav
          id="header"
          className="w-screen z-30 bg-slate-900 shadow-lg border-b border-white"
        >
          <div className="w-full flex items-center justify-between mt-0 px-6 py-2">
            <div className="flex items-centerw-auto w-full " id="menu">
              <nav>
                <ul className="flex items-center justify-between text-base text-white ">
                  <li>
                    <p className="inline-block no-underline hover:text-black font-bold text-lg py-2 px-4 lg:-ml-2">
                      Feed App
                    </p>
                  </li>
                  <li>
                    <Link
                      className="inline-block no-underline hover:text-black font-normal text-lg py-2 px-4 lg:-ml-2"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="inline-block no-underline hover:text-black font-normal text-lg py-2 px-4 lg:-ml-2"
                      to="/myFeeds"
                    >
                      My Feeds
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="inline-block no-underline hover:text-black font-normal text-lg py-2 px-4 lg:-ml-2"
                      to="/profile"
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <div
                      className="inline-block no-underline hover:text-black font-normal text-lg py-2 px-4 lg:-ml-2"
                      onClick={() => logout()}
                    >
                      Logout
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </nav>
      </header>
      <main className="w-screen relative">{props.children}</main>
    </>
  );
};

export default Header;

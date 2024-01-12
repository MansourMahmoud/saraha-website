import React, { useEffect, useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { navListItem } from "../utils/navListItem";
import logo from "../assets/logo/vita.jpeg";
import { Link } from "react-router-dom";
import IconDarkMode from "./IconDarkMode";
import { useDispatch, useSelector } from "react-redux";
import { logoutAuth } from "../redux_system/redux_slices/auth/authSlice";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const [openMenu, setOpenMenu] = useState(false);

  //   content list
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:mr-4 lg:flex-row lg:items-center lg:gap-4">
      {navListItem?.map((item, index) => (
        <Button
          variant="text"
          size="lg"
          className="normal-case p-1 font-normal dark:text-darkMode-dark50 dark:hover:bg-darkMode-dark50 dark:hover:text-darkMode-dark950"
          onClick={() => setOpenNav(false)}
        >
          <Link to={item.goTo} className="flex items-center">
            {item.name}
          </Link>
        </Button>
      ))}
    </ul>
  );

  // ========== auth handling =============
  // const { userData, userLoading } = useSelector((state) => state.getUser);
  const { cn, tc } = useSelector((state) => state.mh);

  // const handleLogin = () => {
  //   const decoded = tc && jwtDecode(tc);
  //   if (tc) {
  //     dispatch(getUserFun(decoded.id));
  //   }
  // };
  // useEffect(() => {
  //   handleLogin();
  // }, [tc]);

  const logoutFun = () => {
    dispatch(logoutAuth());
  };

  // ============= end  ================

  return (
    <div className="">
      <Navbar className="dark:bg-darkMode-dark950 sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 dark:border-darkMode-dark950 dark:outline-darkMode-dark950">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link as="a" to="/" className="mr-4 cursor-pointer">
            <img
              src={logo}
              className="rounded-md"
              alt="logo"
              width={40}
              height={40}
            />
          </Link>
          <div className="flex items-center justify-between lg:gap-0 lg:w-full">
            <div className="flex items-center">
              <div className="mr-4 hidden lg:block">{navList}</div>
              {/* Component Icon Dark Mode */}
              <IconDarkMode openMenu={openMenu} setOpenMenu={setOpenMenu} />
            </div>
            <div className="flex items-center gap-x-1">
              {cn === false ? (
                <>
                  <Link to={`/login`}>
                    <Button
                      variant="text"
                      size="sm"
                      className="normal-case hidden lg:inline-block dark:text-darkMode-dark50"
                    >
                      <span>Login</span>
                    </Button>
                  </Link>
                  <Link to={`/sign-up`}>
                    <Button
                      variant="gradient"
                      size="sm"
                      className="normal-case hidden lg:inline-block dark:text-darkMode-dark50"
                    >
                      <span>Sign Up</span>
                    </Button>
                  </Link>
                </>
              ) : (
                <Button
                  fullWidth
                  variant="gradient"
                  size="sm"
                  className="normal-case dark:text-darkMode-dark50 dark:hover:bg-darkMode-dark50 dark:hover:text-darkMode-dark50"
                  onClick={logoutFun}
                >
                  <span>Logout</span>
                </Button>
              )}
            </div>
            <IconButton
              variant="text"
              className="dark:text-darkMode-dark50 ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>

        {/* mobile */}
        <MobileNav
          className={`${openNav === true && "mt-5"} duration-150`}
          open={openNav}
        >
          {navList}
          <div className="flex items-center gap-x-1">
            {cn === false ? (
              <>
                <Link to={`/login`} className="w-1/2">
                  <Button
                    fullWidth
                    variant="text"
                    size="sm"
                    className="normal-case dark:text-darkMode-dark50 dark:hover:bg-darkMode-dark50 dark:hover:text-darkMode-dark950"
                  >
                    <span>Login</span>
                  </Button>
                </Link>
                <Link to={`/sign-up`} className="w-1/2">
                  <Button
                    fullWidth
                    variant="gradient"
                    size="sm"
                    className="normal-case dark:text-darkMode-dark50 dark:hover:bg-darkMode-dark50 dark:hover:text-darkMode-dark50"
                  >
                    <span>Sign Up</span>
                  </Button>
                </Link>
              </>
            ) : (
              <Button
                fullWidth
                variant="gradient"
                size="sm"
                className="normal-case dark:text-darkMode-dark50 dark:hover:bg-darkMode-dark50 dark:hover:text-darkMode-dark50"
                onClick={logoutFun}
              >
                <span>Logout</span>
              </Button>
            )}
          </div>
        </MobileNav>
        {/* end */}
      </Navbar>
    </div>
  );
};

export default Header;

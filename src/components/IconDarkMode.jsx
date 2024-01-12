import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Typography,
} from "@material-tailwind/react";
import {
  MdOutlineDarkMode,
  MdOutlineLightMode,
  MdOutlineLaptop,
} from "react-icons/md";

const IconDarkMode = ({ openMenu, setOpenMenu }) => {
  // list for menu items
  const menuItems = [
    {
      title: "Light",
      icon: <MdOutlineLightMode />,
    },
    {
      title: "Dark",
      icon: <MdOutlineDarkMode />,
    },
    {
      title: "System",
      icon: <MdOutlineLaptop />,
    },
  ];

  // handle localStorage
  const handleDarkMode = (title) => {
    if (title === "Light") {
      localStorage.theme = "light";
    } else if (title === "Dark") {
      localStorage.theme = "dark";
    } else {
      localStorage.removeItem("theme");
    }
  };

  // Supporting system preference and manual selection
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return (
    <Menu open={openMenu} handler={setOpenMenu} allowHover>
      {/* Return the item to be seen on the page in Navbar */}
      {localStorage.theme === "light" ? (
        <MenuHandler>
          <Button
            variant="text"
            className="text-mainColors-main700 flex items-center text-base font-normal duration-200 transition-all gap-2 outline-none border-none"
          >
            <span className="text-2xl">
              <MdOutlineLightMode />
            </span>
          </Button>
        </MenuHandler>
      ) : localStorage.theme === "dark" ? (
        <MenuHandler>
          <Button
            variant="text"
            className="dark:text-darkMode-dark50 flex items-center text-base font-normal duration-200 transition-all gap-2 outline-none border-none"
          >
            <span className="text-2xl">
              <MdOutlineDarkMode />
            </span>
          </Button>
        </MenuHandler>
      ) : (
        <MenuHandler>
          <Button
            variant="text"
            className="dark:text-darkMode-dark50 text-mainColors-main700 flex items-center text-base font-normal duration-200 transition-all gap-2 outline-none border-none"
          >
            <span className="text-2xl">
              <MdOutlineLaptop />
            </span>
          </Button>
        </MenuHandler>
      )}
      {/* Drop-down menu at hover on MenuHandler */}
      <MenuList className="w-fit grid grid-cols-1 gap-3 overflow-visible dark:bg-darkMode-dark50 dark:text-subColors-greenColor600 bg-subColors-greenColor600 text-darkMode-dark50 outline-none border-none z-50">
        <ul className="col-span-4 flex w-full flex-col gap-1 outline-none border-none">
          {menuItems.map(({ title, icon }) => (
            <MenuItem
              key={title}
              className="flex group items-center gap-x-2 border-b-[1px] border-b-darkbg-whiteColor"
              onClick={() => handleDarkMode(title)}
            >
              <Typography
                variant="h6"
                className="mb-1 text-2xl duration-75 transition-colors"
              >
                {icon}
              </Typography>
              <Typography
                variant="h6"
                className="mb-1 duration-75 transition-colors"
              >
                {title}
              </Typography>
            </MenuItem>
          ))}
        </ul>
      </MenuList>
    </Menu>
  );
};

export default IconDarkMode;

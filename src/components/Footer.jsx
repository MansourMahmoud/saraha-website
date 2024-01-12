import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-darkMode-dark200 dark:bg-darkMode-dark800 mt-10 py-5 flex flex-col gap-2 dark:bg-darkbg">
      <div>
        <p className="text-center text-darkMode-dark900 dark:text-darkMode-dark50 text-[12px] sm:text-[16px]">
          PRIVACY POUCY | TERMS OF SERVICE
        </p>
      </div>
      <div>
        <p className="text-center text-darkMode-dark900 dark:text-darkMode-dark50 text-[12px] sm:text-[16px]">
          © 2023{" "}
          <span
            className="hover:text-darkMode-dark500 duration-200 cursor-pointer"
            onClick={() => navigate("/")}
          >
            Saraha
          </span>{" "}
          All Rights Reserved
        </p>
      </div>
    </section>
  );
};

export default Footer;

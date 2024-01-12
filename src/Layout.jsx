import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/sign-up";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

const Layout = () => {
  const { cn, tc } = useSelector((state) => state.mh);
  console.log(cn);
  return (
    <div className="dark:bg-darkMode-dark950">
      <Header />
      <div className="min-h-screen py-10 container mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={cn === false ? <LoginPage /> : <Navigate to="/" />}
          />
          <Route
            path="/sign-up"
            element={cn === false ? <SignUpPage /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

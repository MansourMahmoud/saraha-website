import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useNavigate, Link } from "react-router-dom";
import { setAuth } from "../../redux_system/redux_slices/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { cn } = useSelector((state) => state.mh);
  console.log(cn);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const onLogin = async (ev) => {
    ev.preventDefault();

    dispatch(setAuth(user));

    navigate("/");
    toast.success(`Login successfully`);

    // try {
    //   setLoading(true);

    //   await axios
    //     .post("https://mushaf.onrender.com/api/users/login", user, {
    //       withCredentials: true,
    //     })
    //     .then((response) => {
    //       dispatch(setAuth(response));

    //       navigate("/");
    //       toast.success(`${response.data.message}`);
    //     });
    // } catch (error) {
    //   console.log("Login failed", error.message);
    //   toast.error("Invalid your Email or Password");
    // } finally {
    //   setLoading(false);
    // }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <>
      {/* Sign in */}
      <div className="flex justify-center items-center min-h-screen w-full ">
        <Card
          className="flex flex-col justify-center items-center shadow shadow-darkMode-dark600  dark:shadow dark:shadow-darkMode-dark50 p-5 m-3 sm:m-0"
          color="transparent"
          shadow={false}
        >
          <Typography
            variant="h4"
            color="blue-gray"
            className="dark:text-darkMode-dark50"
          >
            {loading ? "Processing..." : "Login"}
          </Typography>
          <Typography
            color="gray"
            className="mt-1 font-normal dark:text-darkMode-dark50"
          >
            Nice to meet you! Enter your details to login.
          </Typography>
          <form
            onSubmit={onLogin}
            className="mt-8 mb-2 w-full max-w-screen-lg sm:w-96"
          >
            <div className="mb-1 flex flex-col gap-6">
              {/* email */}
              <Typography
                variant="h6"
                color="blue-gray"
                className="-mb-3 dark:text-darkMode-dark50"
              >
                Email
              </Typography>
              <Input
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 dark:text-darkMode-dark50"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={user.email}
                onChange={(ev) => setUser({ ...user, email: ev.target.value })}
              />
              {/* end email */}

              {/* password */}
              <Typography
                variant="h6"
                color="blue-gray"
                className="-mb-3 dark:text-darkMode-dark50"
              >
                Password
              </Typography>
              <Input
                type="password"
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 dark:text-darkMode-dark50"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={user.password}
                onChange={(ev) =>
                  setUser({ ...user, password: ev.target.value })
                }
              />
              {/* end password */}
            </div>
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center flex-wrap font-normal dark:text-darkMode-dark50"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900 dark:hover:text-darkMode-dark400"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button
              className="mt-6 normal-case text-sm dark:text-darkMode-dark50"
              variant="gradient"
              fullWidth
              type="submit"
              disabled={buttonDisabled}
            >
              {buttonDisabled
                ? "Enter your Details to login first"
                : "Login Now!"}
            </Button>
            <Typography
              color="gray"
              className="mt-4 text-center font-normal dark:text-darkMode-dark50 flex items-center gap-2 justify-center flex-wrap"
            >
              Already have an account?
              <Link
                to={"/sign-up"}
                className="font-medium text-gray-900 dark:text-darkMode-dark50 dark:hover:text-darkMode-dark400 duration-200"
              >
                Sign Up
              </Link>
            </Typography>
            <Typography color="gray" className="mt-4 text-center font-normal">
              <Link
                className="font-medium text-gray-900 dark:text-darkMode-dark50"
                to={`/forgotpassword`}
              >
                نسيت كلمة المرور
              </Link>
            </Typography>
          </form>
        </Card>
      </div>
    </>
  );
};

export default LoginPage;

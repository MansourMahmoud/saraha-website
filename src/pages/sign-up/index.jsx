import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Badge,
} from "@material-tailwind/react";
import { useNavigate, Link } from "react-router-dom";

const SignUpPage = ({ isDarkModeActive }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [avatar, setAvatar] = useState(null);

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const onSignUp = async (ev) => {
    ev.preventDefault();

    try {
      setLoading(true);
      const regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      let formData = new FormData();
      formData.append("user_name", user.userName);
      formData.append("email", user.email);
      formData.append("password", user.password);

      if (avatar) {
        formData.append("avatar", avatar);
      }

      const config = {
        headers: { "content-type": "multipart/form-data" },
      };

      if (!regExp.test(user.email)) {
        return toast.error(`البريد الألكتروني غير صالح`);
      }

      const response = await axios.post(
        // `${APIProd}/users/register`,
        formData,
        config
      );

      navigate("/login");
      toast.success(
        `${response.data.message}, now enter your details to login`
      );
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.userName.length > 0 &&
      user.email.length > 0 &&
      user.password.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <>
      <div className="flex justify-center items-center w-full">
        <Card
          className="flex flex-col justify-center items-center shadow shadow-darkMode-dark600  dark:shadow dark:shadow-darkMode-dark50 p-5 m-4 sm:m-0"
          color="transparent"
          shadow={false}
        >
          <Typography
            variant="h4"
            color="blue-gray"
            className="dark:text-darkMode-dark50"
          >
            {loading ? "Processing..." : "Sign Up"}
          </Typography>
          <Typography
            color="gray"
            className="mt-1 font-normal dark:text-darkMode-dark50 text-center"
          >
            Nice to meet you! Enter your details to sign up.
          </Typography>
          <form
            onSubmit={onSignUp}
            className="mt-8  w-full max-w-screen-lg sm:w-96"
          >
            <div className="mb-1 flex flex-col gap-6">
              {/* User Name */}
              <Typography
                variant="h6"
                color="blue-gray"
                className="-mb-3 dark:text-darkMode-dark50"
              >
                User Name
              </Typography>
              <Input
                size="lg"
                placeholder="For example : my name..."
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 dark:text-darkMode-dark50"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={user.userName}
                onChange={(ev) =>
                  setUser({ ...user, userName: ev.target.value })
                }
              />
              {/* end */}

              {/* Email */}
              <Typography
                variant="h6"
                color="blue-gray"
                className="-mb-3 dark:text-darkMode-dark50"
              >
                Email
              </Typography>
              <Input
                size="lg"
                placeholder="example@gmail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 dark:text-darkMode-dark50 "
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={user.email}
                onChange={(ev) => setUser({ ...user, email: ev.target.value })}
              />
              {/* Password */}
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
              {/*Num 4 Upload file faild */}
              <div className="flex flex-col justify-center gap-y-2  group ">
                <span className="pl-1 text-blue-gray-900 font-bold w-full dark:text-darkMode-dark50">
                  Upload your Avatar (optional)
                </span>
                {avatar ? (
                  <Badge
                    withBorder
                    className="cursor-pointer transition-all duration-200 bg-gradient-to-tr from-orange-500 to-orange-900 hover:from-orange-800 hover:to-orange-900 border-2 border-white shadow-lg shadow-black/20 "
                    content={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    }
                    onClick={() => setAvatar(null)}
                  >
                    <label className="cursor-pointer overflow-hidden text-center w-full h-10 text-sm bg-darkMode-dark50 border-[3px] border-gray-300 text-gray-600 rounded-full gap-1 flex items-center justify-center hover:bg-gray-300 hover:text-blue-gray-900 transition-all duration-200 dark:hover:text-darkMode-dark50 dark:bg-darkMode-dark950 dark:hover:bg-darkMode-dark800">
                      {avatar ? (
                        <span className="dark:text-darkMode-dark50">
                          {avatar.name}
                        </span>
                      ) : (
                        <div className="dark:text-darkMode-dark50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                            />
                          </svg>

                          <span className="dark:text-darkMode-dark50">
                            Upload
                          </span>
                        </div>
                      )}

                      <input
                        type="file"
                        onChange={(ev) => {
                          setAvatar(ev.target.files[0]);
                        }}
                        className="hidden"
                      />
                    </label>
                  </Badge>
                ) : (
                  <label className="dark:text-darkMode-dark50 cursor-pointer overflow-hidden text-center w-full h-10 text-sm bg-darkMode-dark50 border-[3px] border-gray-300 text-gray-600 rounded-full gap-1 flex items-center justify-center hover:bg-gray-300 hover:text-blue-gray-900 transition-all duration-200 dark:hover:text-darkMode-dark50 dark:bg-darkMode-dark950 dark:hover:bg-darkMode-dark800">
                    {avatar ? (
                      <span className="dark:text-darkMode-dark50">
                        {avatar.name}
                      </span>
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                          />
                        </svg>

                        <span className="dark:text-darkMode-dark50">
                          Upload
                        </span>
                      </>
                    )}

                    <input
                      type="file"
                      onChange={(ev) => {
                        setAvatar(ev.target.files[0]);
                      }}
                      className="hidden"
                    />
                  </label>
                )}
              </div>
              {/* end Num 4 Upload file faild */}
            </div>
            {/* Checkbox */}
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center flex-wrap font-normal  dark:text-darkMode-dark50"
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
              fullWidth
              variant="gradient"
              type="submit"
              disabled={buttonDisabled}
            >
              {buttonDisabled
                ? "Enter your Details to sign up first"
                : "Sign up Now!"}
            </Button>
            <Typography
              color="gray"
              className="mt-4 text-center font-normal dark:text-darkMode-dark50 flex items-center gap-2 justify-center flex-wrap"
            >
              Already have an account?
            </Typography>
            <Typography color="gray" className="mt-4 text-center font-normal">
              <Link to={"/login"} className="font-medium">
                <Button className="normal-case dark:hover:bg-dartext-darkMode-dark50 dark:hover:text-darkMode-bg duration-150">
                  Back to Login page
                </Button>
              </Link>
            </Typography>
          </form>
        </Card>
      </div>
    </>
  );
};

export default SignUpPage;

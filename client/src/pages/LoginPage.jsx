import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card/Card";
import Input from "../components/Input";
import { PATHS } from "../routes/paths";
const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
    console.log(loginData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(loginData);
  };

  return (
    <div>
      <div
        className="relative py-16
                before:absolute before:inset-0 before:w-full before:h-[50%] bg-[url('https://images.pexels.com/photos/3013120/pexels-photo-3013120.jpeg')] bg-cover bg-center w-screen h-screen"
      >
        <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
          <div className="m-auto space-y-8 md:w-8/12 lg:">
            {/* Logo should come here */}

            <Card heading={"Sign in your account"}>
              <form onSubmit={handleSubmit} className="space-y-8  ">
                <Input
                  id="email"
                  label="Email"
                  type="email"
                  key="input01"
                  handleChange={handleChange}
                />
                <Input
                  id="password"
                  label="Password"
                  type="password"
                  key="input02"
                  handleChange={handleChange}
                />

                <button
                  type="submit"
                  className="w-1/2  py-3 px-6 rounded-md bg-transparent border-2 hover:bg-teal-400 hover:border-teal-400 transition ease-in-out duration-300 focus:bg-teal-700 active:bg-teal-500"
                >
                  <Link to={PATHS.dashboard}>
                    <span className="text-white">Continue</span>
                  </Link>
                </button>
              </form>
            </Card>
            <motion.div
              initial={{ y: -100 }}
              animate={{ y: 10 }}
              transition={{ type: "spring", stiffness: 240 }}
              className="text-center space-x-4 text-white"
            >
              <span>&copy; therapidhire</span>
              <a href="/" className="text-sm hover:text-teal-400">
                Contact
              </a>
              <a href="/" className="text-sm hover:text-teal-400">
                Privacy & Terms
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

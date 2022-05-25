import { motion } from "framer-motion";
import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { BiMessageSquareDetail, BiBell } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import DashboardListItem from "../components/DashboardListItems/DashboardListItem";
import Dropdown from "../components/Dropdown/Dropdown";
import { sidebarConfig } from "../helpers/objects/helperObjects";
const DashboardPage = () => {
  return (
    <div>
      <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r  transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
        <div>
          <div className="-mx-6 px-6 py-4">
            <a href="#" title="home">
              {/* Logo */}
              <h1 className="mt-2 text-2xl">TheRapidHire</h1>
            </a>
          </div>

          <ul className="space-y-2 tracking-wide mt-8">
            <li>
              <motion.div
                aria-label="dashboard"
                className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-rose-300 to-pink-600"
              >
                <MdSpaceDashboard className="-ml-1" size={25} />
                <span className="-mr-1 font-medium">Dashboard</span>
              </motion.div>
            </li>
            {sidebarConfig.map((item) => (
              <DashboardListItem icon={item.icon} title={item.title} />
            ))}

            {/* <li>
              <a
                href="/"
                aria-label="dashboard"
                className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-cyan-300 to-cyan-600"
              >
                <MdSpaceDashboard className="-ml-1" size={25} />
                <span className="-mr-1 font-medium">About Us</span>
              </a>
            </li>

            <li>
              <a
                href="/"
                aria-label="dashboard"
                className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-lime-300 to-green-600"
              >
                <MdSpaceDashboard className="-ml-1" size={25} />
                <span className="-mr-1 font-medium">Services</span>
              </a>
            </li>

            <li>
              <a
                href="/"
                aria-label="dashboard"
                className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-yellow-300 to-red-600"
              >
                <MdSpaceDashboard className="-ml-1" size={25} />
                <span className="-mr-1 font-medium">Features</span>
              </a>
            </li> */}
          </ul>
        </div>

        <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
          <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
            <AiOutlineLogout size={30} />
            <span className="group-hover:text-gray-700">Logout</span>
          </button>
        </div>
      </aside>

      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <div className="sticky top-0 h-16 border-b bg-white lg:py-2.5">
          <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
            <h5 hidden className="text-2xl text-gray-600 font-medium lg:block">
              Dashboard
            </h5>
            <button className="w-12 h-16 -mr-2 border-r lg:hidden">
              <MdSpaceDashboard className="my-auto" size={30} />
            </button>
            <div className="flex space-x-4">
              {/* Search Bar */}
              <div hidden className="md:block">
                <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
                  <span className="absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300">
                    <IoSearchOutline
                      size={20}
                      className="mx-auto fill-current"
                    />
                  </span>
                  <input
                    type="search"
                    name="leadingIcon"
                    id="leadingIcon"
                    placeholder="Search here"
                    className="w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition"
                  />
                </div>
              </div>
              {/* Search Bar */}
              <button
                aria-label="search"
                className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 md:hidden"
              >
                <IoSearchOutline size={20} className="mx-auto fill-current" />
              </button>
              <button
                aria-label="chat"
                className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200"
              >
                <BiMessageSquareDetail className="m-auto" size={20} />
              </button>
              <button
                aria-label="notification"
                className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200"
              >
                <BiBell size={20} className="m-auto" />
              </button>
            </div>
          </div>
        </div>

        <div className="px-6 pt-6 2xl:container">
          <div className="flex justify-center items-center h-[80vh] border-2 border-dashed border-gray-300 rounded-xl ">
            <Dropdown />
            <span>Content</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

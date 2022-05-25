import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineInfoCircle, AiOutlineTeam } from "react-icons/ai";
import { RiCustomerService2Line } from "react-icons/ri";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { BsCode } from "react-icons/bs";
export const sidebarConfig = [
  {
    title: "Home",
    icon: <IoHomeOutline className="-ml-1" size={25} />,
  },
  {
    title: "About Us",
    icon: <AiOutlineInfoCircle className="-ml-1" size={25} />,
  },
  {
    title: "Services",
    icon: <RiCustomerService2Line className="-ml-1" size={25} />,
  },
  {
    title: "Features",
    icon: <MdOutlineFeaturedPlayList className="-ml-1" size={25} />,
  },
  {
    title: "Technologies",
    icon: <BsCode className="-ml-1" size={25} />,
  },
  { title: "Team", icon: <AiOutlineTeam className="-ml-1" size={25} /> },
  { title: "Career" },
];

import DashboardPage from "../pages/DashboardPage";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import { PATHS } from "./paths";

const routes = [
  { path: PATHS.root, exact: true, element: <LandingPage /> },
  { path: PATHS.loginPage, exact: true, element: <LoginPage /> },
  { path: PATHS.dashboard, exact: true, element: <DashboardPage /> },
];

export default routes;

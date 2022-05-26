import { PATHS } from "./paths";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import FeaturesPage from "../pages/FeaturesPage";
import TechnologyPage from "../pages/TechnologyPage";
import TeamPage from "../pages/TeamPage";
import CareerPage from "../pages/CareerPage";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";
import ServicesPage from "../pages/ServicesPage";

const routes = [
  { key: "route01", path: PATHS.root, element: <LandingPage /> },
  { key: "route02", path: PATHS.login, element: <LoginPage /> },
  { key: "route03", path: PATHS.dashboard, element: <DashboardPage /> },
  { key: "route04", path: PATHS.about, element: <AboutPage /> },
  { key: "route05", path: PATHS.services, element: <ServicesPage /> },
  { key: "route06", path: PATHS.features, element: <FeaturesPage /> },
  { key: "route07", path: PATHS.technology, element: <TechnologyPage /> },
  { key: "route08", path: PATHS.team, element: <TeamPage /> },
  { key: "route09", path: PATHS.career, element: <CareerPage /> },
  { key: "route10", path: PATHS.contact, element: <ContactPage /> },
]; 

export default routes;

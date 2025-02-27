// import
import Dashboard from "@/pages/Dashboard";
import Tables from "@/pages/Tables";
import Billing from "@/pages/Billing";
import Profile from "@/pages/Profile";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";

import {
  HomeIcon,
  EmployeeIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
} from "@/components/Icon/svg";
import Iconify from "@/components/icon";

var dashRoutes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
  },
  {
    path: "/employees",
    name: "Xodimlar",
    // icon: <EmployeeIcon color="inherit" />,
    icon: <Iconify icon='solar:users-group-rounded-outline' />,
    component: Tables,
  },
  {
    path: "/billing",
    name: "Billing",
    icon: <CreditIcon color="inherit" />,
    component: Billing,
  },
  {
    name: "ACCOUNT PAGES",
    category: "account",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Profile",
        icon: <PersonIcon color="inherit" />,
        secondaryNavbar: true,
        component: Profile,
      },
      {
        path: "/sign-in",
        name: "Sign In",
        icon: <DocumentIcon color="inherit" />,
        component: SignIn,
      },
      {
        path: "/signup",
        name: "Sign Up",
        icon: <RocketIcon color="inherit" />,
        secondaryNavbar: true,
        component: SignUp,
      },
    ],
  },
];
export default dashRoutes;
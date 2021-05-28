
import Calculator from "views/Calculator";
const routes = [
  // {
  //   path: "/login",
  //   sidebarName: "התחברות",
  //   component: LoginPage,
  //   hidden : true,
  //   icon: HomeIcon
  // },
  {
    path: "/calculator",
    sidebarName: "מחשבון",
    hidden:true,
    component: Calculator
  },
  { redirect: true, path: "/", to: "/calculator" },
];

export default routes;

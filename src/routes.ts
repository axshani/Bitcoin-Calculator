
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
    path: "/Bitcoin-Calculator",
    sidebarName: "מחשבון",
    hidden:true,
    component: Calculator
  },
  { redirect: true, path: "/", to: "/calculator" },
];

export default routes;

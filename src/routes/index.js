import AccountDetail from "../pages/AccountDetail";
import Appointment from "../pages/Appointment";
import Home from "../pages/Home";
import InfoDoctor from "../pages/InfoDoctor";
import MyAccount from "../pages/MyAccount";
import Orders from "../pages/Orders";
import TimeTable from "../pages/TimeTable";

const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/info-doctor",
    component: InfoDoctor,
  },
  {
    path: "time-table",
    component: TimeTable,
  },
];

const privateRoutes = [
  {
    path: "/my-account",
    component: MyAccount,
  },
  {
    path: "/my-account/orders",
    component: Orders,
  },
  {
    path: "/my-account/account-detail",
    component: AccountDetail,
  },
  {
    path: "/appointment",
    component: Appointment,
  },
];

export { publicRoutes, privateRoutes };

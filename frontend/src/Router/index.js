//layout
// import { AuthLayOut } from "../Component/LayOut";
// import Auth from "../Page/Auth/Auth";
import Home from "../Page/Home/Home";

const publicRouter = [
  { path: "/", component: Home },
  // { path: "/", component: Auth, LayOut: AuthLayOut },
  // { path: "/reset/password", component: Login, LayOut: AuthLayOut },
  //   { path: "/:slug2/:slug/:sttnb", component: SubPage, Layout: SubPageLayOut },
];
const priveteRouter = [];

export { publicRouter, priveteRouter };

//layout
import Home from "../Page/Home/Home";

const publicRouter = [
  { path: "/", component: Home },
  { path: "/login", component: Home },
  //   { path: "/:slug2/:slug/:sttnb", component: SubPage, Layout: SubPageLayOut },
];
const priveteRouter = [];

export { publicRouter, priveteRouter };

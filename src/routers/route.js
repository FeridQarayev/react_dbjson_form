import MainRoot from "../pages/MainRoot";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import Add from "../pages/Add";

export const ROUTES = [
  {
    path: "/",
    element: <MainRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "add",
        element: <Add />,
      },
      {
        path: "detail",
        element: <Detail />,
      },
    ],
  },
];

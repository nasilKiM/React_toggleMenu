import { createBrowserRouter } from "react-router-dom";

import Team from "../Pages/Team";
import { Reports, ReportsOne, ReportsThree, ReportsTwo } from "../Pages/Reports";
import Layout from "../Components/Layout";
import Products from "../Pages/Products";
import { Overview, Revenue } from "../Pages/Overview";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/overview",
        element: <Overview />,
      },
      {
        path: "/revenue",
        element: <Revenue />,
      },
      {
        path: "/reports",
        element: <Reports />,
      },
      {
        path: "/reports/reports1",
        element: <ReportsOne />,
      },
      {
        path: "/reports/reports2",
        element: <ReportsTwo />,
      },
      {
        path: "/reports/reports3",
        element: <ReportsThree />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/team",
        element: <Team />,
      },
    ],
  },
]);

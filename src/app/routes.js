import React from "react";
import { useRoutes } from "react-router-dom";

const Home = React.lazy(() => import("./layouts/Home"));
const Movies = React.lazy(() => import("./layouts/Movies"));
const SingleMovie = React.lazy(() => import('./layouts/SingleMovie'))
const Companies = React.lazy(() => import("./layouts/Companies"));
const ErrorPage = React.lazy(() => import('./layouts/ErrorPage'))

const Routes = () => {
  const routes = [
    {
      path: "",
      element: <Home />,
    },
    {
      path: "/movies",
      children: [
        {
          path: "",
          element: <Movies />,
        },
        {
          path: ":page",
          element: <Movies />,
        },
      ],
    },
    {
        path: "/movie",
        children: [
            {
                path: "",
                element: <Movies />
            },
            {
                path: ":slug",
                element: <SingleMovie />
            }
        ]
    },
    {
      path: "/companies",
      element: <Companies />,
    },
    {
        path: '*',
        element: <ErrorPage />
    }
  ];

  return useRoutes(routes);
};

export default Routes;

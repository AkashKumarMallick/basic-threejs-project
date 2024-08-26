import { createBrowserRouter } from "react-router-dom";
import Root from "../../wrappers/Root";
import Home from "../../pages/home";
import ErrorPage from "../../pages/error";

export const router = createBrowserRouter([
    {
        path: '*',
        element: <ErrorPage />,
    },
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);
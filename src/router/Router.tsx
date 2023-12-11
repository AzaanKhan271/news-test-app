import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../components/Home/Home";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import Articles from "../components/Articles/Articles";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/articles",
    element: <Articles />,
    errorElement: <ErrorBoundary />,
  },
]);

const Router = () => {
  return <RouterProvider router={routes} />;
};

export default Router;

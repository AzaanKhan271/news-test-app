import {
  createBrowserRouter,
  RouterProvider,
  //   Route,
  //   Link,
} from "react-router-dom";
import Home from "../components/Home/Home";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement : <ErrorBoundary/>,
  },
]);

const Router = () => {
  return <RouterProvider router={routes} />;
};

export default Router;

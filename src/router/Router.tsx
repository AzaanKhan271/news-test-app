import {
  createBrowserRouter,
  RouterProvider,
  //   Route,
  //   Link,
} from "react-router-dom";
import Home from "../components/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

const Router = () => {
  return <RouterProvider router={routes} />;
};

export default Router;

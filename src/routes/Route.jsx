import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AddPaintingCraft from "../pages/AddPaintingCraft/AddPaintingCraft";
import PaintingCraftDetails from "../pages/PaintingCraftDetails/PaintingCraftDetails";
import PrivateRoute from "./PrivateRoute";
import AllArtCrafts from "../pages/AllArtCrafts/AllArtCrafts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/add-painting-craft",
        element: <AddPaintingCraft />,
      },
      {
        path: "/craft-details/:id",
        element: (
          <PrivateRoute>
            <PaintingCraftDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/craft/${params.id}`),
      },
      {
        path: "/all-painting-craft",
        element: <AllArtCrafts />,
        loader: () => fetch("http://localhost:5000/crafts"),
      },
    ],
  },
]);

export default router;

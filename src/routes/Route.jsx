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
import MyPaintingCraftList from "../pages/MyPaintingCraftList/MyPaintingCraftList";
import PaintingCraftUpdate from "../pages/PaintingCraftUpdate/PaintingCraftUpdate";

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
        element: (
          <PrivateRoute>
            <AddPaintingCraft />
          </PrivateRoute>
        ),
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
      {
        path: "/my-painting-craft-list",
        element: (
          <PrivateRoute>
            <MyPaintingCraftList />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-painting-craft/:id",
        element: (
          <PrivateRoute>
            <PaintingCraftUpdate />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/craft/${params.id}`),
      },
    ],
  },
]);

export default router;

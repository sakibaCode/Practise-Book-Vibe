import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/homepage";
import Books from "../pages/books/books";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "books",
        element: <Books />,
      },
    ],
    errorElement: <ErrorPage/>
  },
]);
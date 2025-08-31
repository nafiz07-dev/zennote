import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Applayout from "./applayout";
import NotePage from "./Pages/NotePage";
import Error from "./Components/Error";
import NewNote from "./Pages/NewNote";
import SearchModal from "./Modals/SearchModal";

export const router = createBrowserRouter([
  {
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [{ path: "search", element: <SearchModal /> }],
      },
      { path: "note/:id", element: <NotePage /> },
      { path: "create", element: <NewNote /> },
    ],
  },
]);

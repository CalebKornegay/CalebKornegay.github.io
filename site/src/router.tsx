import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayout from "./views/homelayout";
import App from "./App";
import DigitalDash from "./views/projects/digitaldash";
import OpenTicket from "./views/projects/openticket";
import Rdiff from "./views/projects/rdiff";
import Fzk from "./views/projects/fzk";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: "/",
        element: <HomeLayout />,
        errorElement: <div>Error</div>,
      },
      {
        path: "/projects",
        errorElement: <div>Error</div>,
        children: [
          {
            path: "openticket",
            element: <OpenTicket />,
          },
          {
            path: "rdiff",
            element: <Rdiff />,
          },
          {
            path: "digitaldash",
            element: <DigitalDash />,
          },
          {
            path: "fzk",
            element: <Fzk />,
          }
        ],
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}

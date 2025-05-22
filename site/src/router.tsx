import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayout from "./views/homelayout";
import Projects from "./views/projects";
import App from './App';

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
            path: "",
            element: <Projects />,
          },
          {
            path: "senior_design",
            element: <div>Senior Design</div>,
          },
          {
            path: "rdiff",
            element: <div>Rdiff</div>,
          },
        ],
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}

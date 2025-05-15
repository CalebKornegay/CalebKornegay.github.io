import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './views/home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <div>Error</div>,
        children: [
            {}
        ]
    }
]);

export default function Router() {
    return <RouterProvider router={router} />;
}

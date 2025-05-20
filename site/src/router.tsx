import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomeLayout from './views/homelayout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        errorElement: <div>Error</div>,
        children: [
            {}
        ]
    }
]);

export default function Router() {
    return <RouterProvider router={router} />;
}

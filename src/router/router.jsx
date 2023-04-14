import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Root from "../pages/Root";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "/",
                element: <HomePage/>
            },
            {
                path: "/home",
                element: <HomePage/>
            },
            {
                path: "/reg",
                element: <HomePage/>
            },
            {
                path: "/auth",
                element: <HomePage/>
            },
            // {
            //     path: "/single/:id",
            //     element: <HomePage/>
            // }
        ]

    }
])

export default router;
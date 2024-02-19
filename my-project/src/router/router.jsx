import * as React from "react";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";
import App from "../App";
import Terms from "../pages/Terms";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "terms",
        element: <Terms />,
    },
]);

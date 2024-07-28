import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import About from "./pages/About/About.tsx";
import Activity from "./pages/Activity/Activity.tsx";
import Contacts from "./pages/Contacts/Contacts.tsx";
import Registry from "./pages/Registry/Registry.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ index: true, element: <About /> },
			{
				path: "activities",
				element: <Activity />,
			},
			{
				path: "registry",
				element: <Registry />,
			},
			{
				path: "contacts",
				element: <Contacts />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

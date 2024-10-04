import { createTheme, MantineProvider } from "@mantine/core";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import App from "./App.tsx";

import "@fontsource-variable/montserrat";
import "@fontsource/kaushan-script";

import "@mantine/core/styles.css";
import "./index.css";
import { Layout } from "./layout.tsx";
import FarmProfile from "./FarmProfile.tsx";

const theme = createTheme({
  /** Your theme override here */
  primaryColor: "green",
});

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <App />
      </Layout>
    ),
  },
  {
    path: "/*",
    element: (
      <Layout>
        <Navigate to="/" />
      </Layout>
    ),
  },
  {
    path: "/profile/*",
    element: (
      <Layout>
        <FarmProfile />
      </Layout>
    ),
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>
  </StrictMode>
);

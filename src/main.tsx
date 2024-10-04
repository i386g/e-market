import { createTheme, MantineProvider } from "@mantine/core";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";

import "@fontsource-variable/montserrat";
import "@fontsource/kaushan-script";

import "@mantine/core/styles.css";
import "./index.css";

const theme = createTheme({
  /** Your theme override here */
  primaryColor: "green",
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </StrictMode>
);

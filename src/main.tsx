import { createTheme, MantineProvider } from "@mantine/core";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";

import App from "./App.tsx";

import "@fontsource-variable/montserrat";
import "@fontsource/kaushan-script";

import "@mantine/core/styles.css";
import FarmProfile from "./FarmProfile.tsx";
import Footer from "./Footer.tsx";
import Header from "./Header.tsx";
import "./index.css";

const theme = createTheme({
  /** Your theme override here */
  primaryColor: "green",
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route
            path="/profile/green-valley-organics"
            element={<FarmProfile />}
          />
          <Route path="/profile/sunrise-acres" element={<FarmProfile />} />
          <Route path="/profile/wildflower-meadows" element={<FarmProfile />} />
        </Routes>
        <Footer />
      </HashRouter>
    </MantineProvider>
  </StrictMode>
);

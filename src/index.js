import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.css";

import TemperatureCard from "./TemperatureCard";
import ForecastCard from "./ForecastCard";
import Footer from "./Footer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <TemperatureCard />
    <ForecastCard />
    <Footer />
  </StrictMode>
);

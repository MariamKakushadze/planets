import { Route, Routes, Navigate } from "react-router-dom";
import PlanetPage from "./pages/PlanetPage";
import { React } from "react";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/mercury" />} />
      <Route path="/:name" element={<PlanetPage />} />
    </Routes>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";

import Menu from "./components/menu";
import PlanetPage from "./pages/PlanetPage";

function App() {
  return (
    <Routes>
      <Route path="/:name" element={<PlanetPage />} />

      <Route path="/Menu" element={<Menu />} />
    </Routes>
  );
}

export default App;

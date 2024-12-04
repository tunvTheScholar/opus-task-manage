import { Route, Routes } from "react-router";
import HomePage from "./modules/homepage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;

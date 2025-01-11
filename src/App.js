import { Route, Routes } from "react-router-dom";
import "./App.css";
import CarearPlaning from "./pages/CarearPlaning/CarearPlaning";

function App() {
  return (
    <div className="App flex w-[100vw] h-lvh flex-col items-center">
      <Routes>
        {/* тут ваші пейджі */}
        <Route path={`/`} element={<></>} />
        <Route path={`/:user/carear-planing`} element={<CarearPlaning />} />
      </Routes>
    </div>
  );
}

export default App;

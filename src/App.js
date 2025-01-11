import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import CarearPlaning from "./pages/CarearPlaning/CarearPlaning";
import Meetup from "./pages/Meetup/Meetup";

function App() {
  return (
    <div className="App flex w-[100vw] h-lvh flex-col items-center">
      <Link to={`/:user/meetup`}>meetup</Link>
      <Routes>
        {/* тут ваші пейджі */}
        <Route path={`/`} element={<></>} />
        <Route path={`/:user/carear-planing`} element={<CarearPlaning />} />
        <Route path={`/:user/meetup`} element={<Meetup />} />
      </Routes>
    </div>
  );
}

export default App;

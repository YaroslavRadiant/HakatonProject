import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import CarearPlaning from "./pages/CarearPlaning/CarearPlaning";
import UserList from "./pages/UserList/UserList";
import Meetup from "./pages/Meetup/Meetup";

function App() {
  return (
    <div className="App flex w-[100vw] h-lvh flex-col items-center">
      <Link to={`/meetup`}>meetup</Link>
      <Routes>
        {/* тут ваші пейджі */}
        <Route path={`/`} element={<></>} />
        <Route path={`/:user/carear-planing`} element={<CarearPlaning />} />
        <Route path={`/meetup`} element={<Meetup />} />
        <Route path={`/user-list`} element={<UserList />} />
      </Routes>
    </div>
  );
}

export default App;

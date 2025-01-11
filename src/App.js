import { Route, Routes } from "react-router-dom";
import "./App.css";
import CarearPlaning from "./pages/CarearPlaning/CarearPlaning";
import UserList from "./pages/UserList/UserList";
import Root from "./components/Root/Root";

function App() {
  return (
    <div className="App flex w-[100vw] h-lvh flex-col items-center">
      <Routes>
        <Route path={`/`} element={<Root />}>
          <Route path={`/:user/carear-planing`} element={<CarearPlaning />} />
          <Route path={`/user-list`} element={<UserList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App flex w-[100vw] h-lvh flex-col items-center">
      <Routes>
        {/* тут ваші пейджі */}
        <Route path={`/`} element={<></>} />
      </Routes>
    </div>
  );
}

export default App;

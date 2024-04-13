import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/add" Component={Add} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

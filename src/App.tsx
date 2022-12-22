import { Routes, Route } from "react-router-dom";
import PageHeader from "./Components/PageHeader/PageHeader";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
      <PageHeader />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;

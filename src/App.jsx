import { Route, Routes } from "react-router-dom";
import Cape from "./pages/Cape";
import Footer from "./pages/Footer";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Cape />} />
        <Route path="/" element={<Footer />} />
      </Routes>{" "}
      <Footer />
    </div>
  );
}

export default App;

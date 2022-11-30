import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./component/Navbar";
import { Home } from "./component/Home";
import { About } from "./component/About";
import { Officer } from "./component/Officer";
import { Join } from "./component/Join";
import { Act } from "./component/Act";
import { Acta } from "./component/act/Acta";
import { Actb } from "./component/act/Actb";

export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/officer" exact element={<Officer />} />
          <Route path="/join" exact element={<Join />} />
          <Route path="/act" exact element={<Act />} />
          <Route path="/act/1" exact element={<Acta />} />
          <Route path="/act/2" exact element={<Actb />} />
        </Routes>
      </div>
    </div>
  );
}

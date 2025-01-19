import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import TeamPage from "./pages/Team";
import Workshops from "./pages/Workshops";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Alumni from "./pages/Alumni";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/events" element={<Events />}></Route>
          <Route path="/Teams" element={<TeamPage />}></Route>
          <Route path="/Workshops" element={<Workshops />}></Route>
          <Route path="/Alumni" element={<Alumni />}></Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

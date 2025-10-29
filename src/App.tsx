import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomeUI from './pages/home/HomeUI';
import ProjectsUI from './pages/projects/ui/ProjectsUI';
import GamesUI from './pages/games/ui/GamesUI';
import JezzBallUI from './pages/games/jezzball/ui/JezzBallUI';
import AboutUI from './pages/about/ui/AboutUI';
import ContactUI from './pages/contact/ui/ContactUI';
import CWUParkingApplicationUI from './pages/projects/cwuparkingapplication/CWUParkingApplicationUI';
import FunctionLRLUI from './pages/projects/functionlrl/FunctionLRLUI';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomeUI />} />
      <Route path="/projects" element={<ProjectsUI />} />
      <Route path="/cwu-parking-application" element={<Navigate to="/projects/cwu-parking-application" replace />} />
      <Route path="/projects/cwu-parking-application" element={<CWUParkingApplicationUI />} />
      <Route path="/function-lrl" element={<Navigate to="/projects/function-lrl" replace />} />
      <Route path="/projects/function-lrl" element={<FunctionLRLUI />} />
      <Route path="/games" element={<GamesUI />} />
      <Route path="/games/jezzball" element={<JezzBallUI />} />
      <Route path="/about" element={<AboutUI />} />
      <Route path="/contact" element={<ContactUI />} />
    </Routes>
  </Router>
);

export default App;
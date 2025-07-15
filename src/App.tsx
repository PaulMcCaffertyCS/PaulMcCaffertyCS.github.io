import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomeUI from './pages/home/HomeUI';
import ProjectsUI from './pages/projects/ui/ProjectsUI';
import GamesUI from './pages/games/ui/GamesUI';
import JezzBallUI from './pages/games/jezzball/ui/JezzBallUI';
import AboutUI from './pages/about/AboutUI';
import ContactUI from './pages/contact/ContactUI';
import Navbar from './components/Navbar';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomeUI />} />
      <Route path="/projects" element={<ProjectsUI />} />
      <Route path="/games" element={<GamesUI />} />
      <Route path="/games/jezzball" element={<JezzBallUI />} />
      <Route path="/about" element={<AboutUI />} />
      <Route path="/contact" element={<ContactUI />} />
    </Routes>
  </Router>
);

export default App;
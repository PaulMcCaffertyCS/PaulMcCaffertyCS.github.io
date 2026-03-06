import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import ScrollToTop from './components/BrowserRouter';
import HomeUI from './pages/home/HomeUI';
import ProjectsUI from './pages/projects/ui/ProjectsUI';
import GamesUI from './pages/games/ui/GamesUI';
import JezzBallUI from './pages/games/jezzball/ui/JezzBallUI';
import AboutUI from './pages/about/ui/AboutUI';
import ContactUI from './pages/contact/ui/ContactUI';
import CWUParkingApplicationUI from './pages/projects/cwuparkingapplication/CWUParkingApplicationUI';
import FunctionLRLUI from './pages/projects/functionlrl/FunctionLRLUI';
import OneThingUI from './pages/projects/onething/OneThing';
import MarkdownPage from './components/markdown/MarkdownPage';

const App = () => (
  <Router>
    <ScrollToTop />
    <Navbar />
    <Routes>
      <Route path="/" element={<HomeUI />} />
      <Route path="/projects" element={<ProjectsUI />} />
      <Route path="/cwu-parking-application" element={<Navigate to="/projects/cwu-parking-application" replace />} />
      <Route path="/projects/cwu-parking-application" element={<CWUParkingApplicationUI />} />
      <Route path="/function-lrl" element={<Navigate to="/projects/function-lrl" replace />} />
      <Route path="/projects/function-lrl" element={<FunctionLRLUI />} />
      <Route path="/onething" element={<Navigate to="/projects/onething" replace />} />
      <Route path="/projects/onething" element={<OneThingUI />} />
      <Route path="/projects/onething/policy" element={<MarkdownPage markdown={"policy"} />} />
      <Route path="/projects/onething/terms" element={<MarkdownPage markdown={"terms"} />} />
      <Route path="/games" element={<GamesUI />} />
      <Route path="/games/jezzball" element={<JezzBallUI />} />
      <Route path="/about" element={<AboutUI />} />
      <Route path="/contact" element={<ContactUI />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
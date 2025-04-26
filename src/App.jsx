import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Construct from './pages/TopHeroes/EventDays/Construct';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex items-center">
        <Routes>
          <Route path="/" element={<h1 className="text-4xl font-bold">Bienvenue sur Mzelle Lilas</h1>} />
          <Route path="/fr/construct" element={<Construct lang="fr" />} />
          <Route path="/en/construct" element={<Construct lang="en" />} />
          <Route path="/de/construct" element={<Construct lang="de" />} />
        </Routes>
      </div>
    </Router>
  );
}
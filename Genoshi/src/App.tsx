import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import Graph from './pages/Graph';
import Pricing from './pages/Pricing';
import Header from './components/Header';

const App = () => {
  return (
    <BrowserRouter>

    <div>
      <Header/>
    </div>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/graph:graphId" element={<Graph />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

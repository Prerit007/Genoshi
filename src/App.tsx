import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import GraphDetails from './components/Graph/GraphDetails';
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
        <Route path="/graphs/:graphId" element={<GraphDetails />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

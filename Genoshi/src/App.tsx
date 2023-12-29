import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import CreateGraph from './pages/CreateGraph';
import GraphDetails from './pages/GraphDetails';
import AccountSettings from './pages/AccountSettings';
import Pricing from './pages/Pricing';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/create-graph" element={<CreateGraph />} />
        <Route path="/graph" element={<GraphDetails />} />
        <Route path="/account-settings" element={<AccountSettings />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

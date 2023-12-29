import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Profile, CreateGraph, GraphDetails, AccountSettings, Pricing} from "./pages"

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <h1 className="text-red-400">Header</h1>
    </div>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/create-graph" element={<CreateGraph />} />
        <Route path="/graph/:graphId" element={<GraphDetails />} />
        <Route path="/account-settings" element={<AccountSettings />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

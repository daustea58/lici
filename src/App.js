import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { MusicProvider } from './MusicContext';
import Layout from './components/Layout';
import LockScreen from './pages/LockScreen';
import MusicSelector from './pages/MusicSelector';
import Timeline from './pages/Timeline';
import MiniGame from './pages/MiniGame';
import Wishes from './pages/Wishes';
import Closing from './pages/Closing';
import './App.css';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('lixie_authenticated') === 'true';
  return isAuthenticated ? children : <Navigate to="/" replace />;
};

function App() {
  return (
    <MusicProvider>
      <Router>
        <Routes>
          {/* Lock screen - no layout */}
          <Route path="/" element={<LockScreen />} />
          
          {/* Protected routes with layout */}
          <Route path="/music" element={
            <ProtectedRoute>
              <Layout><MusicSelector /></Layout>
            </ProtectedRoute>
          } />
          <Route path="/timeline" element={
            <ProtectedRoute>
              <Layout><Timeline /></Layout>
            </ProtectedRoute>
          } />
          <Route path="/game" element={
            <ProtectedRoute>
              <Layout><MiniGame /></Layout>
            </ProtectedRoute>
          } />
          <Route path="/wishes" element={
            <ProtectedRoute>
              <Layout><Wishes /></Layout>
            </ProtectedRoute>
          } />
          <Route path="/closing" element={
            <ProtectedRoute>
              <Layout><Closing /></Layout>
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </MusicProvider>
  );
}

export default App;

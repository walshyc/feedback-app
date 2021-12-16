import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import FeedbackData from '../src/data/feedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <div className="bg-green-700 min-h-screen font-baloo">
          <Header></Header>
          <div className="max-w-2xl mx-4 sm:mx-auto flex flex-col">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <>
                    <FeedbackForm></FeedbackForm>
                    <FeedbackStats></FeedbackStats>
                    <FeedbackList></FeedbackList>
                    <AboutIconLink></AboutIconLink>
                  </>
                }
              ></Route>

              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;

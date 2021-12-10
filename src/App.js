import { useState } from 'react';
import Header from './components/Header';
import FeedbackData from '../src/data/feedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete'))
      setFeedback(feedback.filter((item) => item.id !== id));
  };
  return (
    <div className="bg-green-700 min-h-screen font-baloo">
      <Header></Header>
      <div className="max-w-2xl mx-4 sm:mx-auto flex flex-col">
        <FeedbackStats feedback={feedback}></FeedbackStats>
        <FeedbackList
          feedback={feedback}
          handleDelete={deleteFeedback}
        ></FeedbackList>
      </div>
    </div>
  );
}

export default App;

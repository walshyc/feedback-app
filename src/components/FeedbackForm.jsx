import { useContext, useState, useEffect } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import RatingSelect from './RatingSelect';
import Button from './shared/Button';
import Card from './shared/Card';

const FeedbackForm = () => {
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [message, setMessage] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 9) {
      setBtnDisabled(true);
      setMessage('Text must be at least 10 characters');
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 9) {
      const newFeedback = {
        text,
        rating,
      };
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
      setText('');
      setBtnDisabled(true);
    }
  };
  return (
    <Card>
      <div className="flex flex-col">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <h2 className="font-bold text-3xl text-center">
            How would you rate your service with us?
          </h2>
          <RatingSelect select={(rating) => setRating(rating)}></RatingSelect>
          <div className="flex flex-col gap-8 sm:flex-row justify-between border p-3">
            <input
              value={text}
              onChange={handleTextChange}
              type="text"
              placeholder="Write a review"
              className="bg-transparent outline-0 w-full"
            />
            <Button version="primary" type="submit" isDisabled={btnDisabled}>
              Send
            </Button>
          </div>
        </form>

        {message && <div className="text-black text-sm mt-2">{message}</div>}
      </div>
    </Card>
  );
};

export default FeedbackForm;

import FeedbackItem from './FeedbackItem';

const FeedbackList = ({ feedback, handleDelete }) => {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>;
  }
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
      {feedback.map((fb) => (
        <FeedbackItem
          key={fb.id}
          item={fb}
          handleDelete={handleDelete}
        ></FeedbackItem>
      ))}
    </div>
  );
};

export default FeedbackList;

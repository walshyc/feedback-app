import FeedbackItem from './FeedbackItem';

const FeedbackList = ({ feedback, handleDelete }) => {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>;
  }
  return (
    <>
      {feedback.map((fb) => (
        <FeedbackItem
          key={fb.id}
          item={fb}
          handleDelete={handleDelete}
        ></FeedbackItem>
      ))}
    </>
  );
};

export default FeedbackList;

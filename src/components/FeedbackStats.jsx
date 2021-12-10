const FeedbackStats = ({ feedback }) => {
  // calculate ratings average
  let average =
    feedback.reduce((acc, current) => {
      return acc + current.rating;
    }, 0) / feedback.length;
  average = average.toFixed(1).replace(/[.,]0$/, ''); // remove trailling zeros
  return (
    <div className="flex justify-between mt-4 mb-2 font-bold text-yellow-200 text-lg">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? '0' : average}</h4>
    </div>
  );
};

export default FeedbackStats;

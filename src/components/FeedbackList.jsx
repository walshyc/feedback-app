import { motion, AnimatePresence } from 'framer-motion';
import FeedbackItem from './FeedbackItem';

const FeedbackList = ({ feedback, handleDelete }) => {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>;
  }
  //   return (
  //     <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
  //       {feedback.map((fb) => (
  //         <FeedbackItem
  //           key={fb.id}
  //           item={fb}
  //           handleDelete={handleDelete}
  //         ></FeedbackItem>
  //       ))}
  //     </div>
  //   );
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <AnimatePresence>
        {feedback.map((fb) => (
          <motion.div
            key={fb.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem item={fb} handleDelete={handleDelete}></FeedbackItem>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FeedbackList;

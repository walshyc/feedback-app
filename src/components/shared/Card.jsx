const Card = ({ children, reverse = false }) => {
  return (
    <div
      className={
        reverse
          ? 'bg-gray-900 text-gray-50 rounded-xl py-8 px-10 relative flex items-center justify-center my-4'
          : 'bg-gray-50 rounded-xl py-8 px-10 relative flex items-center justify-center my-4'
      }
    >
      {children}
    </div>
  );
};

export default Card;

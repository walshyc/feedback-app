const Button = ({ children, version, type, isDisabled }) => {
  return (
    <button
      type={type}
      disabled={isDisabled}
      className={
        version === 'primary'
          ? 'px-6 py-2 bg-green-700 rounded-xl text-white font-semibold hover:bg-green-600 disabled:bg-gray-300 disabled:text-gray-800 disabled:font-light'
          : 'px-6 py-2 bg-yellow-200 rounded-xl text-white'
      }
    >
      {children}
    </button>
  );
};

export default Button;

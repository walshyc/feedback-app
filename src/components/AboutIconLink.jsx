import { Link } from 'react-router-dom';

const AboutIconLink = () => {
  return (
    <Link className="relative mt-10 mb-4" to="/about">
      <div className="absolute bottom-0 right-0 flex flex-row text-yellow-300 font-semibold uppercase">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-yellow-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="pl-1">About</p>
      </div>
    </Link>
  );
};

export default AboutIconLink;

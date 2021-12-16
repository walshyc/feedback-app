import { Link } from 'react-router-dom';
import Button from '../components/shared/Button';
const AboutPage = () => {
  return (
    <div className="bg-gray-50 rounded-xl py-8 px-10 relative flex flex-col justify-center my-4">
      <h1 className="text-3xl font-medium py-2">About this project</h1>
      <p className="text-lg">
        This is a React app to leave feedback for a product or service
      </p>
      <Link className="pt-4 ml-auto" to="/">
        <Button version="primary" type="btn">
          Go Home
        </Button>
      </Link>
    </div>
  );
};

export default AboutPage;

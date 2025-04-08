import { FaExclamationTriangle } from 'react-icons/fa';

const ErrorMessage = ({ message }) => {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative flex items-center my-4">
      <FaExclamationTriangle className="mr-2 flex-shrink-0" />
      <span>{message}</span>
    </div>
  );
};

export default ErrorMessage;
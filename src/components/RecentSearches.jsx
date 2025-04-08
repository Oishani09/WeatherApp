import { FaHistory } from 'react-icons/fa';

const RecentSearches = ({ searches, onSelect }) => {
  if (!searches || searches.length === 0) return null;

  return (
    <div className="mt-4 mb-6">
      <h3 className="text-sm font-medium text-gray-500 mb-2 flex items-center">
        <FaHistory className="mr-1" /> Recent Searches
      </h3>
      <div className="flex flex-wrap gap-2">
        {searches.map((search, index) => (
          <button
            key={index}
            onClick={() => onSelect(search)}
            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-full text-sm transition-colors"
          >
            {search}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RecentSearches;
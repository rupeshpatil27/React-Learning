import { memo } from 'react';

const SearchInput = ({ onChange }) => {
    console.log("SearchInput re-rendered");

    return (
        <input
            type="text"
            onChange={(e) => onChange(e.target.value)}
            placeholder="Search users..."
            className="px-4 py-2 w-64 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    );
};

export default memo(SearchInput);

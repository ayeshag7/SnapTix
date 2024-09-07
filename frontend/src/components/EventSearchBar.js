import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { AiOutlineSearch, AiOutlineCalendar, AiOutlineEnvironment } from 'react-icons/ai';
import 'react-datepicker/dist/react-datepicker.css';

const EventSearchBar = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [location, setLocation] = useState('');
  const [query, setQuery] = useState('');

  return (
    <div className="max-w-5xl mx-auto p-4 bg-white shadow-lg rounded-md flex justify-between items-center space-x-4 mt-4 my-8 max-md:hidden">
      {/* Location Input */}
      <div className="flex items-center space-x-2 border border-gray-300 p-2 rounded-md w-1/4">
        <AiOutlineEnvironment className="text-[#fe542b]" size={24} />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="City or Zip Code"
          className="w-full outline-none text-sm"
        />
      </div>

      {/* Date Range Picker */}
      <div className="flex items-center space-x-2 border border-gray-300 p-2 rounded-md w-1/4">
        <AiOutlineCalendar className="text-[#fe542b]" size={24} />
        <div className="flex space-x-2">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="Start Date"
            className="w-full outline-none text-sm"
            dateFormat="MM/dd/yyyy"
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            placeholderText="End Date"
            className="w-full outline-none text-sm"
            dateFormat="MM/dd/yyyy"
          />
        </div>
      </div>

      {/* Search Query Input */}
      <div className="flex items-center space-x-2 border border-gray-300 p-2 rounded-md w-1/3">
        <AiOutlineSearch className="text-[#fe542b]" size={24} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by Artist, Event or Venue"
          className="w-full outline-none text-sm"
        />
      </div>

      {/* Search Button */}
      <button className="bg-[#fe542b] text-white px-6 py-2 rounded-md">
        Search
      </button>
    </div>
  );
};

export default EventSearchBar;

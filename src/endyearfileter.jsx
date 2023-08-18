import React, { useState } from 'react';

const EndYearFilter = ({ onFilterChange }) => {
  const [selectedEndYear, setSelectedEndYear] = useState('');

  const handleEndYearChange = (event) => {
    const value = event.target.value;
    setSelectedEndYear(value);
    onFilterChange('endYear', value);
  };

  return (
    <div>
      <label>End Year:</label>
      <input
        type="text"
        value={selectedEndYear}
        onChange={handleEndYearChange}
      />
    </div>
  );
};

export default EndYearFilter;

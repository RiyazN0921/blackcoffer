import React, { useState, useEffect } from 'react';
import IntensityChart from './intensitychar';
import EndYearFilter from './endyearfileter';
import { fetchData } from './apiservices';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    fetchFilteredData();
  }, [filters]);

  const fetchFilteredData = async () => {
    const filteredData = await fetchData(filters);
    setData(filteredData);
  };

  const handleFilterChange = (filterName, value) => {
    setFilters({ ...filters, [filterName]: value });
  };

  return (
    <div>
      <h1>Data Visualization Dashboard</h1>
      <EndYearFilter onFilterChange={handleFilterChange} />
      <IntensityChart data={data} />
    </div>
  );
};

export default Dashboard;

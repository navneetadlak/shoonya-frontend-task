// src/components/Filter.js
import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ onFilterChange, onSearchChange }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between mb-4">
      <input
        type="text"
        placeholder="Search by title..."
        className="border p-2 rounded mb-2 md:mb-0"
        onChange={onSearchChange}
      />
      <select
        className="border p-2 rounded mb-2 md:mb-0"
        onChange={(e) => onFilterChange('type', e.target.value)}
      >
        <option value="">All Types</option>
        <option value="Yoga">Yoga</option>
        <option value="Meditation">Meditation</option>
        <option value="Detox">Detox</option>
      </select>
      <input
        type="date"
        className="border p-2 rounded"
        onChange={(e) => onFilterChange('date', e.target.value)}
      />
    </div>
  );
};

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default Filter;

import React, { useState } from 'react';
import './DisplayOptions.css';
import { FaChevronDown } from 'react-icons/fa';
import { MdOutlineTune } from 'react-icons/md';

function DisplayOptions({ grouping, sorting, onGroupingChange, onSortingChange }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="display-options">
      <button className="display-button" onClick={() => setIsOpen(!isOpen)}>
        <MdOutlineTune className="icon" /> Display <FaChevronDown />
      </button>
      {isOpen && (
        <div className="options-dropdown">
          <div className="option">
            <span>Grouping</span>
            <select value={grouping} onChange={(e) => onGroupingChange(e.target.value)}>
              <option value="status">Status</option>
              <option value="userId">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="option">
            <span>Ordering</span>
            <select value={sorting} onChange={(e) => onSortingChange(e.target.value)}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}

export default DisplayOptions;

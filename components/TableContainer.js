import React, { useState } from 'react';
import styles from './TableContainer.module.css';

const TableContainer = () => {
  const [showTable, setShowTable] = useState(false);

  const handleDropdownChange = (e) => {
    setShowTable(e.target.value === 'show');
  };

  return (
    <div>
      <div className={styles.resultContainer}>
        <span>Result</span>
        <select className="form-select" onChange={handleDropdownChange}>
          <option value="hide">-- Select --</option>
          <option value="show">Show Table</option>
        </select>
      </div>
      {showTable && (
        <div className={styles.tableContainer}>
          <table className="table table-dark table-bordered">
            <thead>
              <tr>
                {Array(7).fill('Header').map((header, index) => (
                  <th key={index}>{header} {index + 1}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array(8).fill(null).map((_, rowIndex) => (
                <tr key={rowIndex}>
                  {Array(7).fill('Data').map((data, colIndex) => (
                    <td key={colIndex}>{data}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TableContainer;

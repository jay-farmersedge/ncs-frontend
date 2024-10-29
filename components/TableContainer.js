import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button, Collapse } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const TableContainer = ({ inputNumbers }) => {
  const [expandedRows, setExpandedRows] = useState({});
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (inputNumbers.length > 0) {
      fetchData(inputNumbers);
    }
  }, [inputNumbers]);

  const fetchData = async (numbers) => {
    setLoading(true);
    try {
      const response = await axios.post(
        'http://ncsbackend.nomopix.in/run-query/search-query/',
        { input_numbers: numbers }
      );
      setTableData(response.data.results);
    } catch (error) {
      console.error("Error fetching data", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleRow = (inputNumber) => {
    setExpandedRows((prev) => ({
      ...prev,
      [inputNumber]: !prev[inputNumber],
    }));
  };

  return (
    <div className="container mt-4">
      {loading && <p>Loading data...</p>}
      {tableData.map((data, idx) => (
        <div key={data.input_number} className="mb-4">
          <Button
            variant="link"
            onClick={() => toggleRow(data.input_number)}
            aria-controls={`collapse-${data.input_number}`}
            aria-expanded={expandedRows[data.input_number] || false}
          >
            {expandedRows[data.input_number] ? 'Hide' : 'Show'} Data for {data.input_number}
          </Button>

          <Collapse in={expandedRows[data.input_number]}>
            <div id={`collapse-${data.input_number}`}>
              <Table striped bordered hover responsive className="mt-3">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Major Code</th>
                    <th>Minor Code</th>
                    <th>Effective Date</th>
                    <th>Deletion Date</th>
                    <th>Policy Indicator</th>
                  </tr>
                </thead>
                <tbody>
                  {data.results.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      <td>{rowIndex + 1}</td>
                      <td>{row[0]}</td>
                      <td>{row[1]}</td>
                      <td>{row[2]}</td>
                      <td>{row[3]}</td>
                      <td>{row[4]}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Collapse>
        </div>
      ))}
    </div>
  );
};

export default TableContainer;

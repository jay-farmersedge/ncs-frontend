import Navbar from "../components/Navbar";
import TextAreaWithInstructions from "../components/TextAreaWithInstructions";
import TableContainer from "../components/TableContainer";
import AdSpace from "../components/AdSpace";
import Footer from "../components/Footer";
import Head from "next/head";
import React, { useState } from 'react';

export default function Home() {
  const [inputNumbers, setInputNumbers] = useState([]);

  const handleInputSubmit = (numbers) => {
    const parsedNumbers = numbers
      .split(',')
      .map(num => num.trim())
      .filter(num => num);
    setInputNumbers(parsedNumbers);
  };
  return (
    <div>
      <Head>
        <title>NCS Nomopix Automation</title>
        <meta name="description" content="Description of my page" />
      </Head>
      <Navbar />
      <div className="container-fluid pt-5 mt-5">
        <div className="row justify-content-center">
          <div className="col-md-2">
            <AdSpace />
          </div>
          <div className="col-md-8 d-flex flex-column align-items-center justify-content-center custom-content-container">
          <TextAreaWithInstructions onSubmit={handleInputSubmit} className="mb-4" />
          <TableContainer inputNumbers={inputNumbers} />
          </div>
          <div className="col-md-2">
            <AdSpace />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import axios from 'axios';

import Layout from 'components/Layout';
import MapIndex from '../components/Map';
import Sidebar from '../components/Sidebar';

import useInterval from '../hooks/useInterval';

const IndexPage = () => {
  const [bins, setBins] = useState([]);
  const [activeBin, setActiveBin] = useState(0);
  const [error, setError] = useState(false);

  const updateBins = () => {
    axios
      .get('http://localhost:5000/bins')
      .then((res) => {
        let bins = res.data.bins.filter(
          (bin) => !(bin.lat === undefined || bin.lng === undefined)
        );
        setBins(bins);
      })
      .catch((err) => setError(true));
  };

  // Update Bins every 10 seconds
  useInterval(() => {
    updateBins();
  }, 10000);

  useEffect(() => {
    updateBins();
  }, []);

  return (
    <Layout pageName="home">
      <Helmet>
        <title>Home Page</title>
      </Helmet>

      <div className="index">
        <MapIndex bins={bins} />
        <Sidebar bins={bins} />
      </div>
    </Layout>
  );
};

export default IndexPage;

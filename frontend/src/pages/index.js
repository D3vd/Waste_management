import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import axios from 'axios';

import Layout from 'components/Layout';
import MapIndex from '../components/Map';

const IndexPage = () => {
  const [bins, setBins] = useState([]);
  const [activeBin, setActiveBin] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:5000/bins')
      .then((res) => {
        setBins(res.data.bins);
      })
      .catch((err) => setError(true));
  }, []);

  return (
    <Layout pageName="home">
      <Helmet>
        <title>Home Page</title>
      </Helmet>

      <MapIndex bins={bins} />
    </Layout>
  );
};

export default IndexPage;

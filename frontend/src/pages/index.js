import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'components/Layout';
import MapIndex from '../components/Map';

const IndexPage = () => {
  return (
    <Layout pageName="home">
      <Helmet>
        <title>Home Page</title>
      </Helmet>

      <MapIndex />
    </Layout>
  );
};

export default IndexPage;

import React, { Fragment } from 'react';
import Search from '../brewery/Search';
import Breweries from '../brewery/Breweries';

const Home = () => (
  <Fragment>
    <Search />
    <Breweries />
  </Fragment>
);

export default Home;

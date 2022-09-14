import React from 'react'
import Main from '../components/Main';
import Row from '../components/Row';
import requests from '../Requests';

const Home = () => {
  return (
    <div>
      <Main />
      <Row title="UpComing" fetchURL={requests.requestUpcoming}/>
      <Row title="Trending" fetchURL={requests.requestTrending}/>
      <Row title="Popular" fetchURL={requests.requestPopular}/>
      <Row title="TopRated" fetchURL={requests.requestTopRated}/>
    </div>
  )
}

export default Home;
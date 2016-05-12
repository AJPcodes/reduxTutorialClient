import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Voting';

const pair = ['A Wild Sheep Chase', 'Wind, Pinball'];

ReactDOM.render(
  <Voting pair={pair} />,
  document.getElementById('app')
);

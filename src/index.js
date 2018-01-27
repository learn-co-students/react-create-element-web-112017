// Code goes here
import React from 'react';
import ReactDOM from 'react-dom';

const title = React.createElement('h1', {}, 'My First React Code');
const paragraph = React.createElement('p', {}, 'Writing some more HTML. Cool stuff!')
const container = React.createElement('div', {}, [title, paragraph])

ReactDOM.render(
  title,
  document.getElementById('global')
);

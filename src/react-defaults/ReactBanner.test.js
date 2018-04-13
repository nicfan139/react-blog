import React from 'react';
import ReactDOM from 'react-dom';
import ReactBanner from './ReactBanner';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReactBanner />, div);
  ReactDOM.unmountComponentAtNode(div);
});

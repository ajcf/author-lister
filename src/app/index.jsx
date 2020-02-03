import React from 'react';
import ReactDOM from 'react-dom';
import AuthorLister from 'components/AuthorLister';

const title = 'AuthorLister';

ReactDOM.render(
  <AuthorLister />,
  document.getElementById('app')
);

module.hot.accept();

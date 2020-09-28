import React from 'react';
import './PageError.scss';
export default function PageError() {
  return (
    <div className="container notpage">
      <h1>Not found <span>:(</span></h1>
      <p>Sorry, but the page you were trying to view does not exist.</p>
      <p>It looks like this was the result of either:</p>
      <ul>
        <li>a mistyped address</li>
        <li>an out-of-date link</li>
      </ul>
    </div>
  );
}
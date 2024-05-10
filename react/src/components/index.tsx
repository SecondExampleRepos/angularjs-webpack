import React from 'react';
import ReactDOM from 'react-dom';

const App: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the React App</h1>
      <p>This is a simple React component converted from an AngularJS template.</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
import React from 'react';

const App: React.FC = () => {
  const appUrl = "http://example.com"; // Replace with actual URL

  return (
    <>
      <main>
        <h1 className="title">Hello from Angular !</h1>
        <img src="/img/logo.png" alt="Logo" />
      </main>
      <footer>
        <a href={appUrl}>Webpack Angular Starter</a>
      </footer>
    </>
  );
};

export default App;
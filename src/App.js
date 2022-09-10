import * as React from 'react';

const title = 'Hacker-News';

const welcome = {
  greeting: 'Welcome to Hacker-News',
  description: 'Here you can read the most exciting news on hacking, cyber security and the world of Computers.'
};

function searchPage(search) {
  return search;
}


function App() {

  return (
    <div className="App">
      <h1>{title}</h1>
      <h4>{welcome.title} {welcome.description}</h4>
      <label htmlFor="search">Search:  </label>
      <input id="search" type="text"></input>
      <button>{searchPage('Find')}</button>
    </div>
  );
}

export default App;

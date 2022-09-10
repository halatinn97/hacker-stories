import * as React from 'react';

const title = 'Hacker-News';

const welcome = {
  greeting: 'Welcome to Hacker-News',
  description: 'Here you can read the most exciting news on hacking, cyber security and the world of Computers.'
};

function searchPage(search) {
  return search;
}

const list = [
  {
    listTitle: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    listTitle: 'Redux',
    url: 'https://redux.js/org',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1
  }
];

function App() {

  return (
    <div className="App">
      <h1>{title}</h1>
      <h4>{welcome.title} {welcome.description}</h4>
      <label htmlFor="search">Search:  </label>
      <input id="search" type="text"></input>
      <button>{searchPage('Find')}</button>

      <ul>
        <h3>Article Summary</h3>
        {list.map(function (item) {
          return (
            <>
              <li key={item.objectID}>
                <span>
                  <a href={item.url}>{item.listTitle}</a>
                </span>
                <br></br>
                <span>Author: {item.author}</span>
                <br></br>
                <span># of Comments: {item.num_comments}</span>
                <br></br>
                <span>Rating: {item.points}</span>
              </li>
            </>
          );
        })}
      </ul>

    </div>
  );
}

export default App;

import React from 'react';

// we want to map over the moives in the state
// render each movie in its own list item dynamically


var MovieLists = (props) => (
  <ul>
    <li>{props.movies[0]}</li>
    <li>{props.movies[1]}</li>
    <li>{props.movies[2]}</li>
  </ul>
);


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Movies: []
    }
  }



  render() {
    return (
      <div>
        <h2>My Movie List</h2>
        <form method = "get" id = "form">
          <input type = "text"/>
          <button type = "submit">Search</button>
      </form>
        <MovieLists movies={this.state.Movies}/>
      </div>
    )
  }
};
// upon clicking the button we want to add a new movie to the movies array


export default App;

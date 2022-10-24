import React, { Component } from 'react';
// import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';

// function App() {
  class App extends Component {
    render() {
  return (
      // <Router>
      //   <Route exact patch="/" render={() => <h1>Palette kai ramea</h1>} />
      //   <Route exact patch="/palette/:id" render={() => <Palette/>} />
      // </Router>


    <div>
      <Palette palette={generatePalette(seedColors[4])} />
    </div>
  );
}
}

export default App;

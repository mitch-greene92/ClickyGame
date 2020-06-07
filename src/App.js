import React, { Component } from "react";
import "./App.css";
import Header from "./Header.js";
import Grid from "./Grid.js";
import Footer from "./Footer.js";
import dogs from "./dogs";

//shuffles array
function arrayShuffler(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

class App extends Component {
  state = {
    score: 0,
    dogs
  };

  scoreUpdate = (id, clicked) => {
    const dogsArray = this.state.dogs;

    if (!clicked) {
      this.setState({ dogs: dogsArray });
      dogsArray.forEach((dog) => {
        if (dog.key === id && dog.clicked === false) {
          dog.clicked = true;
          this.setState({ dogs: dogsArray, score: this.state.score + 1 });
        }
      });
    } else if (clicked) {
      dogsArray.forEach((dog) => {
        dog.clicked = false;
      });
      this.setState({ dogs: dogsArray, score: 0 });
    }
  };


  // renders data to page
  render() {
    const shuffledArray = arrayShuffler(this.state.dogs);
    return (
      <div className="App">
        <Header score={this.state.score} />
        <div className="grid">
          {shuffledArray.map((dog) => (
            <Grid
              name={dog.name}
              clicked={dog.clicked}
              imgUrl={dog.imgUrl}
              scoreUpdate={dog.scoreUpdate}
              key={dog.key}
              id={dog.key}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

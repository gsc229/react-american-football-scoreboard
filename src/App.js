//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  const homeTD = e => {
    setHomeScore(homeScore + 7);
  };
  const awayTD = e => {
    setAwayScore(awayScore + 7);
  };
  const homeFG = e => {
    setHomeScore(homeScore + 3);
  };
  const awayFG = e => {
    setAwayScore(awayScore + 3);
  };

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">
              <span>{homeScore}</span>
            </div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={homeTD} className="homeButtons__touchdown">
            Home Touchdown
          </button>
          <button onClick={homeFG} className="homeButtons__fieldGoal">
            Home Field Goal
          </button>
        </div>
        <div className="gameButtons"></div>
        <div className="awayButtons">
          <button onClick={awayTD} className="awayButtons__touchdown">
            Away Touchdown
          </button>
          <button onClick={awayFG} className="awayButtons__fieldGoal">
            Away Field Goal
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;

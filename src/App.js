//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  // Main App
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
  // for BottomRow.js
  const [quarter, setQuarter] = useState(1);
  const [down, setDown] = useState(1);
  const [toGo, setToGo] = useState(10);
  const [ballOn, setBallOn] = useState(50);
  const changeQuarter = e => {
    if (quarter < 4) {
      setQuarter(quarter + 1);
    } else setQuarter("OT");
  };
  const changeDown = e => {
    if (down < 4) {
      setDown(down + 1);
    } else setDown(down - 3);
  };
  const changeToGo = e => {
    if (toGo === 1) {
      setToGo(10);
    } else setToGo(toGo - 1);
  };
  const changeBallOn = e => {
    if (ballOn === 1) {
      setBallOn(50);
    } else setBallOn(ballOn - 1);
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
        <BottomRow quarter={quarter} down={down} toGo={toGo} ballOn={ballOn} />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <h2>Home Team</h2>
          <button onClick={homeTD} className="homeButtons__touchdown">
            Home Touchdown
          </button>
          <button onClick={homeFG} className="homeButtons__fieldGoal">
            Home Field Goal
          </button>
        </div>
        <div className="gameButtons">
          <h2>Game Controls</h2>
          <button onClick={changeDown} className="gameButtons__down">
            Down
          </button>
          <button onClick={changeToGo} className="gameButtons__toGo">
            To Go
          </button>
          <button onClick={changeBallOn} className="gameButtons__ballOn">
            Ball On
          </button>
          <button onClick={changeQuarter} className="gameButtons__quarter">
            Qaurter
          </button>
        </div>
        <div className="awayButtons">
          <h2>Away Team</h2>
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

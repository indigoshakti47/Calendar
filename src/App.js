import React, { Fragment } from "react";
import Calendar from "./components/Calendar.js";
import Reminders from "./components/Reminders";
import "./styles/Calendar.scss";
import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <div class="row">
        <div class="double-column">
          <div class="calendar-column">
            <header className="App-header">
              <p className="container">
                <Calendar />
              </p>
            </header>
          </div>
        </div>
        <div class="column">
          <div class="reminders-column">
            <Reminders />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

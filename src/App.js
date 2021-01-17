import React from "react";
import { connect } from 'react-redux';

import { setGlobalCity } from './redux/actions';
import Calendar from "./components/Calendar.js";
import Reminders from "./components/Reminders";
import City from "./components/City";
import "./styles/Calendar.scss";
import "./styles/App.scss";

function App({ setGlobalCity }) {

  return (
    <div className="App">
      <div className="row">
        <div className="double-column">
          <City onChange={setGlobalCity} />
          <div className="calendar-column">
            <header className="App-header">
              <section className="container">
                <Calendar />
              </section>
            </header>
          </div>
        </div>
        <div className="column">
          <div className="reminders-column">
            <Reminders />
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(null, { setGlobalCity })(App);

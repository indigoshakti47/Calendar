import React from 'react'
import Calendar from './components/Calendar.js'
import './styles/Calendar.scss';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <p className="container">
          <Calendar/>
        </p>
        
      </header>
    </div>
  );
}

export default App;

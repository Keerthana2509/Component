import React from 'react';
import './App.css';
import Base from './Components/Button';
import Counter from './Components/Counter';
import Popup from './Components/Popup';
import Cards from './Components/Cards';
import Link from './Components/Link';
import List from './Components/List';
import Menu from './Components/Menu';
import Modals from './Components/Modal';
import Progress from './Components/Progress';
import TextChange from './Components/TextChange';
import TwoWayBinding from './Components/TwoWayBinding';
import Header from './Components/Header';

function App() {
  let study = ["React Setup","React Modules","Hands-on","Events"];
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header brand="React Components"/>
      <Base variant="primary" text="Button"/>
      <Counter/>
      <Popup/>
      <Cards title="React" text="React has to import packages that has been exported in othe file to make it work 
                in the local file." footer="Learning React is interesting"/>
      <Link text="Learn React in 1 month.."/>
      <List study={study}/>
      <Menu name="Learn" study={study}/>
      <Modals title="Why React?" paragraph="React is a Framework.It creats a view for web pages." />
      <Progress variant="success" progress="30" />
      <TextChange/>
      <TwoWayBinding/>
    </div>
  );
}

export default App;

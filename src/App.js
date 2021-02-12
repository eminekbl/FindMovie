import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import NavBar from './components/NavBar'
import links from './data/links'

function App() {
  const routeMaps=links.map((item,index)=>(
    <Route
    key={index}
    exact={item.isExact}
    path={item.link}
    component={item.component}
    />
  ))
  return (
    <div className="App">
      <BrowserRouter>
      <Route>
        <NavBar links={links}/>
        </Route>
      <Switch>
      {routeMaps}
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

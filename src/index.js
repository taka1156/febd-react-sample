import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import routes from './routes/index';
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navigation />
        <header className="App-header">
          <Switch>
            {routes.map((route, i) => (
              <Route key={`route_${i}`} {...route} />
            ))}
          </Switch>
        </header>
      </BrowserRouter>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

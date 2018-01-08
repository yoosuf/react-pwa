import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import {BrowserRouter as Router,   Route,
  Link,
  Switch,
  Redirect,
  Match} from 'react-router-dom';
import HomePage from './HomePage';
import SearchPage from './SearchPage';
import { LocaleProvider } from 'antd';
import frFR from 'antd/lib/locale-provider/fr_FR';


const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);


ReactDOM.render(
  <LocaleProvider locale={frFR}>

<Router>
  <Provider store={store}>
    <div>
      <App />
      <Switch>
         <Route path="/" exact component={HomePage}/>
         <Route path="/about" component={SearchPage}/>
      </Switch>
    </div>
  </Provider>
</Router>
</LocaleProvider>,
  document.getElementById('root'));
registerServiceWorker();

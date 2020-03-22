import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from 'connected-react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import Layout from "./pages/Layout";
import createStore from "./store";

const app = document.getElementById('app');

const history = createBrowserHistory();
const store = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <Layout />
    </ConnectedRouter>
  </Provider>, app);
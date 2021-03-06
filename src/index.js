import React from 'react'
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './app/store'
const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

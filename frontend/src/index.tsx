import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import Routes from './routes/routes';
import store from './store/store';
import { Layout } from 'antd';

ReactDOM.render(

  <Provider store={store}>
    <Layout style={{ minHeight: '100vh' }}>
      <Routes />
    </Layout>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

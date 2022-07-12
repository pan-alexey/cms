import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import App from './App'

import store from './app/store'
// import { actionAddTodo } from './app/store/todoList/todoSlice';

import 'antd/dist/antd.min.css';
import './index.css'


(async () => {
  // auth step
  // console.log('start')
  // await store.dispatch(actionAddTodo())
  // console.log('end')

  // render react
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
  <Provider store={store}>
    <App />
  </Provider>
  );
})()


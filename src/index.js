
 import React, { Component } from 'react';
 import App from './navigation';
 import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
 import { Provider } from 'react-redux';
 import thunkMiddleware from 'redux-thunk';
 import { createLogger } from 'redux-logger';
 import reducer from './modules/rootReducer';

 const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__});
 function configureStore(initialState){
   const enhancer = compose(
     applyMiddleware(
       thunkMiddleware,
       loggerMiddleware
     ),
   );
   return createStore(reducer, initialState, enhancer);
 }

 const store = configureStore({});

 export default AppContainer = () => (
   <Provider store = {store}>
     <App/>
   </Provider>
 );

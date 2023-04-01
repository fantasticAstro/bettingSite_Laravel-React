import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import Main from './src/Main';
import * as serviceWorker from './serviceWorker';
import reducer from './store/reducer';

import { PersistGate } from 'redux-persist/integration/react' ;
import {persistReducer, persistStore} from 'redux-persist' ;
import storage from 'redux-persist/lib/storage' ;

const persistConfig = {
    key: 'root',
    storage,
  }
   
const persistedReducer = persistReducer(persistConfig, reducer) ;
const store = createStore(
    persistedReducer
);
let persistor = persistStore(store) ;

const app = (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <Main />
            </BrowserRouter>
        </PersistGate>
        
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

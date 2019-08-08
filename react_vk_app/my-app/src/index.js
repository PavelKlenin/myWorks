import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route} from 'react-router';
import {ConnectedRouter} from 'connected-react-router';

import {store, history} from './store/configureStore';
import App from './components/App';

import * as serviceWorker from './serviceWorker';

import './index.scss';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/" component={App} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();

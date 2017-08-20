import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Router, Route, IndexRoute, Link, browserHistory } from "react-router"
import { syncHistoryWithStore } from "react-router-redux"

import Layout from "./components/Layout"
import Template from "./components/Template"
import store from "./store"

const app = document.getElementById('app')
// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
	<Provider store={store}>
	  <Router history={history}>
	    <Route path="/" component={Layout}>
	      <Route path="template" component={Layout} />
	    </Route>
	  </Router>
	</Provider>,
 	app
 );

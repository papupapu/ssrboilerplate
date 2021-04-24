import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../client/reducers';

export default () => {
	const store = createStore(
		reducers,
		{}, // empty state
		applyMiddleware(thunk), // middleware for async operations
	);

	return store;
};

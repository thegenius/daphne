import {createStore} from 'redux';

let state = {value:1};

function reducer(state, action) {
	switch (action.type) {
		case 'INCREMENT':
			return {value:state.value + 1;};
		case 'DECREMENT':
			return {value:state.value - 1;};
		default:
			return state;
	}
}

let store = createStore(reducer);

export default store;

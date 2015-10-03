import { REQUEST } from '../actions';
import { combineReducers } from 'redux';

function request(state = {}, action) {
	return state;
}

const app = combineReducers({
	request
})

export default app;
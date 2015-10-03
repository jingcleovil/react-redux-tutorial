export const REQUEST = 'REQUEST';
export const GET_USERS = 'GET_USERS';

import { users } from '../fakedata/users';

function onRequest(data) {
	return {
		type: REQUEST,
		data
	}
}

function onGetUsers(data) {
	return {
		type: GET_USERS,
		data
	}
}

export function getUsers() {
	return dispatch => {
		return dispatch(FakeData());
	}
}

export function request() {
	return dispatch => {
		return dispatch(onRequest({}))
	}
}


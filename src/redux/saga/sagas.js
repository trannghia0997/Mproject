// src/redux/sagas.js
import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { LOGIN_REQUEST, loginSuccess, loginFailure } from '../action/authActions';

function* login(action) {
  try {
    const { email, password } = action.payload;
    const response = yield call(loginApi, email, password);
    const { data: responseData } = response;
    console.log(responseData);
    const role = responseData.data.role;
    console.log(role);
    if (role === "CANDIDATE") {
      const { data , access_token, refresh_token } = responseData;
      yield put(loginSuccess(data, access_token, refresh_token));
    } else {
      yield put(loginFailure('Invalid role'));
    }
    
  } catch (error) {
    console.error("Error in login saga:", error);
    yield put(loginFailure('Failed to login'));
  }
}

function loginApi(email, password) {
  return axios.post('https://qltd01.cfapps.us10-001.hana.ondemand.com/auth/login', {
    email,
    password,
  });
}

export default function* rootSaga() {
  yield takeLatest(LOGIN_REQUEST, login);
}

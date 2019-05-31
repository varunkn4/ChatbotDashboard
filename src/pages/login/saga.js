import { put } from 'redux-saga/effects';
import registry from 'app-registry';
import { replace as replaceRouter } from 'react-router-redux';

function* verifyAuth(action) {
    const request = registry.get('request');
    const storage = registry.get('storage');
  
    const uname = action.userCredentials.username;
    const pword = action.userCredentials.password;
    const requestOptions = {
      crossDomain: true,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: uname,
        password: pword,
      })
    };
    const response = yield request.postMethod('http://192.168.69.39:9000/login', requestOptions);
    if (response.token != null) {
      storage.setItem("token", response.token);
      //storage.setItem("user-id", response.UserId);
      yield put(replaceRouter(`/dashboard`));
    }
    else {
      yield put({ type: "LOGIN:DO_LOGIN:FAIL", error: 'Incorrect Username and Password ' });
    }
  }
  
  export default verifyAuth;
/* eslint-disable operator-linebreak */
import axios from 'axios';
import { AsyncStorage } from 'react-native';

const CONFIG = {
  SERVICE_URL: 'https://cycle-on.herokuapp.com'
};

function generateHeaders() {
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${loadAsyncData('token')}`
  };
}

function generateHeadersWithoutAuth() {
  return {
    'Content-Type': 'application/json'
  };
}

export function getData(path) {
  return axios.get(`${CONFIG.SERVICE_URL}${path}`, {
    headers: generateHeaders()
  });
}

export function postData(path, body) {
  return axios.post(`${CONFIG.SERVICE_URL}${path}`, body, {
    headers: generateHeaders()
  });
}

export function putData(path, body) {
  return axios.put(`${CONFIG.SERVICE_URL}${path}`, body, {
    headers: generateHeaders()
  });
}

export function signup(name, phone) {
  return axios.post(
    `${CONFIG.SERVICE_URL}/auth/signup`,
    {
      name,
      phone
    },
    { headers: generateHeadersWithoutAuth() }
  );
}

export function login(phone) {
  return axios.post(
    `${CONFIG.SERVICE_URL}/auth/login`,
    {
      phone
    },
    { headers: generateHeadersWithoutAuth() }
  );
}

export function verify(phone, otp) {
  return axios.post(
    `${CONFIG.SERVICE_URL}/auth/verify`,
    {
      phone,
      otp
    },
    { headers: generateHeadersWithoutAuth() }
  );
}

export async function storeToken(token) {
  await storeAsyncData('token', token);
}

const storeAsyncData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // saving error
  }
};

const loadAsyncData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // value previously stored
      return value;
    }
    return '';
  } catch (e) {
    // error reading value
  }
};

export function extractErrorMessage(action) {
  if (
    action &&
    action.payload &&
    action.payload.response &&
    action.payload.response.data &&
    action.payload.response.data.msg
  ) {
    return action.payload.response.data.msg;
  }
  return 'Unknown Error';
}

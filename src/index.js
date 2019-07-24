import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';


// set a default global configuration

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/type';

// very common use case is for the request interceptor to add some common headers. for example, an authorization header.

// the code below is to register a new interceptor
axios.interceptors.request.use(request => {
  console.log(request);
  // can also Edit request config before returning 
  return request;
}, err => {
  console.log(err);
  return Promise.reject(err);
})



axios.interceptors.response.use(response => {
  console.log(response);
  return response;
}, err => {
    console.log(err); //Error: Request failed with status code 404
  return Promise.reject(err);
})

// if you want to remove the interceptors...

// var myInterceptor = axios.interceptors.request.use(function () {/*...*/ });
// axios.interceptors.request.eject(myInterceptor);

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();

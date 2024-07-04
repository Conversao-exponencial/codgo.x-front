import axios from 'axios';

// Create an Axios instance
const client = axios.create({
  baseURL: 'https://localhost:3000/', // Base URL for all calls
  timeout: 1000, // Request timeout
  headers: {'X-Custom-Header': 'foobar'}
});

// Add a request interceptor
client.interceptors.request.use(request => {
  console.log('Starting Request', request)
  return request
});

// Add a response interceptor
client.interceptors.response.use(response => {
  console.log('Response:', response)
  return response
}, error => {
  console.log('Error:', error)
  return Promise.reject(error);
});

export default client;

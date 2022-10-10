// load the axios HTTP library
window.axios = require('axios');

// Set default headers for all axios request
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// Add a response interceptor
axios.interceptors.response.use(function (response) {
   // Do something with response data
  
   return Promise.resolve(response);
  
}, function (error) {
   // To test error log the error response 
   // console.log(error.response);

   // Initialize a message variable to display to user:  
   Let message = 'Unknown error';
  
   // setting up a generic message according to error response code;
   if (typeof error.response !== 'undefined') {
      if (error.response.status === 400) {
         message = 'Invalid request'
      } else if (error.response.status === 401) {
         message = 'UnAuthorized'
      } else if (error.response.status === 404) {
         message = 'API Route is Missing or Undefined'
      } else if (error.response.status === 405) {
         message = 'API Route Method Not Allowed'
      } else if (error.response.status === 422) {
         message = 'Requested entity cannot be processed'
      } else if (error.response.status >= 500) {
         message.html = 'Server Error'
      } else if (error.response.status >= 419) {
         alert('Session expired, application will restart !');
         location.reload();
      }

      //Setup message for Errors laravel CSRF expiration.
      if (typeof error !== 'undefined') {
         if (error.hasOwnProperty('message')) {
            message.html = error.message;
            if (error.message.match(/csrf/g)) {
               alert('CSRF token expired, application will restart !');
               location.reload();
            }
         }
      }

      // If you can process the error in the Vuex store or Vue component where the request originated from return reponse like below:
     
      return Promise.resolve(error.response);
     
   }

   //Toast the Message to user :
   if (message.html.length > 0) {
      alert(message.html);
   }
    
   // If error has not been processed until here just reject the Promise:
   return Promise.reject(error);
});

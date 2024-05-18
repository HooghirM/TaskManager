/*      Express server     */

// Load express module (function)
const express = require('express');

/* Creates instance of express function 
'app' is used to configure the server
, by routing requests & handling responses */
const app = express();

/* Variable 'port' connected to TCP port 3000. 
*/
const port = 3000;

/* Route handler for HTTP get requests to the root url '/'
'req'(request) & 'res'(response) are objects containing info
about HTTP requests/response*/
app.get('/', (req, res) => {
    // Send 'Hello World!' as response when root URL is accessed
  res.send('Hello World!');
});

/* Start server so that it listens on specified port for incoming connections. 
Callback function executed once server is successfully listening. */
app.listen(port, () => {
    // Console message to confirm server is running
  console.log(`Server running at http://localhost:${port}`);
});
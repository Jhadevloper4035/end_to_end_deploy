const express = require('express');
const ip = require('ip'); // Importing the 'ip' module to get the server's IP address
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));  




app.get('/', (req, res) => {
    res.send({ message : 'Welcome to the Express Server!', serverIp: ip.address() });   
});





app.listen(port, () => { 
     console.log(`Server is running on http://localhost:${port}`);
})
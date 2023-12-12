const mongoose = require('mongoose');

mongoose
   .connect('mongodb://127.0.0.1:27017/moviestamp')
   .then(() => {
      console.log('Connected to MongoDB');
   })
   .catch((ex) => {
      console.error('connection failed', ex);
   });
//must watch in line 3 here is the url of the database in ip address ------> not in localhost
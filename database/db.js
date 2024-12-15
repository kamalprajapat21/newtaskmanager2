// const mongoose = require('mongoose');

// const mongoURI = 'mongodb+srv://kamal21cse234:<db_password>@cluster0.bdmyw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
// const options = {
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true,
// };

// mongoose
// 	.connect(mongoURI, options)
// 	.then(() => {
// 		console.log('Connected to MongoDB');
// 		// Start your application or perform additional operations
// 	})
// 	.catch((error) => {
// 		console.error('Error connecting to MongoDB:', error);
// 	});



const mongoose = require('mongoose');

// Replace the placeholder with your actual MongoDB password (ensure no < > symbols)
const mongoURI = 'mongodb+srv://kamal21cse234:aEbSaq3baApFU82d@kamal.aguy7.mongodb.net/?retryWrites=true&w=majority&appName=kamal';

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB');
    // Start your application or perform additional operations
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });



  /*aEbSaq3baApFU82d*/
  /*kamal21cse234*/

  
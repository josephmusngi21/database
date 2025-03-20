const mongoose = require('mongoose');

// MongoDB connection URI
const uri = 'mongodb://localhost:27017/yourDatabaseName';

// Connect to MongoDB
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB successfully');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

// Export the connection (optional)
module.exports = mongoose;
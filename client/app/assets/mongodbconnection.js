// Example function to send data to your backend API
async function sendDataToMongoDB(data) {
    try {
        const response = await fetch('https://your-backend-api.com/api/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Failed to send data to MongoDB');
        }

        const result = await response.json();
        console.log('Data successfully sent:', result);
    } catch (error) {
        console.error('Error sending data to MongoDB:', error);
    }
}

// Example usage
const exampleData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 30,
};

sendDataToMongoDB(exampleData);
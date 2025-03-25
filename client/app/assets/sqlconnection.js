// sqlconnection.js

// Function to send data to the backend API
async function sendDataToDatabase(data) {
    try {
        const response = await fetch('http://localhost:3000/api/database', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const result = await response.json();
        console.log('Data successfully sent to the database:', result);
    } catch (error) {
        console.error('Error sending data to the database:', error);
    }
}

// Example usage
const exampleData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 30,
};

sendDataToDatabase(exampleData);
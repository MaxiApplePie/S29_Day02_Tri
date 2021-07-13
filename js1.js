const fs = require('fs');

const fileName = process.argv[2];

// Méthode synchrone
try {
    const data = fs.readFileSync(fileName, 'utf8');
    console.log(data);
} catch (error) {
    console.error(error.message);
}
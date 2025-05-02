const fs = require('fs');

fs.writeFile('hello.txt', 'Hello from Node.js', (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File written successfully!');
    }
});

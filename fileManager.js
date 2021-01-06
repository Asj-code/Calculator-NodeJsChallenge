var fs = require('fs');

function createFile(result) {
    let stringResult = String(result);

    fs.appendFile('./log.txt', stringResult + "\n", function error(error) {
        if (error) {
            console.log('Hubo un error');
        }else {
            console.log('Todo salió bien');
        }
    });
};


module.exports = createFile;
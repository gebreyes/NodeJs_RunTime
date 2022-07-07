const fs = require('fs');

//Reading file
fs.readFile('./files/file.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});

//writing file
fs.writeFile('./files/file.txt', 'written were written successfully', (err) => {
    if (err) {
        console.log('error occured', err);
    }
    console.log("Written successfully");
});

//create and delete directories
if (!fs.existsSync('./file')) {
    fs.mkdir('./file', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file not created');
    })
}

//Writing files after creating nwu file
if (!fs.existsSync('./file')); {
    fs.writeFile('./file/file.txt', 'writing file inside new created file', (err) => {
        if (err) {
            console.log(err);
        }
        console.log("file written successfully");
    });
}

//deleting directories which have files
if (fs.existsSync('./file/file.txt'));
fs.unlink('./file/file.txt', (err) => {
    if (err) {
        console.log(err);
    }
    console.log("Deleted successfully");
});

// deleting an empty directories What if the directories contain file(s)???
if (fs.existsSync('./file'));
fs.rmdir('./file', (err) => {
    if (err) {
        console.log(err);
    }
    console.log("Deleted successfully");
});
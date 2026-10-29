const fs = require('fs');
// // read a file ashynchronously and print its content
// fs.readFile('data', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// // check file is exist or not and create file if not exist
// if (!fs.existsSync('data1')) {
//     fs.writeFileSync('data1', 'this is new file');
// } else {
//     console.log('file already exists');
// }

// // append data to a file 
// if(fs.existsSync('data')){
//     fs.appendFileSync('data', '\nsecond line added');
// } else {
//     console.log('file does not exists');
// }

// // delete file 
// if (fs.existsSync('data1')) {
//     fs.unlinkSync('data1');
// } else {
//     console.log('File does not exist.');
// }

// // read all files in directory
// // console.log(fs.readdirSync('./'))
// fs.readdir('./', (err, files) => {
//     if (err){
//         console.log(err);
//     } else {
//         console.log(files);
//     }
// })

// // rename a file 
// fs.rename('data', 'newFile', (err) => {
//     if (err) throw err;
//     console.log('file renamed');
// })


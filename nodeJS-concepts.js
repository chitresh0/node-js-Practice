/*
// Event-driven programming
const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('message', (msg) => {
    console.log('message recieved : ', msg);
});

eventEmitter.on('error', (msg) => {
    console.log('error recieved : ', msg);
});

eventEmitter.emit('error', 'hello event');
*/

/*
// Nonblocking I/O 
const fs = require('fs');

fs.readFile('hello.txt', 'utf8', (err, data) => {
    if (err) {
        console.log('error file read : ', err);
    } else {
        console.log('file read data : ', data)
    }
} )

const data = fs.readFileSync('hello.txt', 'utf8');
console.log('data form file  ', data);
*/

//callback function

function fetchData(callback) {
    setTimeout(() => {
        callback('data fetched');
        
    }, 3000);
}

fetchData((data) => {
    console.log(data);
})
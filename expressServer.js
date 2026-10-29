const express = require('express');

const app = express();
const PORT = 8100;
const router = express.Router()

async function getData() {
    console.log('getData()');
    return (await fetch("https://jsonplaceholder.typicode.com/todos/")).json();
}

const myMiddleware = (req, res, next) => {
    console.log('inside myMiddleware');
    if (req.method === 'POST') {
        return res.send({source: 'middleware'})
    }
    next();
}
// 1. Enable JSON parsing middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(`calling ${req.method} method for url : ${req.url}.  \n`);
    next();
});

app.use('/data', (req, res, next) => {
    console.log('second middle ware: ', req.body);
    next();
});

router.use((req, res, next) => {
    console.log('router level middleware');
    next();
})

app.get('/', myMiddleware, async (req, res) => {
    console.log('call home page');
    const data = await getData();
    // console.log('data : ', data);
    res.send(data);
});

router.post('/data', myMiddleware, (req, res) => {
    console.log('req body : ', req.body);
    res.json({received: req.body});
})


router.post('/search', myMiddleware, (req, res) => {
    console.log('search data');
    res.json({response: 'search data'});
})

app.use('/', router);

app.listen(PORT, () => {
    console.log('server strted at port : ', PORT)
});
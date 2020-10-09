const express = require('express');
const app = express();
app.use(express.json());
// YOUR CODE GOES IN HERE
const fs = require('fs');
const { request } = require('http');
let { title } = require('process');

app.get('/', function(req, res) {
    res.send('Hello World');
});

app.post('/blogs', (req, res) => {
    // How to get the title and content from the request??
    if (
        typeof req.body === 'undefined' ||
        typeof req.body.title === 'undefined' ||
        typeof req.body.content === 'undefined'
    ) {
        req.statusCode(400);
        req.send('invalid request');
        return;
    } else {
        let = title = req.body.title;
        let = content = req.body.content;
        fs.writeFileSync(title, content);
        res.end('ok');
    }
});

app.put('/posts/:title', (req, res) => {
    let title = req.params.title;
    let content = req.body.content;
    if (fs.existsSync(title)) {
        fs.writeFileSync(title, content);
        res.end('ok');
    } else {
        res.status(400);
        res.send('This post does not exist!');
    }
});

app.delete('/blogs/:title', (req, res) => {
    let title = req.params.title;
    if (fs.existsSync(title)) {
        fs.unlinkSync(title);
        res.end('ok');
    } else {
        res.status(404);
        res.send('This post does not exist!');
    }
});

app.get('/blogs/:title', (req, res) => {
    // How to get the title from the url parameters?
    let title = req.params.title;
    // check if post exists
    if (fs.existsSync(title)) {
        const post = fs.readFileSync(title);
        // send response
        res.send(post);
    } else {
        res.status(404);
        res.send('This post does not exist!');
    }
});

//const info = { title: 'My first blog', content: 'Lorem ipsum' };

const port = process.env.port || 3000;
app.listen(port);
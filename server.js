const express = require('express');
const next = require('next');

// const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev: true });
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = express();

        server.get('/express', (req, res) => {
            res.end('Hello Express');
        })

        server.get('*', (req, res) => {
            return handle(req, res);
        })

        server.listen(3000, err => {
            if (err) throw err;
            console.log('Server is running on http://localhost:3000')
        })
    })
    .catch(e => {
        console.log(e.stack);
        process.exit(1);
    })
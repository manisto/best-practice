let path = require('path');
let express = require('express');
let faker = require('faker');

let app = express();

app.use('/app', express.static('app', { fallthrough: false }));
app.use('/lib', express.static('node_modules', { fallthrough: false }));
app.use('/api', require('./api'));
app.use(function(request, response, next) {
    response.sendFile(path.join(process.cwd(), 'app/index.html'));
});

app.listen(1337, function() {
    console.log('Now listening on http://localhost:1337...');
});
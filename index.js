const express = require('express');

const app = express();
app.use(express.static('public'));


const port = process.env.PORT || 3000;
app.listen(port);

//app.set('port', process.env.PORT || 3000);
//app.listen(3000)

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname + 'index.html'));
});
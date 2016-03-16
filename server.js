var app = require('express')();

app.get('*', function(req, res) {
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var language = req.headers["accept-language"];
    language = language.slice(0, language.indexOf(','))
    var userAgent = req.headers["user-agent"];
    var sw = userAgent.slice(userAgent.indexOf('(')+1, userAgent.indexOf(')'));
    res.send({
        ipaddress: ip,
        language: language,
        software: sw
    });
});

app.listen(3000, function() {
    console.log('listening on port 3000!');
});
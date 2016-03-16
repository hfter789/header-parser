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

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = app.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});
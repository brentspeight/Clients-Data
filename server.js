
var imaps = require('imap-simple');

var config = {
    imap: {
        user: 'brentspeight12345@gmail.com',
        password: 'Joseph00',
        host: 'imap.gmail.com',
        port: 993,
        tls: true,
        authTimeout: 3000
    }
};
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
 
imaps.connect(config).then(function (connection) {
 
    return connection.openBox('INBOX').then(function () {
        var searchCriteria = [
            'UNSEEN'
        ];
 
        var fetchOptions = {
            bodies: ['HEADER', 'TEXT'],
            markSeen: false
        };
 
        return connection.search(searchCriteria, fetchOptions).then(function (results) {
            var subjects = results.map(function (res) {
                return res.parts.filter(function (part) {
                    return part.which === 'HEADER';
                })[0].body.subject[0];
            });
 
            console.log(subjects);
        
        });
    });
});
var fs = require('fs-extra');
var exporter = require('./index');

var config = {
    dbhost: 'localhost',
    dbport: 3306,
    dbname: 'ubb_db',
    dbuser: 'user',
    dbpass: 'password',

    tablePrefix: 'ubbt_'
};

exporter.testrun(config, function(err, results) {
    console.log(
        'full run results', 
        'users:' + Object.keys(results[1]).length,
        'categories:' + Object.keys(results[2]).length,
        'topics:' + Object.keys(results[3]).length,
        'posts:' + Object.keys(results[4]).length
    );
    exporter.paginatedTestrun(config, function(err, results) {
        console.log(
            'paginated run results', 
            'users:' + Object.keys(results[1]).length,
            'categories:' + Object.keys(results[2]).length,
            'topics:' + Object.keys(results[3]).length,
            'posts:' + Object.keys(results[4]).length
        );
    });
    
});

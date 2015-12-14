var fs = require('fs-extra');

require('./index').testrun({
    dbhost: 'localhost',
    dbport: 3306,
    dbname: 'ubb_test',
    dbuser: 'user',
    dbpass: 'password',

    tablePrefix: 'ubbt_'
}, function(err, results) {
    results.forEach(function(result, i) {
		console.log(i, result && Object.keys(result).length);
	});
	// fs.writeFileSync('./results.json', JSON.stringify(results, undefined, 2));
});

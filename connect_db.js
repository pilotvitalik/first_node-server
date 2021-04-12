require('dotenv').config();
const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'localhost',
	user: process.env.USER,
	password: process.env.PASSWD,
	database: process.env.DB
});

connection.connect(err => {
	if (err) console.log(err);
});

//const post  = {firstname: 'sadas', lastname: 'sidorov', email: 'asdasd', reg_date: 20210412210435};

// const addData = connection.query('INSERT user SET ?', post, function(error, results, fields){
// 	if (error) console.log(error);
// });

//console.log(addData.sql);

connection.query('SELECT * FROM user', function(error, results, fields){
	if (error) console.log(error);
	console.log(results);
});

connection.end();
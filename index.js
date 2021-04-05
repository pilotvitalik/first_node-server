require('dotenv').config()

const fs = require('fs');

// fs.readFile('text.txt', 'utf-8', (err, data) => {
// 	console.log(data);
// });

// let file = fs.readFileSync('text.txt', 'utf-8');
// console.log(file)

fs.readdir('./one/', (err, data) => {
	if (err){
		console.log('Ошибка!!!!')
		console.log(err);
		return false
	}
	console.log(data);

});
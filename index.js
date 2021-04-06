require('dotenv').config()

const fs = require('fs');
const path = require('path');

// fs.readFile('text.txt', 'utf-8', (err, data) => {
// 	console.log(data);
// });

// let file = fs.readFileSync('text.txt', 'utf-8');
// console.log(file)

// fs.readdir('./one/', (err, data) => {
// 	if (err){
// 		console.log('Ошибка!!!!')
// 		console.log(err);
// 		return false
// 	}
// 	console.log(data);
// 	data.forEach(item => {
// 		console.log(path.extname(item));
// 		console.log(fs.statSync(`./one/${item}`));
// 	})
// });

fs.writeFile('create_file.txt', 'Hello world', (err) => {
	if(err) console.log(err);
});

fs.writeFile('./one/create_file.txt', 'Hello world!', (err) => {
	if(err) console.log(err);
});

//Hello

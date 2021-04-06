require('dotenv').config()

const fs = require('fs');
const path = require('path');

const obj = {
	name: 'Vitaliy',
	age: 34,
	auto: 'Skoda'
}

fs.writeFile('test.json', JSON.stringify(obj), (err) => {
	if (err) console.log(err);
});
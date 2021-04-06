require('dotenv').config()

const fs = require('fs');
const path = require('path');
const person = require('./test.json');

const obj = {
	name: 'Vitaliy',
	age: 34,
	auto: 'Skoda'
}

fs.writeFileSync('test.json', JSON.stringify(obj), (err) => {
	if (err) console.log(err);
});

console.log(person);
require('dotenv').config()

const fs = require('fs');
const path = require('path');
const person = require('./test.json');
const csv = require('csv-parser');
const results = [];

const obj = {
	name: 'Vitaliy',
	age: 34,
	auto: 'Skoda'
}

// fs.writeFileSync('test.json', JSON.stringify(obj), (err) => {
// 	if (err) console.log(err);
// });

fs.createReadStream('test1.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);
    // [
    //   { NAME: 'Daffy Duck', AGE: '24' },
    //   { NAME: 'Bugs Bunny', AGE: '22' }
    // ]
  });

console.log(person);
require('dotenv').config()

const fs = require('fs');
const path = require('path');
const person = require('./test.json');
const csv = require('csv-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const results = [];

const obj = {
	name: 'Vitaliy',
	age: 34,
	auto: 'Skoda'
}

// fs.writeFileSync('test.json', JSON.stringify(obj), (err) => {
// 	if (err) console.log(err);
// });

// fs.createReadStream('test1.csv')
//   .pipe(csv())
//   .on('data', (data) => results.push(data))
//   .on('end', () => {
//     console.log(results);
//     // [
//     //   { NAME: 'Daffy Duck', AGE: '24' },
//     //   { NAME: 'Bugs Bunny', AGE: '22' }
//     // ]
//   });

  const csvWriter = createCsvWriter({
      path: 'test1.csv',
      header: [
          {id: 'df_1', title: 'df:'},
          {id: 'dsfds_1', title: 'dsfds'},
          {id: 'sdfsdf_1', title: 'sdfsdf'},
          {id: 'sdfsd_1', title: 'sdfsd'},
      ]
  });

  const records = [
      {df_1: 'Basd',  dsfds_1: 'French, English', sdfsdf_1: 'Hello', sdfsd_1: 'world!'},
      {df_1: 'Basd',  dsfds_1: 'French', sdfsdf_1: 'Hello', sdfsd_1: 'world!'},
  ];

  csvWriter.writeRecords(records)       // returns a promise
      .then(() => {
          console.log('...Done');
      });

console.log(person);
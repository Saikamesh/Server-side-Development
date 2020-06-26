const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dboper = require('./operations');

const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';

MongoClient.connect(url).then((client) => {
  console.log('Connected Correctly to the Server');

  const db = client.db(dbname);

  dboper
    .insertDocument(db, { name: 'Vadonut', description: 'Test' }, 'dishes')
    .then((result) => {
      console.log('Insert Document:\n', result.ops);

      return dboper.findDocuments(db, 'dishes');
    })
    .then((docs) => {
      console.log('Found Documents:\n', docs);

      return dboper.updateDocument(
        db,
        { name: 'Vadonut' },
        { description: 'Updated test' },
        'dishes'
      );
    })
    .then((result) => {
      console.log('Updated Document:\n', result.result);

      return dboper.findDocuments(db, 'dishes');
    })
    .then((docs) => {
      console.log('Found Documents:\n', docs);

      return db.dropCollection('dishes');
    })
    .then((result) => {
      console.log('dropped collection: ', result);

      client.close();
    })
    .catch((err) => console.log(err));
});

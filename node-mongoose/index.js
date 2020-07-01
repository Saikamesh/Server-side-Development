const mongoose = require('mongoose');
const Dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/conFusion';
// const connect = mongoose.connect(url);
const connect = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
connect.then((db) => {
  console.log('Connectes correctly to server');

  Dishes.create({
    name: 'Uthappizza',
    description: 'test',
  })
    .then((dish) => {
      console.log(dish);

      return Dishes.findByIdAndUpdate(
        dish._id,
        {
          $set: {
            description: 'Updated test',
          },
        },
        {
          new: true,
        }
      ).exec();
    })
    .then((dish) => {
      console.log(dish);

      dish.comments.push({
        rating: 4,
        comment: 'I am getting good feeling',
        author: 'Lenard',
      });

      return dish.save();
    })
    .then((dish) => {
      console.log(dish);

      return Dishes.deleteMany({});
    })
    .then(() => {
      return mongoose.connection.close();
    })
    .catch((err) => {
      console.log(err);
    });
});

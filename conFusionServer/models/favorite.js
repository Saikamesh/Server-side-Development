const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const favoriteSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  dishes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Dish',
    },
  ],
});

let Favorites = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorites;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leaderSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      require: true,
    },
    abbr: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      requried: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

var Leaders = mongoose.model('Leader', leaderSchema);

module.exports = Leaders;

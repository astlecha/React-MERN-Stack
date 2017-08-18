var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  title: {
    type: String
  },
  date: {
    type: Date,
    required: true,
    defaultValue: Date.now
  },
  url: {
    type: String
  },
  body: {
  	type: String
  }
});

const Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;
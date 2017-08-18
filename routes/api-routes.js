var express = require("express");

// This is the route we will send GET requests to retrieve our most recent search data.
// We will call this route the moment our page gets rendered

app.get("/", (req, res) => {

  Article.find({})
  (err, doc) => {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

// This is the route we will send POST requests to save each search.
app.post("/", (req, res) => {

  Article.create({
    var newArticle = new Articles(req.body)
	newArticle.save((err,doc) => {
	    if (err) {
	      console.log(err);
	    }
	    else {
	      res.send("Saved Search");
	    }
	});
  });
}

app.delete("/api/saved", _id, (req, res) => {

	Article.remove({
		_id: req.body.id
	}).then((doc) => {
		res.send(doc);
	}).catch((err) => {
		res.send(err);
	});
})
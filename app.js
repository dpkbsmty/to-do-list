const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true})); 

// var item = "";
var items = [];

app.get('/', function(req, res){

  const today = new Date();
  const day = today.toLocaleDateString('en-US', { weekday: 'long' });
  const date = today.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  const dayAnddate = day + ", "+ date

  res.render("index",{keyday:dayAnddate, keyitems:items} )

});


app.post("/", function(req, res){
  var item = req.body.toDo;
  items.push(item)

  res.redirect("/");

})
  


app.listen(3000, () => {
  console.log('Server started on port 3000');
});


var Items = require('../models/Items');
var Category = require('../models/category')




// Creating item
exports.postItem = function(req, res) {
    var item = new Items({
      name : req.body.name,
      price : req.body.price,
      category : req.body.category
    });

    item.save(function(err, response) {
        if (err) {
            res.send(failureResponse(err));
        }
        res.json(successResponse(response));
    });
}


exports.getItems = function(req, res){
  var category = req.params.category;
  Items.find({category : category}, function(err, items){
    if(err){
      res.json(failureResponse(err));
    }
    res.json(successResponse(items));
  });
}

exports.postCategory = function(req, res) {
    var category = new Category({
      name : req.body.name,
      category : req.body.category
    });

    category.save(function(err, response) {
        if (err) {
            res.send(failureResponse(err));
        }
        res.json(successResponse(response));
    });
}

exports.getCategory = function(req, res){
  Category.find({}, function(err, category){
    if(err){
      res.json(failureResponse(err));
    }
    res.json(successResponse(category));
  });
}




// Custom Success Response
function successResponse(data){
  body = {
    "body":data,
    "success":true,
    "status":200
  }
  return body;
}

// Custom Failure Response
function failureResponse(data){
  body = {
    "body":data,
    "success":false,
    "status":500
  }
  return body;
}

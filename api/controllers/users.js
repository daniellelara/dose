var User = require('../models/user');


//refugeeUpdate PATCH
function usersUpdateOne(req, res) {
  User.findByIdAndUpdate(req.params.id, { $push:{ tools: req.body.tools }}, { new: true }, function(err, user) {
    console.log(user);
    if(err) return res.status(500).json({message: err});
    return res.status(200).json(user);
  });
}
function usersDeleteOne(req, res) {
  User.findByIdAndUpdate(req.params.id, { $pull:{ tools: req.body.tools }}, { new: true }, function(err, user) {
    console.log(user);
    if(err) return res.status(500).json({message: err});
    return res.status(200).json(user);
  });
}

module.exports = {
  updateOne: usersUpdateOne,
  deleteOne: usersDeleteOne
}
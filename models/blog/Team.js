// set up mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeamSchema = Schema({
  tier: {type: String },
  raw: {type: String},
  teamMembers: [{name: String}]  
});

module.exports = mongoose.model('Team', TeamSchema);
// the above is necessary as you might have embedded schemas which you don't export


// set up mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeamSchema = Schema({
  tier: {type: String },
  trainer: {type: Number},
  raw: {type: String},
  rentalCode: {type:String},
  teamMembers: [{name: String}]  
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports = mongoose.model('Team', TeamSchema);
// the above is necessary as you might have embedded schemas which you don't export


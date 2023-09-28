const mongoose = require('mongoose')

const dataSchema = mongoose.Schema(
    {
        id: {
            type: Number
        }, 
        name: {
            type: String
        }, 
        title: {
            type: String
        }, 
        
    }      
)
// To avoid version key and _id default fileds
dataSchema.set('toJSON', {
    virtuals: true,
    versionKey:false,
    transform: function (doc, ret) {   delete ret._id  }
  });

const Data = mongoose.model('Data', dataSchema);
module.exports = Data;
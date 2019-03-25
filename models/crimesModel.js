var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var CrimeSchema = new Schema(
    {
        category: [{
            code: String,
            name: String,
        }],
        date: Date,
        person_id: Number,
        crime: [{
            category: String,
            location_type: String,
            location: [{
                latitude: Number,
                street: [{
                    id: Number,
                    name: String,
                }],
                longitude: Number,
            }],
            context: String,
            persistent_id: String,
            id: Number,
            location_subtype: String,
            month: Date,
        }]
    });

//Export model
module.exports = mongoose.model('Crime', CrimeSchema);

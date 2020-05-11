const mongoose = require( 'mongoose' );

/* Your code goes here */

//Create the schema
const sportsSchema = mongoose.Schema({
    id: { //Id must be unique
        type : Number,
        required : true,
        unique : true
    },
    name : {
        type : String,
        required: true
    },
    num_players : {
        type : String,
        required : true

    }
})

//We create the collection for the database
const sportCollection = mongoose.model('sports', sportsSchema);


//Here we create the endpoint function list
//Adds the new created sport to the database
const functionlist = {
    addSport: function (name, num_players, id) {
        let newsport = {id, name, num_players};
        return sportCollection.create(newSport).then( added =>{
            return added;
        }).catch( err => {
            return err;
        })
    }
}


module.exports = {
    functionlist
};
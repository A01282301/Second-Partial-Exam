const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const mongoose = require( 'mongoose' );
const jsonParser = bodyParser.json();
const { DATABASE_URL, PORT } = require( './config' );
const morgan = require( 'morgan' );
const model = require('./models/sport-model.js')
module.exports = {
    functionlist
};const app = express();
// I must send on the body: name, num_players, and the id
/* Your code goes here */
app.use(morgan('dev'));
app.post('sports/addSport/:sportId', jsonParser, (req,res) =>{
    
    let name = req.body.name;
    let num_players = req.body.num_players;
    let id = req.body.num_players;
    let sportid = res.header.sportid;
    
    if(!name || !num_players || !id){
        res.statusMessage = "A parameter is missing (name, num_players, id)";
        return res.status(406).end();
    }
    if(id === sportid ){

        let flag = false;

        sports.forEach(element => {
            if(element.id == sportid){
                flag = true;
            }
        });
        if(flag == true){
            res.statusMessage = "Sport id already added";
         return res.status(400).end();
        }
         return res.status(201).end();

    }else{
        functions.addSport(name, num_players, id);
        res.statusMessage = "ID doesnt match";
        return res.status(409).end();
    }
    console.log("name");
})


app.listen( PORT, () => {
    console.log( "This server is running on port 8080" );
    new Promise( ( resolve, reject ) => {
        const settings = {
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
            useCreateIndex: true
        };
        mongoose.connect( DATABASE_URL, settings, ( err ) => {
            if( err ){
                return reject( err );
            }
            else{
                console.log( "Database connected successfully." );
                return resolve();
            }
        })
    })
    .catch( err => {
        console.log( err );
    });
});
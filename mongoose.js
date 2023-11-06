const mongoose= require('mongoose');
mongoose.connect('mongodb://127.0.0.1/tododb');
const db=mongoose.connection;
db.on('error',console.error.bind(console,"error in connection"));
db.once('open',function(){
    console.log("db connected successfully");
});

const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/olympics")
// .then(() => {
//     console.log("connection successful");
// }).catch((e) => {
//     console.log("no connection");
// });


mongoose.connect("mongodb+srv://hasantauqeer20:aPsmLEKMQDwBDxrD@cluster0.dibczg4.mongodb.net/?retryWrites=true&w=majority")
.then(() => {
    console.log("connection successful");
}).catch((e) => {
    console.log("no connection");
});
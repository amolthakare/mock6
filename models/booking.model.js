const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
    userID:String
    
})

const BookingModel = mongoose.model("booking",bookingSchema);

module.exports={
    BookingModel
}
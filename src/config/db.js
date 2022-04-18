const mongoose=require("mongoose")


function connect() {
    return mongoose.connect("mongodb+srv://tarun-rakhunde:tarun7559@cluster0.uuhiy.mongodb.net/apartment")
}
module.exports=connect
import mongoose from "mongoose";

const connection = {};

async function dbConnect() {
    if (connection.isConnected) {
        return
    }
    const db = await mongoose.connect('mongodb+srv://renan_oliveira93:oLIVEIRa93@cluster0.ou5jw.mongodb.net/crud?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    connection.isConnected = db.conections[0].readyState
}

export default dbConnect;   
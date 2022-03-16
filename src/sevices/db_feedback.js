import mongoose from "mongoose";

const connection = {}

async function dbFeedbackConnect() {
    if (connection.isConnected) {
        return
    }
    const db = await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI_FEEDBACK, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    connection.isConnected = db.conections[0].readyState
}

export default dbFeedbackConnect;   
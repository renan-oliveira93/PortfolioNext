import mongoose from 'mongoose'

const connection = {}

async function dbFeedbackConnect() {
    if (connection.isConnected) {
        return
    }

    const db = await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    connection.isConnected = db.connections[0].readyState
}

export default dbFeedbackConnect   
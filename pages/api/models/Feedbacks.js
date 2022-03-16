import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema({
    name: String,
    feedback: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const Feedback = mongoose.models.Feedback || mongoose.model('Feedback', FeedbackSchema)

export default Feedback;
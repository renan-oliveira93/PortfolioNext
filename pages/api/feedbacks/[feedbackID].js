import Feedback from "../../../src/models/Feedbacks";
import dbFeedbackConnect from "../../../src/sevices/db_feedback";

dbFeedbackConnect();

export default async function handler(req, res) {
    const { method } = req
    const { feedbackID } = req.query

    switch (method) {
        case 'PUT':
            try {
                const { name, feedback } = req.body
                if (!name && !feedback) throw 'invalid data'

                await Feedback.updateOne({ _id: feedbackID }, { name, feedback })
                res.status(200).json({ success: true })
            } catch (error) {
                console.log(error);
                res.status(500).json({ success: false, err })
            }
            break;
        case 'DELETE':
            try {
                await Feedback.deleteOne({ _id: feedbackID })

                res.status(201).json({ success: true })

            } catch (error) {
                console.log(error);
                res.status(500).json({ success: false, err })
            }
    }
}
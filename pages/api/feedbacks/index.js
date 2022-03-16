import Feedback from "../models/Feedbacks";
import dbFeedbackConnect from "../../../src/sevices/db_feedback";

dbFeedbackConnect();

export default async function handler(req, res) {
    const { method } = req

    switch (method) {
        case 'GET':
            try {
                const feedbacks = await Feedback.find({})
                res.status(200).json({ success: true, data: feedbacks })
            } catch (error) {
                console.log(error);
                res.status(500).json({ success: false, err })
            }
            break;
        case 'POST':
            try {
                const { name, feedback } = req.body

                if (!name && !feedback) throw 'invalid data'
                const row = await Feedback.create({ name, feedback })
                res.status(201).json({ success: true, data: row })

            } catch (error) {
                console.log(error);
                res.status(500).json({ success: false, err })
            }
    }
}
import Usuario from "../../../src/models/Usuarios";
import dbConnect from "../../../src/sevices/db";

dbConnect();

export default async function handler(req, res) {
    const { method } = req

    switch (method) {
        case 'GET':
            try {
                const usuarios = await Usuario.find({})
                res.status(200).json({ success: true, data: usuarios })
            } catch (error) {
                console.log(error);
                res.status(500).json({ success: false, err })
            }
            break;
        case 'POST':
            try {
                const { name, email, telefone } = req.body

                if (!name && !email && !telefone) throw 'invalid data'
                const usuario = await Usuario.create({ name, email, telefone })
                res.status(201).json({ success: true, data: usuario })

            } catch (error) {
                console.log(error);
                res.status(500).json({ success: false, err })
            }
    }
}
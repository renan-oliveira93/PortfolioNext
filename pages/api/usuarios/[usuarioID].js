import Usuario from "../../../src/models/Usuarios";
import dbConnect from "../../../src/sevices/db";

dbConnect();

export default async function handler(req, res) {
    const { method } = req
    const { UsuarioID } = req.query

    switch (method) {
        case 'PUT':
            try {
                const { name, email, telefone } = req.body
                if (!name && !email && !telefone) throw 'invalid data'

                const usuario = await Usuario.updateOne({ _id: UsuarioID }, { name, email, telefone })
                res.status(200).json({ success: true, data: usuario })
            } catch (error) {
                console.log(error);
                res.status(500).json({ success: false, err })
            }
            break;
        case 'DELETE':
            try {
                const usuario = await Usuario.deleteOne({ _id: UsuarioID })

                res.status(201).json({ success: true, data: usuario })

            } catch (error) {
                console.log(error);
                res.status(500).json({ success: false, err })
            }
    }
}
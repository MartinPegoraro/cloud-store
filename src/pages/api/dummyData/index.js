import { dummyData } from "../../../../data/dummyData"

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return res.status(200).json(dummyData)
        case 'POST':
            console.log('metodo post', req.body.value, req.body);
        default:
            return res.status(405).end(`Method ${req.method} not allowed`)

    }
}
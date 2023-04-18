import { createUserDB } from '../db/users'

export default async (req: any, res: any) => {
    const { nome, email, senha } = req.body

    const createUser = await createUserDB(nome, email, senha)

    res.json({ result: createUser })
}
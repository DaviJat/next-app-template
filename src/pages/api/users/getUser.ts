import { getUserDB } from "../db/users";

export default async (req: any, res: any) => {

    const { email } = req.body

    const getUsers = await getUserDB(email)

    res.json({
        result: getUsers
    })
}
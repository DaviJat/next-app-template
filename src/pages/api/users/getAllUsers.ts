import { getAllUsersDB } from "../db/users";

export default async (req: any, res: any) => {
    const getUsers = await getAllUsersDB()

    res.json({
        result: getUsers
    })
}
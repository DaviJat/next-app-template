import { prisma } from './db'

export async function getAllUsersDB() {
    return prisma.cliente.findMany()
}

export async function createUserDB(nome: string, email: string, senha: string) {
    return prisma.cliente.create({
        data: {
            nome,
            email,
            senha
        }
    })
}

export async function getUserDB(email: string) {
    return prisma.cliente.findMany({
        where: {
            email: email
        }
    })
}
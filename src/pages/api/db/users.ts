import { prisma } from './db'

export async function getUsersDB() {
    return prisma.cliente.findMany()
}

export async function createUserDB(nome: string, email: string, senha: string) {
    return prisma.cliente.create({
        data: {
            nome,
            email,
            senha
        }
    }
    )

}
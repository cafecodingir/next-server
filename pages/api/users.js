import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(req, res) {
    const allUsers = await prisma.user.findMany({
        include: {
          posts: true,
          profile: true,
        },
      })

    console.dir(allUsers, { depth: null })
    
    res.json(allUsers);
}
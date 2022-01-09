import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(req, res) {
  const Users = await prisma.user.findMany();

  await prisma.user.create({
    data: {
      name: 'cafecoding' + Users.length,
      email: 'cafecodingir' + Users.length + '@gmail.com',
      posts: {
        create: { title: 'Hello World' },
      },
      profile: {
        create: { bio: 'I like coding' },
      },
    },
  })

  res.json({ message: "user-" + Users.length + " created" });
}
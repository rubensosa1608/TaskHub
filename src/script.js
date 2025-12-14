import { prisma } from './lib/prisma.js';

const user = await prisma.users.create({
    data: {
        email: 'Invitado@gmail.com',
        password: 'invitado'
    }
})

console.log(user);

await prisma.$disconnect();
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const userData: any = [
  {
    name: 'Matheus Lira Barbosa',
    email: 'matheus@prisma.io',
    password: "123"
  },
  {
    name: 'Paulo Luedy Radiante Leitão',
    email: 'paulo@prisma.io',
    password: "123"
  },
  {
    name: 'Viviany Irias',
    email: 'viviany@prisma.io',
    password: "123"
  },
];


async function main() {
  console.log(`Start seeding ...`);
  console.log('Alimentando  no banco de dados usuarios');

  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    });
    console.log(`Usuario ${user.name} adicionado com id: ${user.id}`);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

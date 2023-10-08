import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableShutdownHooks();
  await app.listen(3000, () => {
    console.log(`
🚀 Server ready at: http://localhost:3000/graphql
⭐️ See sample queries: http://pris.ly/e/ts/graphql-nestjs#using-the-graphql-api
`);
  });
}
bootstrap();

/* const user = {
  nome: 'Matheus Lira Barbosa',
  email: 'matheus_lira13',
  password: 'cachorro',
  treinos: [
    [
      {
        categorias: [
          { id: 1, name: 'Peito' },
          { id: 2, name: 'Perna' },
        ],
        exercices: [
          {
            name: 'Supino',
            img: 'https://algumacoisa',
            categoria: { id: 1, name: 'Peito' },
          },
          {
            name: 'Supino',
            img: 'https://algumacoisa',
            categoria: { id: 1, name: 'Peito' },
          },
          {
            name: 'Leg Press',
            img: 'https://algumacoisa',
            categoria: { id: 2, name: 'Perna' },
          },
          {
            name: 'Cadeira extensoura',
            img: 'https://algumacoisa',
            categoria: { id: 2, name: 'Perna' },
          },
        ],
      },
      ,
    ],
    [
      {
        categorias: [
          { id: 1, name: 'Peito' },
          { id: 2, name: 'Perna' },
        ],
        exercices: [
          {
            name: 'Supino',
            img: 'https://algumacoisa',
            categoria: { id: 1, name: 'Peito' },
          },
          {
            name: 'Supino',
            img: 'https://algumacoisa',
            categoria: { id: 1, name: 'Peito' },
          },
          {
            name: 'Leg Press',
            img: 'https://algumacoisa',
            categoria: { id: 2, name: 'Perna' },
          },
          {
            name: 'Cadeira extensoura',
            img: 'https://algumacoisa',
            categoria: { id: 2, name: 'Perna' },
          },
        ],
      },
    ],
    [
      {
        categorias: [
          { id: 1, name: 'Peito' },
          { id: 2, name: 'Perna' },
        ],
        exercices: [
          {
            name: 'Supino',
            img: 'https://algumacoisa',
            categoria: { id: 1, name: 'Peito' },
          },
          {
            name: 'Supino',
            img: 'https://algumacoisa',
            categoria: { id: 1, name: 'Peito' },
          },
          {
            name: 'Leg Press',
            img: 'https://algumacoisa',
            categoria: { id: 2, name: 'Perna' },
          },
          {
            name: 'Cadeira extensoura',
            img: 'https://algumacoisa',
            categoria: { id: 2, name: 'Perna' },
          },
        ],
      },
    ],
  ],
}; */

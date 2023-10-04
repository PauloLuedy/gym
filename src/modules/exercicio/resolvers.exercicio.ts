import { Inject } from '@nestjs/common';
import {
  Query,
  Resolver,
} from '@nestjs/graphql';
import 'reflect-metadata';
import { PrismaService } from '../../prisma.service';

@Resolver()
export class ExercicioResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) { }

  @Query()
  async allExercises() {
    const result = await this.prismaService.exercicio.findMany({
      where: {
        id: 1
      },
      include: {
        braco: true,
        perna: true
      }
    });


    return {
      name: result[0]?.name,
      tipo: result[0]?.tipo,
      leg: result[0]?.perna,
      arm: result[0]?.braco
    }

  }
}



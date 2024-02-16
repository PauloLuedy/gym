import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class TrainingService {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  public async createTrainings(data) {
    const verifyUser = await this.prismaService.user.findUnique({
      where: {
        userID: data.userID,
      },
    });

    if (!verifyUser) {
      throw new Error(`Usuário com ID ${data.userId} não encontrado`);
    }

    const newTraining = await this.prismaService.training.create({
      data: {
        userID: data.userID,
      },
    });

    for (const exercise of data.exercises) {
      await this.prismaService.trainingToExercise.create({
        data: {
          trainingID: newTraining.id,
          exerciseID: exercise.exerciseID,
        },
      });
    }

    for (const category of data.categories) {
      await this.prismaService.trainingToCategory.create({
        data: {
          trainingID: newTraining.id,
          categoryID: category.categoryID,
        },
      });
    }

    return newTraining ? 'Sucesso' : 'Algo deu errado';
  }
}

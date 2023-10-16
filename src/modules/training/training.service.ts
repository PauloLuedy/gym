import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class TrainingService {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  public async createTrainings(data) {
    const verifyUser = await this.prismaService.user.findUnique({
      where: {
        userId: data.userId,
      },
    });

    if (!verifyUser) {
      throw new Error(`Usuário com ID ${data.userId} não encontrado`);
    }

    const newTraining = await this.prismaService.training.create({
      data: {
        userId: data.userId,
      },
    });

    for (const exercise of data.exercises) {
      await this.prismaService.trainingToExercise.create({
        data: {
          trainingId: newTraining.id,
          exerciseTrainigId: exercise.exerciseID,
        },
      });
    }

    for (const category of data.categories) {
      await this.prismaService.trainingToCategory.create({
        data: {
          trainingId: newTraining.id,
          categoryId: category.categoryIdReference,
        },
      });
    }

    return newTraining ? 'Sucesso' : 'Algo deu errado';
  }
}

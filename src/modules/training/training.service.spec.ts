import { Test, TestingModule } from '@nestjs/testing';
import { TrainingResolver } from './training.resolver';
import { TrainingService } from './training.service';
import { PrismaService } from '../../prisma.service';

describe('Start training test', () => {
  let prismaService: PrismaService;

  const trainingServiceMock = {
    createTraining: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TrainingResolver,
        {
          provide: TrainingService,
          useValue: trainingServiceMock,
        },
        {
          provide: PrismaService,
          useValue: {
            user: {
              findFirst: jest.fn(),
              create: jest.fn(),
              findUnique: jest.fn(),
            },
            training: {
              create: jest.fn(),
            },
            trainingToExercise: {
              create: jest.fn(),
            },
            trainingToCategory: {
              create: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    prismaService = module.get<PrismaService>(PrismaService);
  });

  describe('This is training test ', () => {
    it('should create a training if userID exists', async () => {
      const userData = {
        userId: 1,
      };

      const exerciseData = [{ exerciseID: 6 }, { exerciseID: 1 }];

      const categoryData = [
        { categoryIdReference: 3 },
        { categoryIdReference: 1 },
      ];

      const prismaService = {
        user: {
          findUnique: jest.fn(async () => ({ userId: userData.userId })),
        },
        training: {
          create: jest.fn(async () => ({ id: 22, userId: userData.userId })),
        },
        trainingToExercise: {
          create: jest.fn(),
        },
        trainingToCategory: {
          create: jest.fn(),
        },
      };

      const resolver = new TrainingService(prismaService as any);

      const args = {
        data: {
          userId: userData.userId,
          exercises: [exerciseData],
          categories: [categoryData],
        },
      };

      const result = await resolver.createTrainings(args.data);

      expect(result).toBe('Sucesso');
    });
  });
});

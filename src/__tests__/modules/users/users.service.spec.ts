import { Test, TestingModule } from '@nestjs/testing';
import { validate } from 'class-validator';
import { PrismaService } from '../../../prisma.service';
import { UserDTO } from '../../../modules/users/DTOs/user';
import { UserService } from '../../../modules/users/users.service';

describe('UseService', () => {
  let userService: UserService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: PrismaService,
          useValue: {
            user: {
              findFirst: jest.fn(),
              create: jest.fn(),
              findUnique: jest.fn(),
              findMany: jest.fn(),
            },
            training: {
              create: jest.fn(),
              findMany: jest.fn(),
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

    userService = module.get<UserService>(UserService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
  });

  describe('createUser', () => {
    it('should validate and return no errors with valid data', async () => {
      const dto = new UserDTO();
      dto.userId = 54;
      dto.name = 'John Doe';
      dto.email = 'john@example.com';
      dto.password = 'S5ecurep@ssword';

      const validationErrors = await validate(dto);
      expect(validationErrors.length).toBe(0);
    });

    it('should validate and return errors if name is empty', async () => {
      const dto = new UserDTO();
      dto.email = 'john@example.com';
      dto.password = 'securepassword';

      // isNotEmpty   isString

      const validationErrors = await validate(dto);
      expect(validationErrors.length).toBeGreaterThan(0);
      expect(validationErrors[0]?.constraints?.isNotEmpty).toEqual(
        'O nome não pode estar vazio',
      );
      expect(validationErrors[0]?.constraints?.isString).toEqual(
        'Deve ser um texto',
      );
    });

    it('should validate and return errors if email is invalid', async () => {
      const dto = new UserDTO();
      dto.name = 'John Doe';
      dto.email = 'invalidemail'; // Invalid email
      dto.password = 'securepassword';

      const validationErrors = await validate(dto);
      expect(validationErrors.length).toBeGreaterThan(0);
      expect(validationErrors[0]?.constraints?.isEmail).toEqual(
        'email must be an email',
      );
    });

    it('should throw an error if email already exists', async () => {
      jest.spyOn(prismaService.user, 'findFirst').mockResolvedValueOnce({
        name: 'Name_User',
        password: 'password_User',
        email: 'Test@gmail.com',
        userId: 1,
      });

      const input: UserDTO = {
        userId: 1,
        name: 'Name_User',
        password: 'password_User',
        email: 'Test@gmail.com',
      };

      await expect(userService.createUser(input)).rejects.toThrow(
        'Esse Usuário já esta cadastrado',
      );
    });

    it('should create a user if email is unique', async () => {
      const userMock = {
        name: 'Name_User',
        password: '***',
        email: 'Test@gmail.com',
        userId: 1,
      };
      jest.spyOn(prismaService.user, 'findFirst').mockResolvedValueOnce(null);
      jest.spyOn(prismaService.user, 'create').mockResolvedValueOnce(userMock);

      const input: UserDTO = {
        userId: 1,
        name: 'Name_User',
        password: '***',
        email: 'Test@gmail.com',
      };

      expect(await userService.createUser(input)).toEqual(userMock);
    });

    test('Should get an user by userId', async () => {
      const userMock = {
        name: 'Name_User',
        password: '***',
        email: 'Test@gmail.com',
        userId: 1,
      };
      jest
        .spyOn(prismaService.user, 'findUnique')
        .mockResolvedValueOnce(userMock);

      const result = await userService.user(userMock.userId);
      expect(result.userId).toEqual(userMock.userId);
      expect(result.password).toEqual('***');
    });

    it('should throw an error if user is not found', async () => {
      const userId = 'nonexistentUserId';
      prismaService.user.findUnique(null);

      await expect(userService.user(userId)).rejects.toThrowError(
        `Usuário com ID ${userId} não encontrado`,
      );
    });
  });
});

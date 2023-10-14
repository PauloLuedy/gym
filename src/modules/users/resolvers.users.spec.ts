import { Test, TestingModule } from '@nestjs/testing';
import { validate } from 'class-validator';
import { PrismaService } from '../../prisma.service';
import { UserDTO } from './DTOs/user';
import { UserResolvers } from './resolvers.users';


describe('UserResolver', () => {
  let resolver: UserResolvers;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserResolvers,
        {
          provide: PrismaService,
          useValue: {
            user: {
              findFirst: jest.fn(),
              create: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    resolver = module.get<UserResolvers>(UserResolvers);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('createUser', () => {

    it('should validate and return no errors with valid data', async () => {
      const dto = new UserDTO();
      dto.name = 'John Doe';
      dto.email = 'john@example.com';
      dto.password = 'securepassword';

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
      expect(validationErrors[0]?.constraints?.isNotEmpty).toEqual('Name should not be empty');
      expect(validationErrors[0]?.constraints?.isString).toEqual('Show be a text');

    });

    it('should validate and return errors if email is invalid', async () => {
      const dto = new UserDTO();
      dto.name = 'John Doe';
      dto.email = 'invalidemail'; // Invalid email
      dto.password = 'securepassword';

      const validationErrors = await validate(dto);
      expect(validationErrors.length).toBeGreaterThan(0);
      expect(validationErrors[0]?.constraints?.isEmail).toEqual('email must be an email');
    });

    it('should throw an error if email already exists', async () => {
      jest.spyOn(prismaService.user, 'findFirst').mockResolvedValueOnce({
        name: "Name_User",
        password: "password_User",
        email: "Test@gmail.com",
        userId: 1
      });

      const input: UserDTO = {
        name: "Name_User",
        password: "password_User",
        email: "Test@gmail.com",
      };

      await expect(resolver.createUser(input)).rejects.toThrow('Esse Usuário já esta cadastrado');
    });

    it('should create a user if email is unique', async () => {
      const userMock = {
        name: "Name_User",
        password: "password_User",
        email: "Test@gmail.com",
        userId: 1
      };
      jest.spyOn(prismaService.user, 'findFirst').mockResolvedValueOnce(null);
      jest.spyOn(prismaService.user, 'create').mockResolvedValueOnce(userMock);

      const input: UserDTO = {
        name: "Name_User",
        password: "password_User",
        email: "Test@gmail.com"
      };

      expect(await resolver.createUser(input)).toEqual(userMock);
    });
  });
});

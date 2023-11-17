import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from '../../../modules/auth/auth.service';
import { UserService } from '../../../modules/users/users.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtService as NestJwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserDTO } from '../../../modules/users/DTOs/user';
import * as bcrypt from 'bcrypt';

jest.mock('../../../modules/users/users.service');

describe('AuthService', () => {
  let authService: AuthService;
  let userService: UserService;
  let jwtService: NestJwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        UserService,
        { provide: NestJwtService, useValue: { sign: jest.fn() } },
      ],
      imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
          secret: 'uma-chave-secreta-valida',
          signOptions: { expiresIn: '1h' },
        }),
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
    userService = module.get<UserService>(UserService);
    jwtService = module.get<NestJwtService>(NestJwtService);
  });

  describe('Tests of AuthService', () => {
    test("If password or email doesn't match, should return an error", async () => {
      jest.spyOn(userService, 'findByEmail').mockResolvedValue(null);
      jest.spyOn(bcrypt, 'compare').mockResolvedValue(false as never);

      await expect(
        authService.validateUser('wrongEmail', 'NotExistPassword'),
      ).rejects.toThrow('Email ou senha invalido');
    });

    test('Should return a user validated by e-mail and password', async () => {
      const mockUser = {
        userId: 1,
        name: 'tester',
        email: 'teste@teste.com',
        password: 'Teste@123',
      };

      jest.spyOn(userService, 'findByEmail').mockResolvedValue(mockUser);
      jest.spyOn(bcrypt, 'compare').mockResolvedValue(true as never);

      const result = await authService.validateUser(
        'teste@teste.com',
        'Teste@123',
      );

      expect(result).toEqual({
        userId: mockUser.userId,
        name: mockUser.name,
        email: mockUser.email,
        password: undefined,
      });
    });
    test('if dosent use a token should return a error', async () => {
      const user: UserDTO = {
        userId: 1,
        email: 'test@example.com',
        password: 'd',
        name: 's',
      };

      jest.spyOn(authService, 'verify').mockResolvedValueOnce(null);

      await expect(authService.login(user)).rejects.toThrow(
        'Deu erro na autenticação',
      );
    });
    test('Should get user by e-mail and return user with token', async () => {
      const user: UserDTO = {
        userId: 1,
        email: 'test@example.com',
        password: 'd',
        name: 's',
      };
      const payload = {
        email: user.email,
        sub: user.userId,
      };
      const mockToken = 'mocked-jwt-token';

      jest.spyOn(jwtService, 'sign').mockResolvedValueOnce(mockToken as never);
      jest.spyOn(authService, 'verify').mockResolvedValueOnce(user);

      const result = await authService.login(user);

      expect(result).toEqual({
        acess_tokem: undefined,
        userId: user.userId,
        email: user.email,
        name: user.name,
        password: user.password,
      });
    });
  });
});

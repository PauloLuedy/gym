import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UserService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

jest.mock('../users/users.service');

describe('AuthService', () => {
  let authService: AuthService;
  let userService: UserService;
  let jwtService: JwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService, UserService, JwtService],
    }).compile();

    authService = module.get<AuthService>(AuthService);
    userService = module.get<UserService>(UserService);
    jwtService = module.get<JwtService>(JwtService);
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
  });
});

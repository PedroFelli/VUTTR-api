import FakeUserRepository from '../repositories/fakes/FakeUserRepository';
import CreateUserService from './CreateUserService';
import AppError from '../../../errors/AppError';

describe('Create UserService', () => {
  it('should be able to create a new user', async () => {
    const fakeUserRepository = new FakeUserRepository();
    const createUser = new CreateUserService(fakeUserRepository);

    const user = await createUser.execute({
      name: 'Pedro',
      email: 'pedro@email.com',
      password: 'passwordw123',
    });

    expect(user).toHaveProperty('_id');
    expect(user.name).toEqual(user.name);
  });

  it('should not be able to create a new user with same email', async () => {
    const fakeUserRepository = new FakeUserRepository();
    const createUser = new CreateUserService(fakeUserRepository);

    await createUser.execute({
      name: 'Pedro',
      email: 'pedro@email.com',
      password: 'passwordw123',
    });

    await expect(
      createUser.execute({
        name: 'Pedro',
        email: 'pedro@email.com',
        password: 'passwordw123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});

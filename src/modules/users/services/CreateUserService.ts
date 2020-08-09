import AppError from '../../../errors/AppError';
import IUsersRepository from '../repositories/IUserRepository';

import IUserDTO from '../models/IUserDTO';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserservice {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ name, email, password }: IRequest): Promise<IUserDTO> {
    const checkUserExists = await this.usersRepository.findByEmail(email);

    if (checkUserExists) {
      throw new AppError('Email address already used');
    }

    // const hashedPassword = await this.hashProvider.generateHash(password);

    const user = await this.usersRepository.create({
      name,
      email,
      password,
    });

    return user;
  }
}

export default CreateUserservice;

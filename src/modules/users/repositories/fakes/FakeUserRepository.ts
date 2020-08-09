import { uuid } from 'uuidv4';
import User from '../../models/User';
import IUserDTO from '../../models/IUserDTO';
import UsersRepository from '../IUserRepository';

class FakeUsersRepository implements UsersRepository {
  private users: IUserDTO[] = [];

  public async create(data: IUserDTO): Promise<IUserDTO> {
    const user = new User();

    Object.assign(user, { id: uuid() }, data);

    this.users.push(user);

    return user;
  }

  public async findByEmail(email: string): Promise<IUserDTO | undefined> {
    const fidnUser = this.users.find(user => user.email === email);

    return fidnUser;
  }
}

export default FakeUsersRepository;

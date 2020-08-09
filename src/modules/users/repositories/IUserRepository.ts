import IUserDTO from '../models/IUserDTO';

export default interface IUsersRepository {
  findByEmail(email: string): Promise<IUserDTO | undefined>;
  create(data: IUserDTO): Promise<IUserDTO>;
}

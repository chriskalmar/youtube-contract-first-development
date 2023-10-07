import { userDb } from './data';
import { User } from './user';

export type UserCreationParams = Pick<User, 'email' | 'firstName' | 'lastName' | 'phoneNumbers'>;

export class UsersService {
  public getAll() {
    return userDb;
  }

  public get(id: number, name?: string) {
    return userDb.find((user) => user.id === id);
  }

  public create(userCreationParams: UserCreationParams) {
    const id = userDb.length + 1;

    const newUser: User = {
      id,
      status: 'Happy',
      ...userCreationParams,
    };

    userDb.push(newUser);

    return newUser;
  }
}

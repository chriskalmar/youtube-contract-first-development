import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Route,
  SuccessResponse,
} from 'tsoa';
import { User } from './user';
import { UsersService, UserCreationParams } from './usersService';

@Route('users')
export class UsersController extends Controller {
  @Get()
  public async getUsers(): Promise<Array<User>> {
    return new UsersService().getAll();
  }

  @Get('{userId}')
  public async getUser(
    @Path() userId: number,
    @Query() name?: string,
  ): Promise<User | void> {
    const user = new UsersService().get(userId, name);

    if (!user) {
      this.setStatus(404);
      return;
    }

    return user;
  }

  @SuccessResponse('201', 'Created')
  @Post()
  public async createUser(
    @Body() requestBody: UserCreationParams,
  ): Promise<User> {
    this.setStatus(201);
    return new UsersService().create(requestBody);
  }
}

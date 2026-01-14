import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUsersList(): string[] {
    return ['user_1', 'user_2', 'user_3'];
  }
}

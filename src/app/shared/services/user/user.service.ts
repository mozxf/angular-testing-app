import { inject, Injectable } from '@angular/core';
import { User } from '../../types/user.interface';
import { UtilsService } from '../utils/utils.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  utilsService = inject(UtilsService);
  users: User[] = [];

  addUser(user: User) {
    this.users = [...this.users, user];
  }

  removeUser(userId: User['id']) {
    const updated = this.users.filter((user) => user.id !== userId);
    this.users = updated;
  }
}

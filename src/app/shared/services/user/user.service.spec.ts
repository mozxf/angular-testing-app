import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { User } from '../../types/user.interface';
import { UtilsService } from '../utils/utils.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService],
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('addUser()', () => {
    it('Should add a User', () => {
      const user: User = {
        id: '1',
        name: 'John Doe',
      };
      service.addUser(user);
      expect(service.users).toEqual([{ id: '1', name: 'John Doe' }]);
    });
  });

  describe('removeUser()', () => {
    it('Should remove a User', () => {
      service.users = [{ id: '2', name: 'John Doe' }];

      service.removeUser('2');
      expect(service.users).toEqual([]);
    });
  });
});

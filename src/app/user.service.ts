import { Injectable } from '@angular/core';

const adminUsers = [
  {
    username: 'Rakesh',
    password: 'Narang'
  },
  {
    username: 'Shivam',
    password: 'Muttoo'
  }
];

@Injectable()
export class UserService {

  constructor() { }

  validateUser(username, password) {
    let isAdmin = false;
    for (let i = 0; i < adminUsers.length; i++) {
      if (adminUsers[i].username === username && adminUsers[i].password === password) {
        isAdmin = true;
        break;
      }
    }
    return isAdmin;
  }

}

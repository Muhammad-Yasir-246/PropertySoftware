import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor() 
{

  
 }
 addUser(user) {
  let users = [];
  const storedUsers = localStorage.getItem('Users');
  
  if (storedUsers) {
      users = JSON.parse(storedUsers);
      // Check if users is an array
      if (!Array.isArray(users)) {
          users = [];
      }
      users = [user, ...users];
  } else {
      users = [user];
  }

  localStorage.setItem('Users', JSON.stringify(users));
}

}

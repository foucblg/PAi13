import { Component } from '@angular/core';
import { UserService } from '../user-service';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrl: './user-manager.component.css'
})
export class UserManagerComponent {


  nameInput: string = "";
  mailInput: string = "";
  is_adding_user: boolean = false;
  service = new UserService();

  addUser() {
    this.is_adding_user = true;
  }

  editUser(user: any) {
    // Edit user
  }

  deleteUser(user: any) {
    this.service.deleteUser(user)
    console.log(this.service.getUsers())
  }

  saveUser(name : string, email : string) {
    this.service.addUser(name, email)
    console.log(this.service.getUsers())
  }

  cancelAddUser() {
    this.is_adding_user = false;
  }
}

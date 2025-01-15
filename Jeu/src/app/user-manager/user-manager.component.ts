import { Component } from '@angular/core';
import { UserService } from '../user-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.css'],
  imports: [FormsModule],
})
export class UserManagerComponent {


  nameInput: string = "";
  mailInput: string = "";
  nameEdit: string = "";
  mailEdit: string = "";
  is_adding_user: boolean = false;
  is_editing_user: boolean = false;
  user_to_edit: any = null;
  service = new UserService();

  addUser() {
    this.is_adding_user = true;
  }

  editUser(user: any) {
    this.is_editing_user = true;
    this.user_to_edit = user;
    this.nameEdit = user.name;
    this.mailEdit = user.email;
  }

  cancelEditUser() {
    this.is_editing_user = false;
    this.user_to_edit = null;
    this.nameEdit = "";
    this.mailEdit = "";
  }

  saveEditUser(user:any, name: string, email: string) {
    this.service.editUser(user, name, email)
    this.is_editing_user = false;
    this.user_to_edit = null;
    this.nameEdit = "";
    this.mailEdit = "";
    console.log(this.service.getUsers())
  }

  deleteUser(user: any) {
    this.service.deleteUser(user)
    console.log(this.service.getUsers())
  }

  saveUser(name : string, email : string) {
    this.service.addUser(name, email)
    console.log(this.service.getUsers())
    this.nameInput = "";
    this.mailInput = "";
    this.is_adding_user = false;
  }

  cancelAddUser() {
    this.is_adding_user = false;
    this.nameInput = "";
    this.mailInput = "";
  }
}

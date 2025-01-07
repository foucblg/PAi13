import { Component, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../user-service';

@Component({
  selector: 'inscription-component',
  standalone: true,
  templateUrl: './inscription.component.html',
  imports: [ReactiveFormsModule],
})
export class InscriptionComponent {
  private fb = inject(FormBuilder);
  eventForm = this.fb.group({
    users: this.fb.array([]),
  });

  constructor(
    private userService: UserService
  ) {
    this.userService = userService;
    this.addUser();
  }

  get users() {
    return this.eventForm.get('users') as FormArray;
  }

  addUser() {
    const userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });

    this.users.push(userForm);
  }

  removeUser(index: number) {
    this.users.removeAt(index);
  }

  onSubmit() {
    if (this.eventForm.valid) {
      this.userService.setUsers(this.users);
      this.addUser();
      console.log(this.users);
    }
  }
}

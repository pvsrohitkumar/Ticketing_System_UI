import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatError } from '@angular/material/input';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule, MatInputModule, MatButtonModule, MatError],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  public loginForm: FormGroup | undefined;
  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  public get userNameCtrl(): FormControl {
    return this.loginForm ? this.loginForm.controls['username'] as FormControl : new FormControl('', [Validators.required]);
  }

  public get passwordCtrl(): FormControl {
    return this.loginForm ? this.loginForm.controls['password'] as FormControl : new FormControl('', [Validators.required]);
  }

  formSubmit(): void {
    if (this.loginForm?.valid) {
      console.log('Form Submitted', this.loginForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

}

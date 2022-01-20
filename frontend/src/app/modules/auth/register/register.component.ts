import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup = new FormGroup(
    {
      username: new FormControl(''),
      password: new FormControl(''),
      email: new FormControl(''),
      telephone: new FormControl(''),
      city: new FormControl(''),
    }
  );
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  //getters
  get username(): AbstractControl | null{
    return this.registerForm.get('username');
  }

  get password(): AbstractControl | null{
    return this.registerForm.get('password');
  }

  get email(): AbstractControl | null{
    return this.registerForm.get(' email');
  }

  get telephone(): AbstractControl | null{
    return this.registerForm.get('telephone');
  }

  get city(): AbstractControl | null{
    return this.registerForm.get('city');
  }

  public register(): void{
    //localStorage.setItem('Role', 'Admin');
    this.router.navigate(['/cars']);
  }
}

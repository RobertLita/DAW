import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup = new FormGroup(
    {
      username: new FormControl(''),
      password: new FormControl(''),
    }
  );
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  //getters
  get username(): AbstractControl | null{
    return this.loginForm.get('username');
  }

  get password(): AbstractControl | null{
    return this.loginForm.get('password');
  }

  public login(): void{
    localStorage.setItem('Role', 'Admin');
    this.router.navigate(['/cars']);
  }
}

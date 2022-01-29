import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

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
  )
  public user = "";
  constructor(
    private authService: AuthService,
    private router: Router,
    private dataService: DataService,
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
    this.authService.sign_up(this.loginForm.value).subscribe(
      (result) => {
        localStorage.setItem('User', this.loginForm.value.username);
        this.user = this.loginForm.value.username;
        console.log(this.user);
        this.dataService.changeUserData(this.loginForm.value);
      },
      (error) => {
        console.error(error);
      }
    )
    this.router.navigate(['/cars']);
  }

  public logout(): void{
    localStorage.setItem('User', 'none');
    this.user = "none";
  }
}

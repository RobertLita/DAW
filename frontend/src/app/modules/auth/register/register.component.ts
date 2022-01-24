import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup = new FormGroup(
    {
      //username: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      role: new FormControl('')
      // telephone: new FormControl(''),
      // city: new FormControl(''),
    }
  );
  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }
  //getters
  // get username(): AbstractControl | null{
  //   return this.registerForm.get('username');
  // }

  get password(): AbstractControl | null{
    return this.registerForm.get('password');
  }

  get email(): AbstractControl | null{
    return this.registerForm.get('email');
  }

  // get telephone(): AbstractControl | null{
  //   return this.registerForm.get('telephone');
  // }

  // get city(): AbstractControl | null{
  //   return this.registerForm.get('city');
  // }
  get role(): AbstractControl | null{
    return this.registerForm.get('role');
  }

  public register(): void{
    this.authService.sign_up(this.registerForm.value).subscribe(
      (result) => {
        console.log(result);
        localStorage.setItem('Role', this.registerForm.value.role);
      },
      (error) => {
        console.error(error);
      }
    )
    
    this.router.navigate(['/cars']);
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {


  public subscription!: Subscription;
  public loggedUser: any;
  constructor(
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.subscription = this.dataService.currentUser.subscribe(user => this.loggedUser = user);
    console.log(this.loggedUser)
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  public logout(): void{
  this.router.navigate(['/login']);
  }

}

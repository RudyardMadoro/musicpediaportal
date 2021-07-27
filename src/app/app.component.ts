import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router, private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  signUp(){
    this.router.navigate(['/sign-up']);
  }

  signIn(){
    this.router.navigate(['/sign-in']);
  }
  songs(){
    this.router.navigate(['/songs']);
  }

  artists(){
    this.router.navigate(['/artists']);
  }

  albums(){
    this.router.navigate(['/albums']);
  }

  home(){
    this.router.navigate(['']);

  }
}

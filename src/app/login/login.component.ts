import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  login() {
    sessionStorage.setItem('currentUser', this.username);
    if (this.userService.validateUser(this.username, this.password)) {
      this.router.navigate(['/onboard']);
    }
    else {
      alert('invalid login');
    }
  }

  reset() {
    this.username = '';
    this.password = '';
  }

}

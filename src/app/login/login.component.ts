import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { login } from './login-store/login-page.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private store: Store, private http: HttpClient) {}

  ngOnInit(): void {}

  login() {
    const username = 'clover';
    const password = 'revolc';
    this.store.dispatch(login({ username, password }));

    // Pure service
    // this.http.post('/login', { username, password }).subscribe((res) => {
    //   console.log(res);
    // });
  }
}

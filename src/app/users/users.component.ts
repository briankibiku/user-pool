import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    let resp = this.http.get('https://randomuser.me/api/');
    resp.subscribe((data) => (this.users = data));
  }
}

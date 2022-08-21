import { Component, OnInit, Inject } from '@angular/core';
import { IgxFilterOptions } from 'igniteui-angular';
import { HttpClient } from '@angular/common/http';

export interface DialogData {
  userObject: any;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  public searchContact: any;
  public userObject: any;
  public users: any;

  constructor(private http: HttpClient) {}

  public ngOnInit() {
    let resp = this.http.get('https://reqres.in/api/users?per_page=14');
    resp.subscribe((data) => (this.users = data));
  }

  public toggleFavorite(contact: any) {
    contact.isFavorite = !contact.isFavorite;
  }

  public openEditModal(contact: any) {
    console.log(contact);
  }
  public openDeleteModal(contact: any) {
    console.log(contact);
  }

  get filterContacts() {
    const fo = new IgxFilterOptions();
    fo.key = 'first_name';
    fo.inputValue = this.searchContact;
    return fo;
  }
}

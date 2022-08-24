import { Component, OnInit, Inject } from '@angular/core';
import { IgxFilterOptions } from 'igniteui-angular';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { UserInfoComponent } from '../user-info/user-info.component';
import { ngxCsv } from 'ngx-csv';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  public searchContact: any;
  public userObject: any;
  public users: any;

  constructor(private http: HttpClient, private dialogRef: MatDialog) {}

  public ngOnInit() {
    let resp = this.http.get('https://randomuser.me/api/?results=16');
    resp.subscribe((data) => (this.users = data));
  }

  public fileDownload() {
    console.log(this.users);
    console.log('EXPORT CSV');
    var options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'User list',
      useBom: true,
      // noDownload: false,
      // headers: ['Gender', 'Last Name', 'Email', 'Phone'],
    };
    new ngxCsv(this.users.results, 'UserList', options);
  }

  public viewUserModal(contact: any) {
    contact.isFavorite = !contact.isFavorite;
    this.dialogRef.open(PopUpComponent);
  }

  public openEditModal(contact: any) {
    this.dialogRef.open(PopUpComponent, { data: { user: contact } });
  }
  public openDeleteModal(contact: any) {
    this.dialogRef.open(PopUpComponent);
  }

  public openViewMoreModal(contact: any) {
    this.dialogRef.open(UserInfoComponent, { data: { user: contact } });
  }

  get filterContacts() {
    const fo = new IgxFilterOptions();
    fo.key = 'name.first';
    fo.inputValue = this.searchContact;
    return fo;
  }
}

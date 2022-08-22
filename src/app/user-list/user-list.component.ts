import { Component, OnInit, Inject } from '@angular/core';
import { IgxFilterOptions } from 'igniteui-angular';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { UserInfoComponent } from '../user-info/user-info.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  public searchContact: any;
  public userObject: any;
  public users: any;

  public contacts = [
    {
      isFavorite: false,
      name: 'Lisa Landers',
      phone: '901-747-3428',
      photo:
        'https://www.infragistics.com/angular-demos-lob/assets/images/women/3.jpg',
    },
    {
      isFavorite: true,
      name: 'Dorothy H. Spencer',
      phone: '573-394-9254',
      photo:
        'https://www.infragistics.com/angular-demos-lob/assets/images/women/67.jpg',
    },
    {
      isFavorite: false,
      name: 'Donna Price',
      phone: '859-496-2817',
      photo:
        'https://www.infragistics.com/angular-demos-lob/assets/images/women/50.jpg',
    },
    {
      isFavorite: false,
      name: 'Lisa Landers',
      phone: '901-747-3428',
      photo:
        'https://www.infragistics.com/angular-demos-lob/assets/images/women/3.jpg',
    },
    {
      isFavorite: true,
      name: 'Dorothy H. Spencer',
      phone: '573-394-9254',
      photo:
        'https://www.infragistics.com/angular-demos-lob/assets/images/women/67.jpg',
    },
  ];

  constructor(private http: HttpClient, private dialogRef: MatDialog) {}

  public ngOnInit() {
    let resp = this.http.get('https://randomuser.me/api/?results=16');
    resp.subscribe((data) => (this.users = data));
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

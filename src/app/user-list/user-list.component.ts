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

  public contacts = [
    {
      isFavorite: false,
      name: 'Terrance Orta',
      phone: '770-504-2217',
      photo:
        'https://www.infragistics.com/angular-demos-lob/assets/images/men/27.jpg',
    },
    {
      isFavorite: true,
      name: 'Richard Mahoney',
      phone: '423-676-2869',
      photo:
        'https://www.infragistics.com/angular-demos-lob/assets/images/men/1.jpg',
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

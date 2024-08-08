import { Component, OnInit } from '@angular/core';
import { Contact } from '../../../interfaces/contact/contact';
import { ContactsService } from '../../../services/contacts/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent implements OnInit{

  //#region Variables
  contacts: Contact[] = [];
  //#endregion

  //#region Methods
  getContacts(): void {
    this.contactsService.getAllContacts()
      .subscribe(contacts => this.contacts = contacts);
  }

  ngOnInit(): void {
    this.getContacts();
  }
  //#endregion

  // DI via ctor:
  constructor(private contactsService: ContactsService) { }

}

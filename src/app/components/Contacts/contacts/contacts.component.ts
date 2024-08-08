import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../../services/contacts/contacts.service';
import { Contact } from '../../../classes/Contact/contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent implements OnInit {

  //#region Variables
  contacts: Contact[] = [];
  //#endregion

  //#region Methods
  getContacts(): void {
    this.contactsService.getAllContacts()
      .subscribe(contacts => this.contacts = contacts);
  }
  //#endregion

  // DI via ctor:
  constructor(private contactsService: ContactsService) { }

  ngOnInit(): void {
    this.getContacts();
  }

  //#region Events
  onDeleteContact(id: number): void {
    this.contactsService.deleteContact(id)
      // Updating only changed items in the list
      .subscribe(_ => this.contacts = this.contacts.filter(contact => contact.id !== id));

  }
  //#endregion

}

import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../../services/contacts/contacts.service';
import { Contact } from '../../../classes/Contact/contact';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactBody } from '../../../classes/Contact/contactBody';
import { ToastrService } from 'ngx-toastr';

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

  open(content: any): void {
    this.modalService.open(content);
  }
  //#endregion

  // DI via ctor:
  constructor(
    private contactsService: ContactsService,
    private modalService: NgbModal,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getContacts();
  }

  //#region Events
  onDeleteContact(id: number): void {
    this.contactsService.deleteContact(id)
      // Updating only changed items in the list
      .subscribe(_ => {
        this.contacts = this.contacts.filter(contact => contact.id !== id);
        this.toastrService.success("Delete successfully!", "Delete contact", {timeOut:3000});
      });
  }

  onUpdateContact() : void {
    this.toastrService.success("Updated successfully!", "Update contact", {timeOut:3000});
  }

  onCreateContact(contactBody: ContactBody): void {
    this.contactsService.createContact(contactBody)
      .subscribe(contact => {
        this.contacts.push(contact);
        this.toastrService.success("Created successfully!", "Create contact", {timeOut:3000});
        
      });
  }
  //#endregion

}

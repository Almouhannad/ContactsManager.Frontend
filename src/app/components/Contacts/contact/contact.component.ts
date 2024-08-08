import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../../../classes/Contact/contact';
import { ContactsService } from '../../../services/contacts/contacts.service';
import { ContactBody } from '../../../classes/Contact/contactBody';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  //#region Variables
  isClicked: boolean = false;
  //#endregion

  //#region Inputs
  @Input("contact") contact!: Contact;
  //#endregion

  constructor(public contactsService: ContactsService) { }

  //#region Outputs
  // Note that event emitter MUST be initialized
  @Output("deleted") deleted: EventEmitter<number> = new EventEmitter();
  //#endregion

  //#region Events
  onDelete(): void {
    this.deleted.emit(this.contact.id);
  }

  onUpdate(contactBody: ContactBody): void {
    this.contactsService.updateContact(this.contact.id, contactBody)
      // Update this component (contact)
      .subscribe(contact => this.contact = contact);
  }
  //#endregion


}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../../../classes/Contact/contact';

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

  //#region Outputs
  // Note that event emitter MUST be initialized
  @Output("deleted") deleted: EventEmitter<number> = new EventEmitter();
  //#endregion

  //#region Events
  onDelete(): void {
    this.deleted.emit(this.contact.id);
  }
  //#endregion


}

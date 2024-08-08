import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactBody } from '../../../classes/Contact/contactBody';
@Component({
  selector: 'app-create-contact-form',
  templateUrl: './create-contact-form.component.html',
  styleUrl: './create-contact-form.component.css'
})
export class CreateContactFormComponent {

  //#region Outputs
  @Output("created") created: EventEmitter<ContactBody> = new EventEmitter();
  //#endregion

  //#region Variables
  @ViewChild("createForm") createForm: NgForm;
  formModel: ContactBody = new ContactBody();
  //#endregion

  //#region Events
  onSubmit(): void {
    this.created.emit(this.formModel);
  }
  //#endregion
}

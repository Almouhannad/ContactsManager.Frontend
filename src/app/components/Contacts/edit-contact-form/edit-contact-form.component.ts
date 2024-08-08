import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ContactBody } from '../../../classes/Contact/contactBody';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-contact-form',
  templateUrl: './edit-contact-form.component.html',
  styleUrl: './edit-contact-form.component.css'
})
export class EditContactFormComponent implements OnInit {

  //#region Inputs
  @Input("contactBody") contactBody: ContactBody;
  //#endregion

  //#region Outputs
  @Output("updated") updated: EventEmitter<ContactBody> = new EventEmitter();
  //#endregion

  //#region Variables
  @ViewChild("editForm") editForm: NgForm;
  formModel: ContactBody;
  //#endregion

  ngOnInit(): void {
      this.formModel = this.contactBody;
  }

  //#region Events
  onSubmit(): void {
    this.updated.emit(this.formModel);

    // To make submit button non-clickable when submitting
    this.editForm.form.markAsPristine();
  }
  //#endregion

}

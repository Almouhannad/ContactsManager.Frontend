import { Component, Input } from '@angular/core';
import { Contact } from '../../../interfaces/contact/contact';

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



}

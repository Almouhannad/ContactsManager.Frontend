import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/root/app.component';
import { ContactsService } from './services/contacts/contacts.service';
import { ContactComponent } from './components/Contacts/contact/contact.component';
import { ContactsComponent } from './components/Contacts/contacts/contacts.component';
import { HttpClientModule } from '@angular/common/http';
import { EditContactFormComponent } from './components/Contacts/edit-contact-form/edit-contact-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactsComponent,
    EditContactFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    ContactsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { CreateContactFormComponent } from './components/Contacts/create-contact-form/create-contact-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactsComponent,
    EditContactFormComponent,
    CreateContactFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    ContactsService,
    CreateContactFormComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

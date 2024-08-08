import { Injectable } from '@angular/core';
import { AppModule } from '../../app.module';
import * as config from "../../../config"
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../../classes/Contact/contact';

@Injectable({
  providedIn: AppModule
})
export class ContactsService {

  //#region Variables
  url: string = config.apiUrl + "Contacts"
  headers: HttpHeaders;
  //#endregion

  //#region Methods
  getHeaders(): HttpHeaders {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return headers;
  }
  //#endregion

  //#region Ctor
  constructor(private http: HttpClient) {
    this.headers = this.getHeaders();
  }
  //#endregion

  //#region Queries
  getContactById(id: number): Observable<Contact> {
    return this.http.get<Contact>(`${this.url}/${id}`, { headers: this.headers });
  }

  getAllContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.url, { headers: this.headers });
  }
  //#endregion

  //#region Commands
  deleteContact(id: number): Observable<Contact> {
    return this.http.delete<Contact>(`${this.url}/${id}`, { headers: this.headers });
  }
  //#endregion
}

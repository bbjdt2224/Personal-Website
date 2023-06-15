import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AirtableResponse, ToDoItem } from '../interfaces/airtable.interface';

@Injectable()
export class AirtableService {
  url: string = '';
  options = {};

  constructor(private http: HttpClient) {
    this.url = environment.airtable_url + environment.airtable_base_key;
    this.options = {
      headers: { Authorization: 'Bearer ' + environment.airtable_api_token },
    };
  }

  mapAirtableToData<T>(data: AirtableResponse<T>): T[] {
    return data.records.map((r) => r.fields);
  }

  getTodoList() {
    return this.http.get(this.url + '/' + environment.todo_list_id, this.options);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Design } from '../interfaces/design.interface';
import { AirtableResponse } from 'src/interfaces/airtable-response.interface';

@Injectable()
export class StickerDesignService {
  designs: Design[];

  constructor(private http: HttpClient) {}

  getAirtableRecords(response: AirtableResponse) {
    return response.records.map((record) => record.fields);
  }

  async getDesigns() {
    const designResponse = await this.http
      .get(
        'https://api.airtable.com/v0/applkHTorWt7nP2Kf/Designs?api_key=keyuyEzd2rQbq8Jb7&filterByFormula=NOT(Sold)'
      )
      .toPromise();
    this.designs = this.getAirtableRecords(designResponse as AirtableResponse);
  }
}

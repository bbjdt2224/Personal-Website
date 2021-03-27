import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Design } from '../interfaces/design.interface';
import { AirtableResponse } from 'src/interfaces/airtable-response.interface';
import { Feedback } from '../interfaces/feedback.interface';

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

  async addFeedback(feedback: Feedback) {
    console.log(feedback);
    const feedbackResponse = await this.http
      .post(
        'https://api.airtable.com/v0/applkHTorWt7nP2Kf/Feedback',
        {
          records: [
            {
              fields: {
                Name: feedback.name,
                Email: feedback.email,
                Feedback: feedback.feedback,
                Time: feedback.time,
              },
            },
          ],
        },
        { headers: { Authorization: 'Bearer keyuyEzd2rQbq8Jb7' } }
      )
      .toPromise();
    console.log(feedbackResponse);
  }
}

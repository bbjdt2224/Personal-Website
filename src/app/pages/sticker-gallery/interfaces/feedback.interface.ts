import { Timestamp } from 'rxjs';

export interface Feedback {
  id: number;
  name: string;
  email: string;
  feedback: string;
  time: Date;
}

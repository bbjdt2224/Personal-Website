import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feedback } from '../interfaces/feedback.interface';
import { StickerDesignService } from '../service/sticker-design.service';

@Component({
  selector: 'jt-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  feedback: FormGroup;
  errorMsg = '';
  successMsg = '';
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private stickerDesignService: StickerDesignService
  ) {}

  ngOnInit() {
    this.feedback = this.fb.group({
      name: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      feedback: ['', Validators.required],
    });
  }

  async onSubmit() {
    this.errorMsg = '';

    if (this.feedback.valid) {
      this.submitted = true;
      const feedback: Feedback = this.feedback.value;
      feedback.time = new Date();
      await this.stickerDesignService.addFeedback(feedback);
      this.successMsg = 'Feedback Received';
    } else {
      this.errorMsg = 'Please fill all fields';
    }
  }
}

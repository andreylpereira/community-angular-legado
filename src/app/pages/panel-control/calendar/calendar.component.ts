import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  public dateForm: FormGroup = this.formBuilder.group({
    date: ['', [Validators.required]],
  });

  createDate() {
    let date: any = {
      date: this.dateForm.get('date')?.value,
    };

    console.log(date.date);
  }
}

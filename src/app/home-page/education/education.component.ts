import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Education } from '../../interfaces/education';


@Component({
  selector: 'app-education',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent implements OnInit {
 @Input({required: true}) education!: Education[];


  ngOnInit(): void {}
}

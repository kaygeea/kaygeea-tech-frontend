import { Component, Input, OnInit } from '@angular/core';
import { ContactDetail } from '../interfaces/contact-detail';
import { Profile } from '../interfaces/profile';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css'
})
export class ContactMeComponent implements OnInit {
  @Input({required: true}) contactDetails!: ContactDetail;

  ngOnInit(): void {}
}

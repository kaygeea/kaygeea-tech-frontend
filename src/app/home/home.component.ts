import { Component, Input } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { OnInit } from '@angular/core';
import { Profile } from '../interfaces/profile';
import { AboutComponent } from '../about/about.component';
import { ContactMeComponent } from '../contact-me/contact-me.component';
import { EducationComponent } from '../education/education.component';
import { SkillsComponent } from '../skills/skills.component';
import { HomePageProjectComponent } from '../home-page-project/home-page-project.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, ContactMeComponent, EducationComponent, HomePageProjectComponent, SkillsComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  @Input({required: true}) public homeProfile!: Profile;

  ngOnInit(): void {
    initFlowbite();
  }
}

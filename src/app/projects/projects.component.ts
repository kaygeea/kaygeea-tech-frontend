import { Component, Input, OnInit } from '@angular/core';
import { ProjectsNavComponent } from '../projects-nav/projects-nav.component';
import { Profile } from '../interfaces/profile';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectsNavComponent, FooterComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  @Input({required: true}) public profile!: Profile["data"];

  ngOnInit(): void {}
}

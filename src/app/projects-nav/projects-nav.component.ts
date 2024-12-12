import { Component, Input, OnInit, } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProjectDetailComponent } from '../project-detail/project-detail.component';
import { Profile } from '../interfaces/profile';
import { Project } from '../interfaces/project';
import { FromKebabPipe } from '../utils/pipes/from-kebab.pipe';
import { TitleCasePipe } from '@angular/common';



@Component({
  selector: 'app-projects-nav',
  standalone: true,
  imports: [RouterLink, RouterOutlet, FromKebabPipe, TitleCasePipe],
  templateUrl: './projects-nav.component.html',
  styleUrl: './projects-nav.component.css'
})
export class ProjectsNavComponent implements OnInit {
  @Input() public profile!: Profile;
  protected projects!: Project[];

  ngOnInit(): void {
    this.projects = this.profile.projects;
  }

  assignProjectData(component: ProjectDetailComponent) : void {
    component.projects = this.projects;
  }
}

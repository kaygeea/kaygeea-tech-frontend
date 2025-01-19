import { Component, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProjectDetailComponent } from '../project-detail/project-detail.component';
import { Profile } from '../../interfaces/profile';
import { Project } from '../../interfaces/project';
import { FromKebabPipe } from '../../utils/pipes/from-kebab.pipe';
import { TitleCasePipe } from '@angular/common';
import { ProfileService } from '../../services/profile.service';
import { ProjectFocus } from '../../interfaces/project';
import { ProjectsOverviewComponent } from '../projects-overview/projects-overview.component';



@Component({
  selector: 'app-projects-nav',
  standalone: true,
  imports: [RouterLink, RouterOutlet, FromKebabPipe, TitleCasePipe],
  templateUrl: './projects-nav.component.html',
  styleUrl: './projects-nav.component.css'
})
export class ProjectsNavComponent {
  @Input() public profile!: Profile["data"];
  protected projects!: Project[];
  protected projectFocus = ProjectFocus;

  constructor(private readonly profileService: ProfileService) {
    this.profile = this.profileService.profile.data;
    this.projects = this.profile.projects;
  }

  assignProjectData(component: ProjectDetailComponent | ProjectsOverviewComponent) : void {
    if (component instanceof ProjectDetailComponent) {
      component.projects = this.projects;
      component.footerLogo = this.profile.logo;
    } else if (component instanceof ProjectsOverviewComponent) {
      component.projects = this.projects
    }
    
  }
}

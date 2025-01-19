import { Component, OnInit } from '@angular/core';
import { ProjectsNavComponent } from '../projects-nav/projects-nav.component';
import { Profile } from '../../interfaces/profile';
import { ProfileService } from '../../services/profile.service';
import { NavbarComponent } from '../../home-page/navbar/navbar.component';
import { LsCacheService } from '../../services/ls-cache.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NavbarComponent, ProjectsNavComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  protected profile!: Profile["data"];

  constructor(
    private readonly profileService: ProfileService,
  ) {}

  ngOnInit(): void {
    this.profileService.fetchHomePageProfile().subscribe((response) => {
      this.profile = response.data
    });
  }
}

import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { OnInit } from '@angular/core';
import { Profile } from '../../interfaces/profile';
import { AboutComponent } from '../about/about.component';
import { ContactMeComponent } from '../contact-me/contact-me.component';
import { EducationComponent } from '../education/education.component';
import { SkillsComponent } from '../skills/skills.component';
import { HomePageProjectComponent } from '../home-page-project/home-page-project.component';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProfileService } from '../../services/profile.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LsCacheService } from '../../services/ls-cache.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AboutComponent,
    ContactMeComponent,
    EducationComponent,
    HomePageProjectComponent,
    SkillsComponent,
    FooterComponent,
    NavbarComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  homeProfile!: Profile["data"];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly profileService: ProfileService,
  ) {}

  ngOnInit(): void {
    initFlowbite();
    const lsi = this.route.snapshot.queryParamMap.get('lsi');

    if (lsi) {
      this.router.navigate(['/home'], { replaceUrl: true });
    }

    this.loadHomePageProfile(lsi);
  }

  private loadHomePageProfile(lsi: string | null): void {
    this.profileService.fetchHomePageProfile(lsi).subscribe((response) => {
      this.homeProfile = response.data
    });
  }
}

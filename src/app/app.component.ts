import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileService } from './services/profile.service';
import { Profile } from './interfaces/profile';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  public profile!: Profile;

  constructor(private ProfileService: ProfileService) {}

  ngOnInit(): void {
    this.ProfileService.fetchHomeProfile().subscribe(profileData => {
      this.profile = profileData;
    })
  }

  assignData(component: any) {
    if (component instanceof HomeComponent) {
      component.homeProfile = this.profile;
    } else if (component instanceof ProjectsComponent) {
      component.profile = this.profile;
    }
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Profile } from '../interfaces/profile';
import { Project } from '../interfaces/project';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TitleCasePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  @Input({required: true}) public navProfile!: Profile["data"];
  kaygeeaLogoLight!: string;
  protected projects!: Project[]

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.projects = this.navProfile.projects;
    this.kaygeeaLogoLight = this.navProfile.last_name;
  }

  // navigateToProject(projectName: string) {
  //   this.router.navigate(['projects/', projectName])
  // }

  // navigateToSection(sectionId: string) {
  //   this.router.navigate([], { fragment: sectionId})
  // }
}

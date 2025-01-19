import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Profile } from '../../interfaces/profile';
import { Project } from '../../interfaces/project';
import { TitleCasePipe } from '@angular/common';
import { FromKebabPipe } from '../../utils/pipes/from-kebab.pipe';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TitleCasePipe, FromKebabPipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  @Input({ required: true }) public navProfile!: Profile["data"];
  protected kaygeeaLogoLight!: string;
  protected projects!: Project[];

  constructor() {}

  ngOnInit(): void {
    this.kaygeeaLogoLight = this.navProfile.logo.light_mode;
    this.projects = this.navProfile.projects;
  }
}

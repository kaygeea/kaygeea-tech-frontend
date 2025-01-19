import { TitleCasePipe } from '@angular/common';
import { initFlowbite } from 'flowbite';
import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-project-details-nav',
  standalone: true,
  imports: [TitleCasePipe, RouterLink, RouterLinkActive],
  templateUrl: './project-details-nav.component.html',
  styleUrl: './project-details-nav.component.css'
})
export class ProjectDetailsNavComponent implements OnInit {
  @Input() sectionTitles!: string[];
  @Input() projectName!: string | null;
  @Input() projectScope!: string | null;

  constructor() {}

  ngOnInit(): void {
    initFlowbite();
  }

  navigateToSection(event: MouseEvent) {
    const sectionId = event.view?.document.location.hash.slice(1);
    if (sectionId) {
      document.getElementById(sectionId)?.scrollIntoView({behavior: "instant"})
    }
  }
}

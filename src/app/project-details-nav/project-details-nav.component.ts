import { NgFor, TitleCasePipe } from '@angular/common';
import { initFlowbite } from 'flowbite';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-project-details-nav',
  standalone: true,
  imports: [TitleCasePipe, RouterLink, RouterLinkActive],
  templateUrl: './project-details-nav.component.html',
  styleUrl: './project-details-nav.component.css'
})
export class ProjectDetailsNavComponent  implements OnInit {
  @Input() sectionTitles!: string[];
  @Input() projectName!: string | null;
  @Input() projectScope!: string | null;

  ngOnInit(): void {
    initFlowbite();
  }
}

import { Component, Input } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { Skill } from '../interfaces/skill';

@Component({
  selector: 'app-tech-skills',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './tech-skills.component.html',
  styleUrl: './tech-skills.component.css'
})
export class TechSkillsComponent {
  isTree: boolean;
  isParent: boolean;
  @Input() technicalSkills!: Skill[]

  constructor() {
    this.isTree = true;
    this.isParent = true;
  }
}

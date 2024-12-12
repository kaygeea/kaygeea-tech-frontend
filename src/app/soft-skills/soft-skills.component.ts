import { Component, Input } from '@angular/core';
import { Skill } from '../interfaces/skill';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-soft-skills',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './soft-skills.component.html',
  styleUrl: './soft-skills.component.css'
})
export class SoftSkillsComponent {
  isTree: boolean;
  isParent: boolean;
  @Input() softSkills!: Skill[]

  constructor() {
    this.isTree = true;
    this.isParent = true;
  }
}

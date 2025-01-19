import { Component, Input, OnInit } from '@angular/core';
import { SoftSkillsComponent } from "../soft-skills/soft-skills.component";
import { TechSkillsComponent } from "../tech-skills/tech-skills.component";
import { GroupedSkills, Skill } from '../../interfaces/skill';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SoftSkillsComponent, TechSkillsComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit{
  @Input({required: true}) public skills!: Skill[];
  protected groupedSkills!: GroupedSkills[];
  protected softSkills!: Skill[];
  protected technicalSkills!: Skill[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.groupSkills();
    this.softSkills = this.groupedSkills[0].values;
    this.technicalSkills = this.groupedSkills[1].values;
  }

  groupSkills() {
    this.dataService.groupSkills(this.skills).subscribe(groupedSkills => {
      this.groupedSkills = groupedSkills
    })
  }
}
